import { getURLForVideo, TEDVideo } from './ted-interface.mjs'

export function getTheMostInterestingOnes(videos: TEDVideo[], count: number): TEDVideo[] {
    return videos
        .filter(video => video.duration < 3600) // Only the ones that are less than an hour
        .filter(video => getAge(video) > 1000 * 60 * 60 * 24 * 365 / 2) // Only the ones that are more than 6 months old
        .sort((a, b) => b.viewedCount / getAge(b) - a.viewedCount / getAge(a)) // Sort by most watched per day
        .slice(0, count)
}

export function renderToMarkdownSummary(video: TEDVideo, index: number): string {
    return `${index + 1}. [${video.title} by ${video.presenterDisplayName}](${getURLForVideo(video)
    }) (${formatSeconds(video.duration)}) – Watched by ${Math.round(video.viewedCount / 1000000)}M people since ${video.recordedOn.split('T')[0]}`
}

export function renderToSpreadsheetRow(video: TEDVideo, index: number): string {
    return [
        new Date().toLocaleString('sv').substring(0, 10),
        video.recordedOn.substring(0, 10),
        video.presenterDisplayName,
        video.title,
        video.type.name,
        getURLForVideo(video),
        Math.round(video.duration / 60),
        `ted-scraper (views: ${Math.round(video.viewedCount / 1000000)}M)`,
        index + 1
    ].join('\t')
}

function getAge(video: TEDVideo) {
    return new Date().getTime() - new Date(video.recordedOn).getTime()
}

function formatSeconds(seconds: number): string {
    const hours = Math.floor(seconds / 3600)
    const minutes = Math.floor((seconds - hours * 3600) / 60)
    seconds = seconds - hours * 3600 - minutes * 60
    return `${hours > 0 ? hours + 'h ' : ''}${minutes > 0 ? minutes + 'm ' : ''}${seconds > 0 ? seconds + 's' : ''}`
}

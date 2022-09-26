// Project setup based on this guide: https://dev.to/franciscomendes10866/how-to-build-a-node-api-with-esbuild-8di
import { getCompleteVideoList, getURLForVideo, TEDVideo } from './ted-interface.mjs'
import { doesVideoListFileExist, readVideoListFile, writeVideoListToFile } from './data-file-handler.mjs'

/* Settings */
const videosToFetchPerRequest = 50
const waitTimeBetweenRequestsInMilliseconds = 3000
const forceDownloadVideoList = false
const numberOfTopVideosToList = 10

/* Download list if needed */
if (!await doesVideoListFileExist() || forceDownloadVideoList) {
    const videos = await getCompleteVideoList(videosToFetchPerRequest, waitTimeBetweenRequestsInMilliseconds)
    await writeVideoListToFile(videos)
}

/* Read list */
const videos: TEDVideo[] = await readVideoListFile()

/* Print stats */
const getAge = (video: TEDVideo) => new Date().getTime() - new Date(video.recordedOn).getTime()
videos
    .filter(video => video.duration < 3600)
    .sort((a, b) => b.viewedCount / getAge(b) - a.viewedCount / getAge(a))
    .slice(0, numberOfTopVideosToList)
    .map(video => `[${video.title} by ${video.presenterDisplayName}](${getURLForVideo(video)
    }) (${formatSeconds(video.duration)}) – Watched by ${video.viewedCount.toLocaleString()} people since ${video.recordedOn.split('T')[0]}`)
    .forEach((line, index) => console.log(`${index + 1}. ${line}`))

function formatSeconds(seconds: number): string {
    const hours = Math.floor(seconds / 3600)
    const minutes = Math.floor((seconds - hours * 3600) / 60)
    seconds = seconds - hours * 3600 - minutes * 60
    return `${hours > 0 ? hours + 'h ' : ''}${minutes > 0 ? minutes + 'm ' : ''}${seconds > 0 ? seconds + 's' : ''}`
}

// Project setup based on this guide: https://dev.to/franciscomendes10866/how-to-build-a-node-api-with-esbuild-8di
import { getCompleteVideoList, getURLForVideo, TEDVideo } from './ted-interface.mjs'
import { doesVideoListFileExist, readVideoListFile, writeVideoListToFile } from './data-file-handler.mjs'

/* Settings */
const videosToFetchPerRequest = 50
const waitTimeBetweenRequestsInMilliseconds = 3000
const forceDownloadVideoList = false;

/* Download list if needed */
if (!doesVideoListFileExist() || forceDownloadVideoList) {
    const videos = await getCompleteVideoList(videosToFetchPerRequest, waitTimeBetweenRequestsInMilliseconds)
    await writeVideoListToFile(videos)
}

/* Read list */
const videos: TEDVideo[] = await readVideoListFile()

/* Print stats */
const getAge = (video: TEDVideo) => new Date().getTime() - new Date(video.recordedOn).getTime()
videos.sort((a, b) => b.viewedCount / getAge(b) - a.viewedCount / getAge(a))
videos.slice(0, 10)
    .map(video => ({url: getURLForVideo(video), viewedCount: video.viewedCount, date: video.recordedOn, speaker: video.presenterDisplayName, title: video.title}))
.forEach((data, index) => console.log(`${index + 1}. [${data.title} by ${data.speaker}](${data.url}) – Watched by ${data.viewedCount.toLocaleString()} people since ${data.date.split('T')[0]}`))

// Project setup based on this guide: https://dev.to/franciscomendes10866/how-to-build-a-node-api-with-esbuild-8di
import { getCompleteVideoList, getURLForVideo, TEDVideo } from './ted-interface.mjs'
import { doesVideoListFileExist, readVideoListFile, writeVideoListToFile } from './data-file-handler.mjs'
import { getTheMostInterestingOnes, renderToMarkdownSummary } from './analyser.mjs'

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
getTheMostInterestingOnes(videos, numberOfTopVideosToList)
    .map(renderToMarkdownSummary)
    .forEach((line: string, index: number) => console.log(`${index + 1}. ${line}`))

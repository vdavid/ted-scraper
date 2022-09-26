// Project setup based on this guide: https://dev.to/franciscomendes10866/how-to-build-a-node-api-with-esbuild-8di
import { getCompleteVideoList, TEDVideo } from './ted-interface.mjs'
import { doesVideoListFileExist, readVideoListFile, writeCsv, writeVideoListToFile } from './data-file-handler.mjs'
import { getTheMostInterestingOnes, renderToMarkdownSummary, renderToSpreadsheetRow } from './analyser.mjs'

/* Settings */
const videosToFetchPerRequest = 50
const waitTimeBetweenRequestsInMilliseconds = 3000
const forceDownloadVideoList = false
const numberOfTopVideosToList = 10
const writeCSV = false

/* Download list if needed */
if (!await doesVideoListFileExist() || forceDownloadVideoList) {
    console.log('Downloading video list...')
    const videos = await getCompleteVideoList(videosToFetchPerRequest, waitTimeBetweenRequestsInMilliseconds)
    console.log('Writing video list to file...')
    await writeVideoListToFile(videos)
}

/* Read list */
const videos: TEDVideo[] = await readVideoListFile()

/* Print/write output */
if (!writeCSV) {
    getTheMostInterestingOnes(videos, numberOfTopVideosToList)
        .map(renderToMarkdownSummary)
        .forEach(line => console.log(line))
} else {
    await writeCsv(getTheMostInterestingOnes(videos, numberOfTopVideosToList)
        .map(renderToSpreadsheetRow)
        .join('\n'))
    console.log('Wrote CSV successfully.')
}

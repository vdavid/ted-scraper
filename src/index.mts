// Project setup based on this guide: https://dev.to/franciscomendes10866/how-to-build-a-node-api-with-esbuild-8di
import { getVideos } from './ted-interface.mjs'

console.log(await getVideos())

// Project setup based on this guide: https://dev.to/franciscomendes10866/how-to-build-a-node-api-with-esbuild-8di
import fetch from 'node-fetch'

console.log(await getVideos())

async function getVideos(count: number = 10, offset: number = 0) {
    const response = await fetch('https://graphql.ted.com/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        body: JSON.stringify({
            operationName: null,
            query: `
query {
  videos(first: ${count} after: "${offset}") {
    nodes {
      id
      slug
      presenterDisplayName
      title
      recordedOn
      duration
      language
      curatorApproved
      description
      displayOrder
      topics {
        nodes {
          name
        }
      }
      viewedCount
      
      speakers {
        nodes {
          firstname
          lastname
          whoTheyAre
          whatOthersSay
          whyListen
        }
      }
    }
  }
}`,
            variables: {}
        })
    })
    const json = await response.json() as { data: { videos: { nodes: [] } } }
    return json.data.videos.nodes
}


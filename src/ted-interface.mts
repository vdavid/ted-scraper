import fetch from 'node-fetch'

export type TEDSpeaker = {
    firstname: string
    lastname: string
    whoTheyAre: string
    whatOthersSay: string
    whyListen: string
}

export type TEDVideo = {
    id: string
    // A short human-readable identifier for this video. Suitable for building URLs.
    slug: string
    // The video title. No speaker name prepended.
    title: string
    // Duration of the video, in seconds.
    duration: number
    // Paragraph-length description of the video's content. May be blank in some cases.
    description: string
    // A string describing the speaker(s). Intended for display purposes only. Use `speakers` for more detailed info.
    presenterDisplayName: string
    // Speakers who are associated with this video.
    speakers: TEDSpeaker[]
    // Time at which the video was most recently published. ISO8601 Date and time
    publishedAt: string
    // Date that a video was created. Note this is the date of content creation, not publication. Can be null. ISO8601
    recordedOn: string
    // Use this description when sharing the video to social media.
    socialDescription: string
    // Use this title when sharing the video to social media.
    socialTitle: string
    // Basically tags
    topics: { nodes: { name: string }[] }
    // Often, the event the talk was given at. It's 'TED-Ed' for TED-Ed videos.
    // We pull partner info out of these for Institute and Salon talks. Ultimately, this is controlled by editorial.
    videoContext: string
    type: { name: string }
    // The language the speaker is speaking in.
    audioInternalLanguageCode: string
    // The language the title, description, speaker name, and transcripts are in. It's probably what was requested,
    // but not guaranteed...sometimes we fall back to English, or the language the talk was given in.
    internalLanguageCode: string
    language: string
    // A video can have >1 photoset in talkstar. This is its primary one.
    primaryImageSet: { width: number, height: number, url: string }
    viewedCount: number
}

export async function getVideos(count: number = 10, offset: number = 0): Promise<TEDVideo[]> {
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
      title
      duration
      description
      presenterDisplayName
      speakers {
        nodes {
          firstname
          lastname
          whoTheyAre
          whatOthersSay
          whyListen
        }
      }
      publishedAt
      recordedOn
      socialDescription
      socialTitle
      topics {
        nodes {
          name
        }
      }
      videoContext
      type {
        name
      }
      audioInternalLanguageCode
      internalLanguageCode
      language
      primaryImageSet {
        url
        width
        height
      }
      viewedCount
    }
  }
}`,
            variables: {}
        })
    })
    const json = await response.json() as { data: { videos: { nodes: [] } } }
    return json.data.videos.nodes
}

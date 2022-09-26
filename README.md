# TED scraper

A quick way to find the best TED talks.

**Note:** If you’re only interested in a list of the best TED talks ever, just come to [this spreadsheet](https://docs.google.com/spreadsheets/d/1a39fdMurOK9MHcDY-z9RxJbgeKttSTWYqHqeCpBYtFM/edit).

**How it gets data:** it uses TED’s public GraphQL API: https://graphql.ted.com/

**How it filters talks:** it removes any video that’s more than an hour long (likely not a TED talk), and any that’s younger than six months old (hasn’t been proven by time).

**How it ranks talks:** view count / age. Seemed to be simple and reliable enough.

My project was inspired by this [spreadsheet](https://docs.google.com/spreadsheets/d/1A33erQIgXQn1eHCoQAW7em17SFCNH8mZHDFctQuztaY/edit?type=view&gid=0&f=true&sortcolid=10&sortasc=false&rowsperpage=250&pli=1#gid=0) and [project](http://gist.github.com/391312) from 2010.

## How to use

Again, if you just need the data, see the [spreadsheet](https://docs.google.com/spreadsheets/d/1a39fdMurOK9MHcDY-z9RxJbgeKttSTWYqHqeCpBYtFM/edit).
If you want to run the script then here are some simple instructions to follow. It takes 1–3 minutes to set up then you’ll need to wait about 10 minutes for the data download.

1. Have Node.js 12 or newer installed. (Tested with Node.js 16)
2. Clone the repo
3. Run `yarn install` to install dependencies.
4. Run `yarn build && yarn start` to run the script.
5. Wait. The download takes about 10 minutes on a fast connection. You’ll see some feedback in the console. In 2022-09, there are about 4,500 TED videos.
6. See the URLs of the top 10 TED talks in the console. See 15+ MB of data in `data/videos.json`. This is the cache that’ll be used for further requests.
7. Optional: Settings are available in the first lines of `index.mts`. Change `numberOfTopVideosToList` to see more than ten top videos, and  re-run. Note: It only downloaded data once, so it only takes a split-second to re-run any time.
8. To re-download data (for example, if you need to re-run the script after a few months), set `forceDownloadVideoList` to `true`, or just delete `data/videos.json`.
9. A CSV output option is available with the flag `writeCSV`,

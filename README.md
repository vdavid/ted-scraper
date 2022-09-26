# TED scraper

A quick way to find the best TED talks.

If you’re only interested in the list, then here is a top 10 for you:

1. [The war in Ukraine could change everything by Yuval Noah Harari](https://www.ted.com/talks/yuval_noah_harari_the_war_in_ukraine_could_change_everything) (49m 37s) – Watched by 7M people since 2022-03-01
2. [Inside the mind of a master procrastinator by Tim Urban](https://www.ted.com/talks/tim_urban_inside_the_mind_of_a_master_procrastinator) (13m 54s) – Watched by 63M people since 2016-02-16
3. [How every child can thrive by five by Molly Wright](https://www.ted.com/talks/molly_wright_how_every_child_can_thrive_by_five) (7m 28s) – Watched by 8M people since 2021-07-21
4. [War in Ukraine -- and what it means for the world order by Ian Bremmer](https://www.ted.com/talks/ian_bremmer_war_in_ukraine_and_what_it_means_for_the_world_order) (49m 12s) – Watched by 4M people since 2022-03-10
5. [Your body language may shape who you are by Amy Cuddy](https://www.ted.com/talks/amy_cuddy_your_body_language_may_shape_who_you_are) (20m 45s) – Watched by 66M people since 2012-06-26
6. [What makes a good life? Lessons from the longest study on happiness by Robert Waldinger](https://www.ted.com/talks/robert_waldinger_what_makes_a_good_life_lessons_from_the_longest_study_on_happiness) (12m 37s) – Watched by 43M people since 2015-11-14
7. [The next outbreak? We’re not ready by Bill Gates](https://www.ted.com/talks/bill_gates_the_next_outbreak_we_re_not_ready) (8m 23s) – Watched by 44M people since 2015-03-18
8. [The future we’re building -- and boring by Elon Musk](https://www.ted.com/talks/elon_musk_the_future_we_re_building_and_boring) (40m 40s) – Watched by 31M people since 2017-04-24
9. [How to speak so that people want to listen by Julian Treasure](https://www.ted.com/talks/julian_treasure_how_to_speak_so_that_people_want_to_listen) (9m 44s) – Watched by 51M people since 2013-06-10
10. [This could be why you’re depressed or anxious by Johann Hari](https://www.ted.com/talks/johann_hari_this_could_be_why_you_re_depressed_or_anxious) (20m 22s) – Watched by 16M people since 2019-07-20

Inspired by this [spreadsheet](https://docs.google.com/spreadsheets/d/1A33erQIgXQn1eHCoQAW7em17SFCNH8mZHDFctQuztaY/edit?type=view&gid=0&f=true&sortcolid=10&sortasc=false&rowsperpage=250&pli=1#gid=0) and [project](http://gist.github.com/391312) from 2010.

Uses TED’s public GraphQL API: https://graphql.ted.com/

**How it filters talks:** it removes any video that’s more than an hour long (likely not a TED talk), and any that’s younger than 6 months old (hasn’t been proven by time).

**How it ranks talks:** view count / age. Seemed to be simple and reliable enough.

## How to use

Takes about 15 minutes to set up and wait for it to finish.

1. Clone the repo
2. Run `yarn install`
3. Run `npm run build && npm start` 
4. Wait. The download takes about 10 minutes on a fast connection. Unfortunately, there is no feedback in the console, but I promise it works!
5. See the URLs of the top 10 TED talks in the console. See 15+ MB of data in `data/videos.json`
6. Optional: Settings are available in the first lines of `index.mts`. Change `numberOfTopVideosToList` to see more than ten top videos, and  re-run. Note: It only downloaded data once, so it only takes a split-second to re-run any time.
7. To re-download data (for example, if you need to re-run the script after a few months), set `forceDownloadVideoList` to `true`, or just delete `data/videos.json`.
8. A CSV output option is available with the flag `writeCSV`,

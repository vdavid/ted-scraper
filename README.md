# TED scraper

A quick way to find the best TED talks.

If you’re only interested in the list, then here is a top 10 for you:

<small>

1. [Elon Musk talks Twitter, Tesla and how his brain works — live at TED2022 by Elon Musk](https://www.ted.com/talks/elon_musk_elon_musk_talks_twitter_tesla_and_how_his_brain_works_live_at_ted2022) (53m 5s) – Watched by 13,017,930 people since 2022-04-10
2. [Is the pandemic actually over? It's complicated by Anthony Fauci](https://www.ted.com/talks/anthony_fauci_is_the_pandemic_actually_over_it_s_complicated) (28m 28s) – Watched by 355,753 people since 2022-09-20
3. [The war in Ukraine could change everything by Yuval Noah Harari](https://www.ted.com/talks/yuval_noah_harari_the_war_in_ukraine_could_change_everything) (49m 37s) – Watched by 6,954,005 people since 2022-03-01
4. [Inside the mind of a master procrastinator by Tim Urban](https://www.ted.com/talks/tim_urban_inside_the_mind_of_a_master_procrastinator) (13m 54s) – Watched by 63,165,039 people since 2016-02-16
5. [How every child can thrive by five by Molly Wright](https://www.ted.com/talks/molly_wright_how_every_child_can_thrive_by_five) (7m 28s) – Watched by 8,414,079 people since 2021-07-21
6. [War in Ukraine -- and what it means for the world order by Ian Bremmer](https://www.ted.com/talks/ian_bremmer_war_in_ukraine_and_what_it_means_for_the_world_order) (49m 12s) – Watched by 3,620,704 people since 2022-03-10
7. [Your body language may shape who you are by Amy Cuddy](https://www.ted.com/talks/amy_cuddy_your_body_language_may_shape_who_you_are) (20m 45s) – Watched by 65,931,653 people since 2012-06-26
8. [What makes a good life? Lessons from the longest study on happiness by Robert Waldinger](https://www.ted.com/talks/robert_waldinger_what_makes_a_good_life_lessons_from_the_longest_study_on_happiness) (12m 37s) – Watched by 43,125,177 people since 2015-11-14
9. [The next outbreak? We're not ready by Bill Gates](https://www.ted.com/talks/bill_gates_the_next_outbreak_we_re_not_ready) (8m 23s) – Watched by 44,208,156 people since 2015-03-18
10. [The future we're building -- and boring by Elon Musk](https://www.ted.com/talks/elon_musk_the_future_we_re_building_and_boring) (40m 40s) – Watched by 30,710,349 people since 2017-04-24

</small>

Inspired by this [spreadsheet](https://docs.google.com/spreadsheets/d/1A33erQIgXQn1eHCoQAW7em17SFCNH8mZHDFctQuztaY/edit?type=view&gid=0&f=true&sortcolid=10&sortasc=false&rowsperpage=250&pli=1#gid=0) and [project](http://gist.github.com/391312) from 2010.

Uses TED’s public GraphQL API: https://graphql.ted.com/

How it ranks talks: view count / age. Seemed to be simple and reliable enough.


## How to use

Takes about 15 minutes to set up and wait for it to finish.

1. Clone the repo
2. Run `yarn install`
3. Run `npm run build && npm start` 
4. Wait. The download takes about 10 minutes on a fast connection. Unfortunately, there is no feedback in the console, but I promise it works!
5. See the URLs of the top 10 TED talks in the console. See 15+ MB of data in `data/videos.json`
6. Optional: change `numberOfTopVideosToList` to see more than ten top videos, and  re-run. Note: It only downloaded data once, so it only takes a split-second to re-run any time.
7. To re-download data (for example, if you need to re-run the script after a few months), set `forceDownloadVideoList` to `true`, or just delete `data/videos.json`.


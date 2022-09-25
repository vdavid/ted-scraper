# TED scraper

A quick way to find the best TED talks.

If you’re only interested in the list, then here is a top 10 for you:

1. [Elon Musk talks Twitter, Tesla and how his brain works — live at TED2022 by Elon Musk](https://www.ted.com/talks/elon_musk_elon_musk_talks_twitter_tesla_and_how_his_brain_works_live_at_ted2022) – Watched by 13,017,930 people since 2022-04-10
2. [A future worth getting excited about by Elon Musk](https://www.ted.com/talks/elon_musk_a_future_worth_getting_excited_about) – Watched by 10,030,579 people since 2022-04-16
3. [Is the pandemic actually over? It's complicated by Anthony Fauci](https://www.ted.com/talks/anthony_fauci_is_the_pandemic_actually_over_it_s_complicated) – Watched by 355,753 people since 2022-09-20
4. [The war in Ukraine could change everything by Yuval Noah Harari](https://www.ted.com/talks/yuval_noah_harari_the_war_in_ukraine_could_change_everything) – Watched by 6,954,005 people since 2022-03-01
5. [Inside the mind of a master procrastinator by Tim Urban](https://www.ted.com/talks/tim_urban_inside_the_mind_of_a_master_procrastinator) – Watched by 63,165,039 people since 2016-02-16
6. [How every child can thrive by five by Molly Wright](https://www.ted.com/talks/molly_wright_how_every_child_can_thrive_by_five) – Watched by 8,414,079 people since 2021-07-21
7. [Countdown Global Livestream 2021 by TED](https://www.ted.com/talks/ted_countdown_global_livestream_2021) – Watched by 6,157,424 people since 2021-10-30
8. [War in Ukraine -- and what it means for the world order by Ian Bremmer](https://www.ted.com/talks/ian_bremmer_war_in_ukraine_and_what_it_means_for_the_world_order) – Watched by 3,620,704 people since 2022-03-10
9. [Your body language may shape who you are by Amy Cuddy](https://www.ted.com/talks/amy_cuddy_your_body_language_may_shape_who_you_are) – Watched by 65,931,653 people since 2012-06-26
10. [What makes a good life? Lessons from the longest study on happiness by Robert Waldinger](https://www.ted.com/talks/robert_waldinger_what_makes_a_good_life_lessons_from_the_longest_study_on_happiness) – Watched by 43,125,177 people since 2015-11-14

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

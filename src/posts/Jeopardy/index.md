---
title: "Jeopardy"
date: "2020-11-03"
category: "projects"
description: "Flask API and Svelte app for random Jeopardy! clues"
---
I love watching <i>Jeopardy!</i> and other trivia in general. I love looking through [J! Archive](https://j-archive.com/) at past games. But I haven't found an easy way to quiz myself on <i>Jeopardy!</i> clues. I found a large .csv file of past <i>Jeopardy!</i> clues to start the project with.

## Process
First, I had to clean the dataset of clues. This included removing any Video or Audio clues, adjusting clue monetary values, and fixing punctuation errors. I also marked clues as being part of a complete category versus incomplete categories. Unfortunately, the dataset recorded Daily Double monetary values as the amount wagered, not the original value. This is fixable, but it might not be worth my time, based on where I'd like this project to go.

After I had the data pretty well organized, making the Flask API was fairly straightforward. I used a SQLite database to store the clues along with the following simple queries: returning a random clue, returning a random full category, and returning a question based on its ID. I plan to add more endpoints for this API, like returning all clues based on a category ID or a category name, or even returning a full game's worth of clues. I hosted the API on Heroku, and while it's slow at times, it works great for the simple querying functions.

Finally, I made an app using Svelte. I had never used this framework before, but it was simple to pick up. I love the simplicity of the framework and the layout of components. The app is really barebones, for now, but it gives me random <i>Jeopardy!</i> clues, going on and on – a seemingly endless stream of trivia! 

## Finished Product and Takeaway
I loved using some new technologies to make this project. While it's nothing that original, I made this app to touch on a pain point that I've seen in my life, even if it's something trivial (hah!). My wife and I can sit around quizzing each other on dozens of clues at a time.

You can play with the app here: https://jeopardy-clues.netlify.app/

I plan to flesh out the API a bit more, with those endpoints. In addition, I want to add some more to the Svelte app by allowing users to view random categories at a time, showing more details on the clues, or keeping a running tally of points based on questions answered.
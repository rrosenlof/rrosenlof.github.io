---
title: "Road to Nowhere"
date: "2020-11-04"
category: "projects"
description: "A simple game for guessing the locations of various aerial views"
---
In summer of 2020, I thought of an idea that I wanted to make into an app on my own time. I love looking at Google Maps and other aerial images. My idea was to create a game, similar to [GeoGuessr](https://www.geoguessr.com/) where users guess a location based on these aerial images (as opposed to Google Street View images)
​
## Process
First, I had to figure out how to get these aerial images. I wanted to focus on the United States first. I played around with the idea of setting a range of latitude and longitude values that would cover the United States, and randomly generating a coordinate pair. But this would lead to a lot of images just in the middle of nowhere, which I don't like when I'm playing GeoGuessr. I like being able to have some kind of recognizable landmarks, which could be hard if your aerial image is a cornfield in Missouri.

So I wanted to find a set of coordinates that could be located across the United States fairly evenly, and not in primarily rural locations. My solution: a dataset that I found on Kaggle of fast food restaurant locations. I selected all the Taco Bell locations – just over 2,000 in the dataset, located in most of the Lower 48 states.

Next I needed a way to show the aerial image. Google Maps APIs are great, but they didn't work for this project, because the aerial view would sometimes show credit to where that imagery belonged – i.e. Property of the City of San Francisco. However, MapQuest provides a similar set of APIs as Google Maps, without the watermarks, and for free! So I used MapQuest's API to display an aerial image, based on a semi-random set of coordinates from the Taco Bell dataset
​
## Finished Product
​
I kept the gameplay functionality simple – view an image and take a guess of the State, from a dropdown list. The game proved a bit harder than anticipated. I can fairly consistently guess images of California, but a lot of the other states can look very similar. 

It was fun to share this app with my family and see their thoughts on the app. They suggested showing more specific landmarks, so I added a dataset of airport coordinates to play the game with.
​
## Takeaway
I liked working with the MapQuest API, and Gatsby makes it pretty easy to draw data from and external API. Probably the longest time sink was trying to host the application! I eventually found that Netlify worked the best for hosting an application that relies on an API key.

You can play the application here: https://road-to-nowhere.netlify.app/
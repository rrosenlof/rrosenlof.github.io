---
title: "Jenkins Database Maintenance"
date: "2019-08-19"
category: "projects"
description: "A Jenkins job that cleaned out an application's database"
---
As part of my internship at FedEx in the summer of 2019, I was asked to create a Jenkins job to clean up one of my team's databases.

## Background
One of my coworkers made a Java class that would execute several SQL queries to delete rows from the database. I only knew about Jenkins from the Blue-Green project. But I still didn't know how to make a Jenkins job, or even how to run a Java class really.

## Process
I spent a few hours learning about Jenkins and creating a simple pipeline. I was able to check out the correct branch from GitLab. The 'Pipeline Syntax' feature of Jenkins helped with that, as well as looking at other already created pipelines.

With that I finished half of the process. I was unsure how to run the main method of the file. I tried many variations of ```java -cp /path/ com.package.DbMaintenance``` but to no luck. Later, I went to talk with my coworker again in the lab. He told me to try building the project. I went and tried doing that, and it worked; ```mvn package```. I simply followed what the maven docs said to do here. So that would build the project just fine. I realized this was compiling the project and making a class file for DbMaintenance, which I could then run. So I tried a few things, and the file to run with a similar line to my ```java -cp...``` from earlier. But immediately after that was a NullPointerException and a SQLException for 'No suitable driver found for the database'. I didn't really know what that meant. Tried a few things, but couldn't get it figured out.

Met with two of my team members about it the next morning. Went over/redid a few things from the first part, since I didn't compile the file. I realized that I didn't need to build the whole project everytime, but that I could just compile the single file with ```javac -cp . path/DbMaintenance.java``` and then running the java -cp command to run the project. After doing that, we were able to cut down the test time a bit. We were still getting the errors from before, but my team member knew how to get around that, by adding in the .jar file to the classpath in the run command. Not exactly sure why, and I didn't know where to find that, but he did! Added that in the script, and it worked! 

## Status
This pipeline worked great for our test database, however, it would not work with our production database, as it was cutsomer facing. So in summary, this whole project was scrapped. I helped make the new version, using a old-fashioned cron job in the application that would run the Java class every hour, completing the same tasks.

## Takeaway
While it was a bummer that all this work was not used, I still learned a lot during the whole process. I gained a good understanding of Jenkins and writing pipelines in shell. I also saw how solutions to problems can often be simple. And finally, I learned how the best solutions sometimes require going back to square one and scrapping a whole project. We could have met the requirements of the project by changing the Jenkins pipeline eventually, but overall, I'm guessing we saved time by going with the cron job method. 
---
title: "Blue-Green Deployment"
date: "2019-08-19"
category: "projects"
description: "Pivotal Cloud Foundry implementation of Blue-Green deployment"
---
As part of my internship with FedEx in 2019, I helped implement Blue-Green deployment for the applications using PCF.

## Background
The project was being worked on an employee who transferred before he could get it working. Two other employees and myself took over the project. The existing shell script was doing the following:
* curl ... (correct)
* declaring and setting CF_BIN (```CF_BIN="${CF_BIN:-./cf}"``` correct)
* chmod +x cf (???)
* getting version name (correct)
* navigating to the app, auth (correct)
* pushing the app (almost correct)
* map-route (almost correct)
* getting OLD_APP and setting it to an array (good start, but incorrect)
* unmap-route (almost correct)
* stop and delete old app (correct)

## Process
We tried to figure things out, doing a lot of testing in Bash and learning about shell script syntax. We were pretty confused as to how the $, {}, (), "", and '' all related to each other and the correct way to use those symbols. There were a few syntax and logical errors in the existing code that we found, and after the first day, we had a good idea of what we were missing.

The next day we created a new branch and made changes to be tested. Every change we made, we would build it in Jenkins and read the logs for help. After about 20 tries, we got it pretty much ready to go. Mostly figuring out the syntax and ordering of the statements. Had some trouble with naming conventions too. Got a lot of clues from the PCF apps page as well. Ultimately got to the point where the Blue app was named x. The green would start as x-temp, and after the mapping, unmapping, and deletion of the old app, the Green app would be renamed x.
We had some trouble as well with not having rights. There were some changes we would have liked to make in a different project, but could not.

## Status
The Blue-Green deployment is currently being used in just one of several apps that this team is in charge of. It has worked for the most part, but it is still not perfect. Currently, the issues that need to be fix relate to the many dependencies each app has. For instance, when we were pushing the Green app, we were running into issues with Splunk, which was tracking the data. 

## Takeaway
Overall, it was very helpful working in a team doing pair programming. We all spotted things that others did not, and helped each other figure out the issues. This is possibly why the first employee couldn't finish what he had started on his own! I also learned a lot about shell, Jenkins, PCF, and groovy.

If I could change something about our process, I would probably try to find a way to test the deployment method without going through the whole process of mapping, pushing, unmapping, etc. Each time we did this, it took about 6 minutes. However, it was helpful to see the whole process of the build, because the logs often gave us good insight into what to do next.

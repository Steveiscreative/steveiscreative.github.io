---
title:  "Developing a MEAN Application, PART I"
description: Work in progress
## date: add a date when publishing
---

Toward the end of last month I gave myself the task of developing 18-20 small/medium sized applications by the end of the year. It's been only a couple of weeks, I think one and a half weeks to be exact. The first application I could think of is a contact manager system, a fancy way of saying phone book. So today, I'll be going over the the planning phase developing the application and in later I'll be going over Mongo, Express and Node in one post, then have a post dedicated to building the app in Angular. As a caveat, I wont really go into depth about MEAN, if aren't familiar with the MEAN stack, I'd start with looking at the [mean.io][mean] site. Also, to simplify your learning, I'd learn a bit about the individual pieces before trying to put everything together. 

## Planning
Before diving in and developing a full blown out application I usually spend about an hour just thinking things through and laying out the foundation. I design the database, choose the technologies, sketch out UI's, map out api endpoints, and by the end of the planning phase I have a rough road map of how I'm going to develop the application. For this application, I'm going to keep it as simple as possible.

### Requirements
1.  The application will have a main view:
    * The application will list all current contacts in the database
    * The application will be able to search and filter contacts
    * The application will allow the use to navigate to individual contact records
2.  The application will have an add contact view
    * The add contact view will consist of the following fields; First Name, Last Name, Address, City, Zip Code, Phone Number, Email.
3.  The application will have an individual contact view:
    * Users will be able to view an individual record
    * Users will be able to edit an individual records data
4.  The application will communicate with the database by making calls to a rest server.

My apologies if it sounds a little cryptic, this is nothing near actual requirements I'd draft up, but you get the point. I alway try to write requirements 

### Endpoints
```
 ENDPOINT            TYPE        RESPONSE
 ---------------------------------------------------------
 api/contacts        GET         return all contacts
 api/contacts/:id    GET         return specified contact
 api/contacts        POST        add new contact
 api/contacts/:id    PUT         update specified contact
 api/contacts:/:id   DELETE      delete specified contact
```




  








[mean]: http://mean.io/#!/
[jekyll]:    http://jekyllrb.com

---
title:  "Developing a MEAN Application, Part I"
description:
date:   2015-08-07 23:50:00
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
    * Users will be able to delete an individual record
4.  The application will communicate with the database by making calls to a rest server...

To keep this simple, I wont draft in-depth requirements that a real-world application would need... But the basic concept is to have enough to understand the different views, functionalty and data that the application would need. As some people say "a little planning can go a long way".

### Database Design
Once I've gathered some requirements, I start to design the database. For something small like this, I'll sketch out a basic ER diagram. It doesn't need to be anything fancy, but you should have a basic idea of the data schemas and relationships. For bigger projects, this helps out tremendously!

### UI
At this point I usually have a clear idea in my head of what the app would look like, so now I would sketch some ideas of how the application would look.

### Endpoints
Prior to this point, I would have determined the technologies that the application will use (most of the time this is already determined before the project even begins) but since this is already determined, I'll design the api endpoints:

```
 ENDPOINT            TYPE        RESPONSE
 ---------------------------------------------------------
 api/contacts        GET         return all contacts
 api/contacts/:id    GET         return specified contact
 api/contacts        POST        add new contact
 api/contacts/:id    PUT         update specified contact
 api/contacts:/:id   DELETE      delete specified contact
```

Alright, so now I have a basic idea of how I'm developing this app, now I get to the fun part. Next post, I'll be covering setting up a node server (Node, Express) and the database (Mongo).


[mean]: http://mean.io/#!/
[jekyll]:    http://jekyllrb.com

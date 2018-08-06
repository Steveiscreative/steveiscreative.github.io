---
title:  "Developing a MEAN Application, Part I"
description: A MEAN stack walkthrough 
date:   2015-08-07 23:50:00
---

Toward the end of last month I gave myself the task of developing 10 small/medium sized applications by the end of the year. My first experiment has been developing a phonebook using the 'MEAN' stack. The MEAN stack has always piqued my interest, so why not?  In this post, I'll go over some initial planning and in a later post I'll be go over the actual stack. Admittingly, these posts are only going to stratch the surface with the MEAN stack and is catered to developing out a phonebook. To learn about the MEAN stack, you should visit the offical site, [mean.io].

## Planning
Before diving in and developing an application it's definitely useful to plan out your site. It's doesn't need to be a full out requirements document with use cases the architecture, but just a general idea of the user interface, functionality and data schema. For the purpose of this post I'm going to keep it simple. 

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


[mean.io]: http://mean.io/#!/

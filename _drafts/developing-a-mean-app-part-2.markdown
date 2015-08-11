---
title:  "Developing a MEAN application, Part II"
description: Work in progress
## date: 2015-08-11
---

In [part one][part_1] I had started planning out my MEAN application. In this post, I'll be setting up the node server, setting up mongodb, and finally setting up the api endpoint responses.

## Setup
```
var app_root = __dirname,
    port = 4001,
    express = require('express'),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser'),
    path = require('path');
```
## Server configs
Once all the dependencies have been added, you'll want instantiate express.

```
// Create Server
var app = express();
```

Now that we've created a our server using express, we'll now set some configurations

```
app.configure(function () {
    //parses request body and populates request.body
    app.use(express.bodyParser());

    //checks request.body for HTTP method overrides
    app.use(express.methodOverride());

    //perform route lookup based on url and HTTP method
    app.use(app.router);

    //Where to serve static content
    app.use(express.static(path.join(app_root, 'app')));

    //Show all errors in development
    app.use(express.errorHandler({dumpExceptions: true, showStack: true}));
});
```
## Mongo via Mongoose

## Endpoints & responses

[part_1]: /2015/developing-a-mean-application-part-1/
[jekyll]:    http://jekyllrb.com

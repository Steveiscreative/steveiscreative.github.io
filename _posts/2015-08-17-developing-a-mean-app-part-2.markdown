---
title:  "Developing a MEAN application, Part II"
description: Part Two of our tutorial where I'll go over how to create a node server and setup a mongodb database 
date: 2015-08-17
---

In [part one][part_1], we started planning out our MEAN application. In this post, we'll get the node server up and running, setup our database using mongodb, and finally, setup our RESTful api that our application will interact with.s 

Before we get started, we'll need to setup and pull in our project dependencies. To do this, create a package.json file with the following: 

```
// file: package.json

{
"dependencies": {
    "express": "~3.1.0",
    "path": "~0.4.9",
    "mongoose": "3.5.5",
    "body-parser": "~1.9.1"
  }
}

```

Now, in our terminal run the following command:

```
npm install
```

## Server Setup
Alright, once we have all our dependencies, we're ready to get started. We'll start off by creating a file named server.js and establishing our dependencies and some global variables. 

```
file: server.js

var app_root = __dirname,
    port = 4001,
    express = require('express'),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser'),
    path = require('path');
```

## Initialize Express and Server configs
Next, we'll initialize our express server.  

```
var app = express();
```

That's it!  Now that we've created our express server, we'll set some configurations.

```
app.configure(function () {
    //parses request body and populates request.body
    app.use(express.bodyParser());

    //checks request.body for HTTP method overrides
    app.use(express.methodOverride());

    //perform route lookup based on url and HTTP method
    app.use(app.router);

    // Application Root Folder
    app.use(express.static(path.join(app_root, 'app')));

    //Show all errors in development
    app.use(express.errorHandler({dumpExceptions: true, showStack: true}));
});
```

## Mongo via Mongoose

Now that our server is set up and now we're going to setup our database. For this application we'll be using [Mongoose][mongoosejs]. Mongoose is an “elegant mongodb object modeling for node.js“. If you're unfamiliar with mongodb in general, I'd highly recommend taking one of their [free online courses][mongouni].

### Setting up database
The first thing we'll need to do is connect to our database. For this tutorial, the name of our database is 'ng_contacts_mini', but of course this can be changed to whatever you'd like to name your database.

```
mongoose.connect('mongodb://localhost/ng_contacts_mini');
```

### Creating a Schema
Once we're connected, well create a 'Contact' schema. The schema consist of field names and the 'SchemaType'. SchemaTypes can be strings, booleans, arrays, and date to name a few. For this example, we'll keep it simple with a couple keys and all of them will be strings.

```
var Contact = new mongoose.Schema({
    first_name: String,
    last_name: String,
    address_1: String,
    address_2: String,
    email: String,
    phone_number: String
});
```

### Creating a Model
Once we've created the schema, we'll create a model that maps to the schema. Models allow for us to retrieve and manipulate documents (data) in the mongo database. 

```
// Model
var ContactModel = mongoose.model('Contact', Contact);
```

## Restful API (endpoints & responses)
Now that we've created our server and setup our database, now we can connect the two and create our restful api. 

### Return all contacts

```
// return all contacts
app.get('/api/contacts', function (request, response) {
    ContactModel.find(function (err, contacts) {
        if (!err) {
            return response.send(contacts);
        } else {
            return console.log(err);
        }
    })
});
```

### Get contact by id

```
// get specified (:id ) contact
app.get('/api/contacts/:id', function (request, response) {
    ContactModel.findById(request.params.id, function (err, contact) {
        if (!err) {
            return response.send(contact);
        } else {
            return console.log(err);
        }
    });
});
```

### Add new contact

```

// add new contact
app.post('/api/contacts', function (request, response) {
    var contact = new ContactModel({
        first_name: request.body.first_name,
        last_name: request.body.last_name,
        address_1: request.body.address_1,
        address_2: request.body.address_2,
        email: request.body.email,
        phone_number: request.body.phone_number
    });

    return contact.save(function (err) {
        if (!err) {
            console.log('Contact has been created.');
            return response.send(contact);
        } else {
            console.log(err);
        }
    });
});

```

### Update contact

```
// Update contact by id
app.put('/api/contacts/:id', function (request, response) {
    return ContactModel.findById(request.params.id, function (err, contact) {
        contact.first_name = request.body.first_name,
        contact.last_name = request.body.last_name,
        contact.address_1 = request.body.address_1,
        contact.address_2 = request.body.address_2,
        contact.email = request.body.email,
        contact.phone_number = request.body.phone_number

        return contact.save(function(err){
            if(!err) {
                console.log('Contact updated!');
                return response.send(contact);
            } else {
                console.log(err);
            }
        })
    });
});
```

### Delete contact

```
// delete contact
app.delete('/api/contacts/:id', function(request, response) {
    return ContactModel.findById(request.params.id, function(err, contact) {
        return contact.remove( function(err) {
            if(!err) {
                console.log('Contact deleted');
                return response.send('');
            } else {
                console.log(err);
            }
        })
    })
});
```

Once we've finish setting up the server we can run the server. To do this, run the following command in the terminal

```
    node server.js
```

## Testing
Once we've setup everything, the last thing we'll do is test our API. For this we'll use [Postmon][postmon] but any Restful service tester will do. 


## Fin. 
And we're done! Now that we've created our server and api, we can start building our application. In part three, I'll be going over how to create an Angular application that interacts with the server we've just hooked up. 


[part_1]: /2015/developing-a-mean-application-part-1/
[postmon]: https://chrome.google.com/webstore/detail/postman/fhbjgbiflinjbdggehcddcbncdddomop?hl=en
[mongoosejs]: http://mongoosejs.com/index.html
[mongouni]: https://university.mongodb.com
[jekyll]:    http://jekyllrb.com

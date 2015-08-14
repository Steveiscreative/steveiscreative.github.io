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

    // Application Root Folder
    app.use(express.static(path.join(app_root, 'app')));

    //Show all errors in development
    app.use(express.errorHandler({dumpExceptions: true, showStack: true}));
});
```

## Mongo via Mongoose

Alright, so we have our server set up and now we're going to setup mongodb. For this application we'll be using [Mongoose][mongoosejs]. Mongoose is an “elegant mongodb object modeling for node.js“. So, well set up the schema, then create the model. If you're unformilar with mongodb in general, I'd highly recommend taking one of their free, online courses at [Mongo University][mongouni].

### Setting up database
First things first, we'll need to connect to the database. It's pretty straight forward. If you're developing on a local environment, the server your connecting to is localhost. Just to note, if the database you're connecting to doesn't exist, mongoose will create the table.

```
mongoose.connect('mongodb://localhost/ng_contacts_mini');
```

### Creating a Schema
Once we're connected, well create a 'Contact' schema. The schema consist the field names (or key to be politically correct) and the 'SchemaType'. SchemaTypes can be strings, booleans, and date to name a few. For this example, I'll keep it simple with a couple keys and all of them will be strings.

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
Once we've created the schema, we'll have to create a model that maps to the schema. Models allow for us to retrieve and manipulate documents in mongoose. 

```
// Model
var ContactModel = mongoose.model('Contact', Contact);
```

## Endpoints & responses
Now that we've connected to our database and we've setup the server, we can now connect the two to create our api.

Return all contacts

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

Get contact by id

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

Add new contact

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

Update contact

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

Delete contact

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

Once we've set all the endpoints the last set would be to setup

[part_1]: /2015/developing-a-mean-application-part-1/
[mongoosejs]: http://mongoosejs.com/index.html
[mongouni]: https://university.mongodb.com
[jekyll]:    http://jekyllrb.com

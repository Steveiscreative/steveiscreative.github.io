---
title:  "Developing a MEAN application, Part III"
description:
categories: javascript, frontend, application development
date: 2015-10-29
---

Three words. "About...Damn...Time..."

It has been a while since I've written anything. Not only have I've dedicated time to publish a post every Thursday, but now I can finally alleviate the guilt of me not posting anything on a regular basis. Horray! So without further ado, here's the last and final post of this series.

Today, I'll be going over the the Angular portion of this application. To be frank, as I started developing this portion of the application, I notice major flaws in thinking and functionality of this app. Instead of going back an editing past post and functionality, I've decided to keep what I have and build out the functionality as planned in the previous post. And while it was painful to keep everything completely as is, I treated this as an experience to learn from and next time I won't make the same mistakes as before... hopefully.

So we've reached the conclusion of this three part tutorial of building a "MEAN" Application. And if you haven't read parts one and/or two, I'd highly recommend reading them; the links are below. In this post, If you'd like to skip ahead and go through the source code, then that's available on my [github account][github].

So, let get started.

## Folder Structure
When starting applications, I always start with (and oddly spend the most time on) folder structure and this project isn't any different. After some research on different approaches for structuring Angular applications, I landed on a folder structure that separates the application by components. In this simple example, components are the different views along with they're respective controllers. I've also added a common folder to house functionality that's share throughout the application.

```
|- src
	|- app
		|- common
			|- models
				|- contacts-models.js
			|- common.js
		|- contact
			|- add
				|- add.tmpl.html
				|- addContactController.js
			|- edit
				|- edit.tmpl.html
				|- editContactController.js
			|- view
				|- view.tmpl.html
				|- viewContactController.js
		|- home
			|- home.tmpl.html
			|- homeController.js
	|- assets
		|- app.css
	|- index.html
.bowerrc
bower.json
server.js
```

## Project Dependencies
 For this project we have a couple of dependencies and to manage these dependencies we'll be using bower. First, we'll set up the .bowerrc file, here we'll specify the path of where we'd like the bower components to download, this isn't necessary, but I've always have had a disliking for the default 'bower_components' folder.

```
{
  "directory": "src/vendor"
}
```

 Once we've set up the .bowerrc file, we can setup our bower.json file. For this project, we'll be using Skeleton CSS, UI Router, and Angular Resource.

 ```
 {
   "name": "Contacts Mini - Angular",
   "description": "A sample contacts application using the MEAN stack",
   "version": "0.0.0",
   "homepage": "http://stevenstephenson.com",
   "license": "MIT",
   "private": true,
   "dependencies": {
     "angular": "~1.4.0",
     "angular-loader": "~1.4.0",
     "angular-mocks": "~1.4.0",
     "html5-boilerplate": "~5.2.0",
     "angular-ui-router": "~0.2.15",
     "ui-router": "~0.2.15",
     "angular-resource": "~1.4.5",
     "skeleton-css": "~2.0.4"
   }
 }
 ```

 Once we've set this up, we'll run.


 ```
 bower install
 ```


 ## Application Shell

 Now that we have all of our dependencies, we can now set up our index file.

```
 <!DOCTYPE html>
 <html ng-app="contactsMini">
 <head>
     <meta charset="UTF-8">
     <title>Contacts Mini</title>
     <link rel="stylesheet" href="vendor/skeleton-css/css/normalize.css"/>
     <link rel="stylesheet" href="vendor/skeleton-css/css/skeleton.css"/>
     <link rel="stylesheet" href="assets/app.css"/>
 </head>
 <body id="contactsMini">
 <header class="header">
     <div class="container">
         <h1 class="app__title"><a href="/#/home">ContactsMini</a></h1>
     </div>
 </header>
 <!-- end header -->
 <main role="main" class="container">
     <div ui-view></div>
 </main>
 <!-- end main -->
 <footer role="contentinfo">
     <div class="container">
         <small>Contacts Mini &copy; 2015</small>
     </div>
 </footer>
 <!-- end footer -->

 <!-- Angular -->
 <!--<script src="vendor/angular-loader/angular-loader.min.js"></script>-->
 <script src="vendor/angular/angular.min.js"></script>
 <script src="vendor/angular-resource/angular-resource.min.js"></script>
 <script src="vendor/ui-router/release/angular-ui-router.min.js"></script>

 <!-- App -->
 <script src="app/contactsmini.js"></script>
 <script src="app/common/models/contacts-model.js"></script>
 <script src="app/home/homeController.js"></script>
 <script src="app/contact/view/viewContactController.js"></script>
 <script src="app/contact/add/addContactController.js"></script>
 <script src="app/contact/edit/editContactController.js"></script>

 </body>
 </html>
```


## Application Settings
From here we can setup our angular app in the app/contactsmini.js file. Here we'll include our Angular dependencies, as well as some global configurations for the application, such as routes.
For routing we'll be using UI-Router. Using UI-Router, we'll establish our 'states', when establishing states will declare the URL, templateURL and Controller, you can think of this as the glue that connects the controller and view together.

```
var app = angular.module("contactsMini", ["ui.router", "ngResource"]);

app.config(function ($stateProvider, $urlRouterProvider) {
    // Default
    $urlRouterProvider.otherwise("/home");

    // States
    $stateProvider
        .state("index", {
            url: "/home",
            templateUrl: "app/home/home.tmpl.html",
            controller: HomeController
        })
        .state("add", {
            url: "/contact/add",
            templateUrl: "app/contact/add/add.tmpl.html",
            controller: AddContactController
        })
        .state("view", {
            url: "/contact/:id",
            templateUrl: "app/contact/view/view.tmpl.html",
            controller: ViewContactController
        })
        .state("edit", {
            url: "/contact/:id/edit",
            templateUrl: "app/contact/edit/edit.tmpl.html",
            controller: EditContactController
        });

});
```


## Model (Factory)
Once our application settings have been set, we can now setup our model. The model will be used in our controllers and will be responsible for making request to the database and returning records.

Sidenote: When I say model, I mean factory or services in terms of Angular. Personally, to keep things simple, I've decided to stick with the word Model(s), because I found that using 'Factory' and/or 'Service' can be a little vague and caused me to unnecessarily over think. I like to think of models in the traditional-ish since of MVC... just a personal preference.


/src/app/common/models/contacts-models.js :

```
/**
 * Contacts Service
 * Interacts with the contact api
 */

app.factory('ContactsService', function($resource) {
    return $resource('/api/contacts/:id', {'id': '@_id'}, {
        update: {
            method: 'PUT'
        }
    });
});
```

## Components
Our model has been created and now we can create our components (Controllers & Views). Our application has a Home component and a Contact component which has 3 sub-components (add, edit, view).


### Home

app/home/homeController.js :

```
app.controller('HomeController', HomeController);

function HomeController(ContactsService) {
    var home = this;
    ContactsService.query(function(d) {
        home.contacts = d;
    });
}
```

app/home/home.tmpl.html :

```
<div ng-controller="HomeController as home">
    <section class="contacts">
        <a class="button-primary" ui-sref="add">Add Contact</a>
        <div class="contact" ng-repeat="contact in home.contacts">
            <h3 class="fullname">{{contact.first_name}} {{contact.last_name}}</h3>
            <tel>{{contact.phone_number}}</tel>
            <div class="action-items">
                <a ui-sref="view({id: contact._id})" class="button">view</a> <a class="button" ui-sref="edit({id: contact._id})">edit</a>
            </div>
        </div>
    </section>
</div>

```

### Contact(s)

#### Add

app/contact/add/add.tmpl.html:

```
app.controller('AddContactController', AddContactController);

function AddContactController(ContactsService, $state) {
    var add = this;
    add.addContact = function(data) {
        ContactsService.save(data, function(){
            $state.go('index');
        });
    }
}
```

app/contact/add/addContactController.js:

```
<div class="form-wrapper" ng-controller="AddContactController as add">
    <h2>Add Contact</h2>
    <form ng-submit="add.addContact(contact)">
        <label for="first_name">First Name</label>
        <input type="text" name="first_name" class="u-full-width" ng-model="contact.first_name"/>

        <label for="last_name">Last Name</label>
        <input type="text" name="last_name" class="u-full-width" ng-model="contact.last_name"/>

        <label for="email">Email</label>
        <input type="text" name="email" class="u-full-width" ng-model="contact.email"/>

        <label for="phone">Phone</label>
        <input type="text" name="phone_number" class="u-full-width" ng-model="contact.phone_number"/>

        <fieldset>
            <label for="address_1">Address 1</label>
            <input type="text" name="address_1" class="u-full-width" ng-model="contact.address_1"/>

            <label for="address_2">Address 2</label>
            <input type="text" name="address_2" class="u-full-width" ng-model="contact.address_2"/>
        </fieldset>

        <input type="submit" class="button-primary"/>
    </form>
</div>
```


#### Edit

app/contact/edit/editContactController.js:

```
app.controller('EditContactController', EditContactController);

function EditContactController(ContactsService, $location, $stateParams, $state) {

    var contact = this;
    var contact_id = $stateParams.id;

    ContactsService.get({id: contact_id}, function (d) {
        contact.info = d;
    });

    contact.update = function (data) {

        var currentContact = ContactsService.get({id: contact_id}, function () {
            if (data.first_name) {
                currentContact.first_name = data.first_name;
            }
            if (data.last_name) {
                currentContact.last_name = data.last_name;
            }
            if (data.phone_number) {
                currentContact.phone_number = data.phone_number;
            }
            if (data.email) {
                currentContact.email = data.email;
            }
            if (data.address_1) {
                currentContact.address_1 = data.address_1;
            }
            if (data.address_2) {
                currentContact.address_2 = data.address_2;
            }

            currentContact.$update();

        });

        $location.path('/contact/' + contact_id);
    }

    contact.delete = function () {
        var initDelete = window.confirm('Would you like to delete this contact?');
        if (initDelete) {
            var contact = ContactsService.get({id: contact_id}, function () {
                contact.$delete();
                $state.go('index');
            });
        }
    }
}
```

app/contact/edit/edit.tmpl.html:

```
<div class="form-wrapper" ng-controller="EditContactController as contact">
    <h2>Edit Contact</h2>

    <form ng-submit="contact.update(data)">
        <label for="first_name">First Name</label>
        <input type="text" name="first_name" class="u-full-width" ng-value="contact.info.first_name"
               ng-model="data.first_name"/>

        <label for="last_name">Last Name</label>
        <input type="text" name="last_name" class="u-full-width" ng-value="contact.info.last_name"
               ng-model="data.last_name"/>

        <label for="email">Email</label>
        <input type="text" name="email" class="u-full-width" ng-value="contact.info.email" ng-model="data.email"/>

        <label for="phone">Phone</label>
        <input type="text" name="phone_number" class="u-full-width" ng-value="contact.info.phone_number"
               ng-model="data.phone_number"/>

        <fieldset>
            <label for="address_1">Address 1</label>
            <input type="text" name="address_1" class="u-full-width" ng-value="contact.info.address_1"
                   ng-model="data.address_1"/>

            <label for="address_2">Address 2</label>
            <input type="text" name="address_2" class="u-full-width" ng-value="contact.info.address_2"
                   ng-model="data.address_2"/>
        </fieldset>

        <input type="submit" class="button-primary"/>
        <a ng-click="contact.delete()" class="button">Delete</a>
    </form>
</div>
```

#### View

app/contact/view/viewContactController.js:

```
app.controller("ViewContactController", ViewContactController);

function ViewContactController(ContactsService, $stateParams){
    var contact = this;
    var contact_id = $stateParams.id;
    ContactsService.get({id: contact_id}, function(d){
        contact.info = d;
    });
}
```

app/contact/view/view.tmpl.html :

```
<div ng-controller="ViewContactController as contact" class="contact-profile">
    <h2>
        {{contact.info.first_name}} {{contact.info.last_name}}
    </h2>
    <div class="contactinfo">
        <h5>Phone</h5>
        {{contact.info.phone_number}}
        <h5>Address</h5>
        <ul class="address">
            <li class="street">{{contact.info.address_1}}</li>
            <li class="street2" ng-if="contact.info.address_2 !== 'null'">{{contact.info.address_2}}</li>
        </ul>
        <h5>Email</h5>
        <p>{{contact.info.email}}</p>
    </div>
    <a class="button" ui-sref="edit({id: contact.info._id})">edit</a>
</div>
```



## Conclusion
That's it! We're done. We've build a MEAN application! This isn't really a full fledge application, but I think it's a good starting point for developing a MEAN application. If you'd like something explained in detail or somethings not working then just reach out be below or email me at hello@stevenstephenson.com.




## Mean Application Series
- [Developing a MEAN application, Part I][part1]
- [Developing a MEAN application, Part II][part2]



[part1]: http://stevenstephenson.com/2015/developing-a-mean-application-part-1/
[part2]: http://stevenstephenson.com/2015/developing-a-mean-app-part-2/
[github]: https://github.com/Steveiscreative/ngContactsMini

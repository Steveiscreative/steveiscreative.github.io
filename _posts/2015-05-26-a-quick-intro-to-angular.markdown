---
layout: post
title:  "A quick angular introduction"
date:   2015-05-26
categories:
- development
- angular
- js
comments: true
---

Today, I want to go over a little bit about AngularJS by walking you through how to create an application display an Instagram feed. Really basic, really quick. This should take about 20 minute and the goal of this is to introduce you to AngularJS without diving to much into semantics or jargon. Its also worth noting  that I’ll be putting everything on one page, this isn’t really what I’d recommend buuuut this is merely an introduction to angular.

##Setting up
Before we dive into code, the first things you should do is gather your resources. For this you’ll need access to Instagram API (https://instagram.com/developer/). To access this you’ll have to have an Instagram account on signed in you’ll be prompted to ‘Register a Client’. Once you’ve registered your client you’ll be directed to an overview screen, there you’ll see the name of your client and under that information such as client id and client secret. If you see this, your all set then you’re all set if not, contact me and I’ll help.

Once you’ve setup your client, you’ll need to determine how you're going to interact with client. So for our app people will be able to enter in a username and their feed will populate below. This will require two endpoints, 1) user/search and 2) api.instagram.com/v1/users/{user-id}/media/recent. We’ll get into why in a few.

## Angular Up and Running
Once we have the endpoints collected we can now set up angular here’s an minimal starting point. Let's start top to bottom.

{% highlight html %}

<html lang="en" ng-app="InstagramApp" class="no-js">
<head>
  <title>My Instagram App</title>
</head>
<body data-ng-controller="mainController">
  
  <!-- html goes here -->
   
  <script src="https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.3.15/angular.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.3.15/angular-route.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.3.15/angular-resource.min.js"></script>
  <script>
    <!-- ng application code here --> 
  </script>
</body>
</html>

{% endhighlight %}
---
layout: post
status: publish
published: true
title: Rails and MVC
author:
  display_name: Steve
  login: admin
  email: ttwstephenson@gmail.com
  url: http://stevenstephenson.com
author_login: admin
author_email: ttwstephenson@gmail.com
author_url: http://stevenstephenson.com
wordpress_id: 191
wordpress_url: http://www.stevenstephenson.com/?p=191
date: '2013-12-03 01:26:22 -0500'
date_gmt: '2013-12-03 01:26:22 -0500'
categories:
- development
tags: []
comments: true
---
<p>So today, I'm going to go through MVC and their roles in the rails framework.</p>
<h2>So, what the hell is MVC?</h2>
<p>MVC is a software architecture pattern which separates the representation of information from the user's interaction with it. (<a href="http://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller">Wikipedia</a>).</p>
<p>My understanding of MVC is a way of developing your application that separates the business logic from data that users are presented with. It actually took me a while to get it.</p>
<h2>Rails and MVC</h2>
<p>After mulling over the getting started section of the <a href="http://guides.rubyonrails.org/getting_started.html#say-hello-rails">Rail Guides</a>, I got a little stuck when it got to MVC and how it works for Rails apps. Here is what I got from it.</p>
<ol>
<li>A <strong>Request</strong> is made. For example</li>
<li>Based on the <strong>Request, </strong>the<strong> </strong><strong>Route</strong> selects which <strong>Controller</strong> to use</li>
<li>A Route can contain 'Actions', for example edit, update, etc..</li>
<li>Actions collect information for views</li>
<li>Views present information from actions in human readable format</li>
</ol>
<p>Is this somewhat accurate? Is there something a I'm missing?</p>

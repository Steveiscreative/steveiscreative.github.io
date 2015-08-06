---
layout: post
title:  "My First Angular App"
date:   2014-07-14 23:33:00
categories: development, angularjs
comments: true
---

About a two weeks ago, we ([idfive][idfive]) launched the new UB/Towson MBA program site. The site is pretty awesome and I'm hyped because I was able to create/launch my first [AngularJS application][ubtu]! The project was successful and more and importantly (lol) I was able to learn a lot about AngularJS and developing frontend applications in general. Here are some takeaways, concepts and other things I learned while developing the app. As a forewarning, I am not an expert by any means, if you see something is invalid, just comment and school me on a thing or two.

## A bit about the project
Before I begin, I should give a little information of the project. The application was built to highlight UB/Towson's unique approach to their program, letting potential students customize their curriculum based on their aspirations, goals, past experiences, and things like that. I *could* sit here and write out the ins and outs but I think just [trying it out][ubtu] would be better.

The first hurdle was to determine an approach and it came down to the age old dilemma; To build it from scratch or to use a framework. Each has its downfalls and perks but to spare you from the details, the latter was decided on mainly due to time. Also, after developing about... 450 lines of jQuery and not even scratching the surface of what needed to get done, a smarter approach was needed. After a little research /playing around, AngularJS was the right tool for the job.  

## Using Yeoman
For this project, I had decided to use Yeoman and lets say it was best, worst decision I've ever made. Kidding. But in all seriousness, developing the with Yeoman was a dream... then I tried to run the build task. Unfortunately, I learned during this project that the build task is the most problematic part of Yeoman. So, my only tip when it comes to Yeoman is you should be familiar with Grunt because that's really the bread and butter of Yeoman, well... besides that scaffolding I guess.

The one major issue, was uglify task and Angular not playing well together during the build. To be more specific, uglify renames/shortens variables to make the document lighter, Angular doesn't like it, application explodes and kittens die. If you experience this, adding {mangle:false} to uglify task will do. This compresses your javascript but doesn't rename your variables.

{% highlight js %}

uglify: {
    options:{mangle:false},
    dist: {
        files: {}
    }
}
{% endhighlight %}

## Data Binding, functions & event handling
One of the most vital and hardest concepts that was hard for me head around was Angular's two way data binding. This had took me two day for it to actually click. According to the Angular documentation: "Data-binding in Angular apps is the automatic synchronization of data between the model and view components ([documentation][agDataBinding])." The main issues/concepts that took me a while was how to use variables & functions defined in my controllers inside of my views. And how do I handle events? The short and simple answer to both issues was directives. Directives have many uses; from adding classes to initiating click events. Directives are what makes Angular's world go round. If you have trouble with this maybe some of these examples may help.

Lets say you would like an alert to popup every time you clicked a button. Consider the following:

**Controller:**

{% highlight ruby %}
$scope.clickMe = function() {
    alert("I've been clicked");
}
{% endhighlight %}

In the controller, I would declare a function called clickMe. I won't have to declare any event listener code because this is handled in the view with directives.

**View:**

{% highlight html %}
    <button ng-click="clickMe()">
        Click Me
    </button>

    // jQuery Equivalent
    $('button').on('click', clickMe());

{% endhighlight %}

To initiate the clickMe function we'll pass it into the ng-click directive. When button is clicked, the function is initiated.

Now let's say I'd like to... 1) List courses from a JSON file or string and 2) add an active class to specified courses. [View JSBin][example2]

**Controller:**

{% highlight js %}
$scope.courses = {
    [
     {course: 'Course 1', status: 'active'},
     {course: 'Course 2', status: 'inactive'},
     {course: 'Course 2', status: 'active'}
    ]
}

$scope.isActive = function($status) {
    if($status === 'active') {
        return true;
    } else {
        return false;
    }
}
{% endhighlight %}


First I specify the data, be it a JSON string or pulling from a JSON file. $scope is used to make defined variables and functions available in the model, view and controller. Next, a function is defined that takes the status and returns a boolean. Based on this result, I'll determine what classes should be added.


**View:**

{% highlight html %}
    <ul>
       <li ng-repeat="course in courses"
           ng-class="{true: 'is-active', false: 'not-active'}[isActive(course.status)]">
            course.name
       </li>
    </ul>
{% endhighlight %}

Finally, I'll loop through the courses using the ng-repeat (yay! no (for or while) loop! lol). Next, I'll use the ng-class directive and enter in the isActive(course.status) function to determine if the is-active (true) or not-active (false) class will be added to the list item. Hope this makes sense. [See example][example2]

## Learn, Build, Fail, Succeed
My last take away was learning how I learn. If that makes sense.
I didn't have a lot of time to build this application so I had to *supercharge* my learning.
First, I watched videos and read as much as I could on Angular. Immediately after that, I tried to build something. Nothing really clicked at first and my first app was a complete failure but it allowed my sub conscious to connect some things together. My second attempt, was a little better, I watched more videos, read and I actually knew what the hell was going on. After, that I attempted to rebuild the application and I was a little more successful. I did this the first two nights of the project to learn Angular. In the mornings, I would write about the **concepts** that are the driving forces behind Angular. By the third day, everything just clicked. This was the first time I've actually became aware of how I effectively learn something.


<!--- Links --->
[ubtu]: http://mba.towson.ubalt.edu/build-your-mba/#/1
[idfive]: http://idfive.com
[agDataBinding]: https://docs.angularjs.org/guide/databinding
[example2]: http://jsbin.com/womot/8/edit?html,js,output

---
layout: post
title:  "Wait, PHP has a built-in server?"
date:   2015-02-12 23:33:00
categories: development
comments: true
---

Last weekend I stumbled upon the fact that PHP 5.4 has a built in server! I had no idea. This may seem like a little thing but once I found this out I thought back of the many headaches I could have been spared.

I have no idea if anyone knew this or if I've been living under a rock but its pretty cool. I think with the increasing popularity of Node (as well as other languages/frameworks/etc), that having built-in servers capabilities is becoming a de facto standard. 

To start using the built-in server you’ll need PHP 5.4+. If you have 5.4, cool, if not, you should update. Once you have PHP 5.4 installed, you’ll open up your terminal and navigate to the intended directory.  From there, you’ll enter: 

{% highlight php %}
php -S localhost:8080
{% endhighlight%}

POW! That’s it!

I tend to geek out over the minor things. I’m still looking into the limitations and capabilities but I think this coupled with composer could be good when it comes to sharing environments and code with other developers.
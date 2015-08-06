---
layout: post
status: publish
published: true
title: CSS Methodologies
author:
  display_name: Steve
  login: admin
  email: ttwstephenson@gmail.com
  url: http://stevenstephenson.com
author_login: admin
author_email: ttwstephenson@gmail.com
author_url: http://stevenstephenson.com
wordpress_id: 71
wordpress_url: http://www.stevenstephenson.com/?p=71
date: '2013-05-23 23:08:36 -0400'
date_gmt: '2013-05-23 23:08:36 -0400'
categories:
- development
tags: []
comments: true
---
<p>In the recent years there has been a rise in methodologies and quasi design patterns for CSS. These methodologies provide a way for designers/developers a new way of thinking about their code. The driving elements of these methodologies are maintainability, modularity and scalability.  I think these are all good things to aim for in many projects big and small. Here is an overview of the methodologies I've either played around with or used in projects.</p>
<h3><a href="http://smacss.com/">SMACSS</a></h3>
<p>I'm a huge fan of SMACSS. SMACSS or Scalable and Modular Architecture for CSS states that your CSS should be separated based on certain rules; Base, Layout, Module, State and Theme. I think recently, Changing State was an added rule but I haven't done much research on this. SMACSS is the book that really got me out of <em>paged-based thinking </em>when it came to my CSS. The one thing the book states is that these aren't law and breaking or making your own "rules" is ok, just be consistant. If you haven't played around with SMACSS, I think you should. It's powerful stuff.</p>
<h3><a href="http://bem.info/method/">BEM</a></h3>
<p>I've played around BEM Methodology... a little...ok once. Honestly, I was confused when implementing this. After reading CSS Wizardry post on <a href="http://csswizardry.com/2013/05/scope-in-css/">CSS Scope</a> yesterday, everything started to click. BEM, stands for Block, Element, Modifier. I think the best way for me to explain this is to give an example:<br />
<code></code></p>
<pre>&lt;form class="search search--home-search-bar"&gt;
&lt;input class="search__search-bar" type="text" /&gt; 
&lt;input class="search__search-submit" type="text" /&gt;
<!-- search --></pre>
<p>Ok, so the <strong>Block</strong> in this scenario is the .search class.<br />
The <strong>Elements</strong> in this scenario are .search__search-bar and .search__search-submit<br />
these are the elements that belong to the .search block. Elements are identified by the block name, two underscores (__), and the element's name. The <strong>Modifier</strong> in this scenario is .search--home-search-bar. This would be another instance of the search block, in this instance this is the search block on the home page. The Modifier is identified by the block name, two dashes (--), and the modifier name.</p>
<h3><a href="http://oocss.org/">OOCSS</a></h3>
<p>Last but not least, Object-Orientated CSS. I haven't really developed with OOCSS, but I've been handed many documents using this Methodology. I think this has been the premise of my of the pseudo object-oriented css methodologies. I won't touch on this much, there is a <a href="https://www.google.com/search?q=OOCSS&amp;aq=f&amp;oq=oocss&amp;aqs=chrome.0.59j5j60l2j0l2.1621j0&amp;sourceid=chrome&amp;ie=UTF-8">vast amount of information out there</a>.</p>
<h3>Conclusion</h3>
<p>I think that shifting toward system based front-end development is the way to go for the future. The CSS methodologies stated above as well as others help shift your paradigm when it comes to front-end development. If your drawn away or think implementing one of these methodologies is completely ludicrous, I can say I was there once. But still, just try it. Front-end development and client needs are rapidly changing. So keep up!</p>
<p>&nbsp;</p>

---
title:  "Developing a MEAN application, Part III"
description: The last of a three part series. In this post we'll be going over the Angular portion of the application.
date: 2015-09-24
---

So we've reached the conclusion of this three part tutorial on developing a MEAN application. If you haven't read the first two post, then I'd recommend going through them prior to reading this, the links are below. In this post, I'll be going over the "A" portion of the mean application. If you'd like to just go through the final outcome of these post they are availiable [here][github].

When starting this application it gave me a chance to re-examine the why I've been developing Angular applications in the past. After looking into this and developing this application, I can admit, that I've been doing things incorrectly. 

Lets get started.

When starting applications, I always start with folder structure and this is not different. I landed on a folder structure that seperates things by components. 

## Folder Structure

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

```



















## Mean Application
- [Developing a MEAN application, Part I][part1]
- [Developing a MEAN application, Part II][part2]






[part1]: http://stevenstephenson.com/2015/developing-a-mean-application-part-1/
[part2]: http://stevenstephenson.com/2015/developing-a-mean-app-part-2/
[github]: https://github.com/Steveiscreative/ngContactsMini
---
title:  "Well, components are pretty awesome..."
description:
categories: javascript, angular, development
date: 2016-01-14
---

This week, I started putting together an [Angular boilerplate for idfive][ngfive] (ngfive is what I've called it) and I have to say, I’ve learned a lot in the last week about Angular. The things I've learned, I wish I knew a couple of months ago. And hopefully, one day I can go back and restart some projects, but that's rare. During this process, I’ve learned...well...came to the realization, that component based development is definitely the way to go for developing web applications.

When I first started to think about what I should add to ngfive, I looked back at all the projects I've developed so far with Angular and thought of all the things I wish I had did. The major things that came up was reducing the amount of duplicate code. I couldn't believe how much excess code was in the code base. The answer which is now obvious, is to create components which is reusable throughout the application. I can admit that I'm a little late to the party, but I'm here now. This way of development recently sunk in after spending a couple of weeks learning ReactJS. React's a paradigm shift compared to the other frameworks I've used and I can say it forces you to think in components. Compared to Angular where you can implement the same thing in about 3-4 different ways. Essentially, everything is a component in React which at first was a complexity overdose, but the [right tutorial][react4beginners] made it easy for me to understand. The equivalent to a component in React are are directives in Angular. Honestly it never dawned on me until this week, that directives can be used in this manor. And after testing and refactoring some existing code into components, I'm absolutely sold on this method of developing web applications. If you're interested in developing in this fashion with Angular 1.x, the resources below were a big help.

Cheers.

## Resources
* [React for Beginners][react4beginners]
* [Thinking in React][thinkingInReact]
* [Refactoring Angular Apps to Component Style][ngComponentStyle]


[ngfive]: https://github.com/idfive/ngFive
[react4beginners]: https://ReactForBeginners.com/
[thinkingInReact]: https://getpocket.com/a/read/565848888
[ngComponentStyle]: https://getpocket.com/a/read/1075941757
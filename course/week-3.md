# Week 3: ‘Design & refactor’ 🛠

[Minor Web Development](https://github.com/cmda-minor-web/) - [Web App From Scratch](https://github.com/cmda-minor-web/web-app-from-scratch-2122)

## Intention

### Goal this week: ‘Design & refactor’ 🛠

Iterate on the user story. Add routes and states. refactor code into modules.

### Next week: ‘Wrapping up’ 🎁

Final iteration on user story. Manipulate, filter and sort data

---

## Assignment

Refactor your Single Page Web App.

### Sub tasks

1. [Handle routes to manage state](#1-handle-routes-to-manage-state)
2. [Refactor code into modules](#3-refactor-code-into-modules)

### Slides

1. Routes en Modules - Week 3 Maandag 28 feb
2. UI Principles - Week 3 Dinsdag 1 mrt

--- 

## 1. Handle routes to manage state 

On a single page web app you will have to create the URLs (or routes) to the different "pages" in JavaScript. For example if you want to be able to navigate to a detail page. You can do this by using the hash (#) in the url, in combination with the hashchange event. Making a router yourself is quite complicated, so this is a good opportunity to use a micro library. Routie.js is a simple hash router that you can use.

### Resources

- [Router Microjs libs](http://microjs.com/#router)
- [Routie - hash router](http://projects.jga.me/routie/)  



## 2. Refactor code into modules 

Up until now, in your JavaScript code, you are fetching data from an api, render the data into the HTML page and you added a router to be able to switch the different states of your application. Your code can become harder and harder to read and maintain. This is a good time to refactor the structure of your app by splitting up your code in different ES modules. 

#### Resources

- [Introduction to ES Modules](https://flaviocopes.com/es-modules/)    



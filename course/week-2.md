# Week 2: ‘Hello API’ 🐒

[Minor Web Development](https://github.com/cmda-minor-web/) - [Web App From Scratch](https://github.com/cmda-minor-web/web-app-from-scratch-2122)

## Intention

The coming three weeks you will create a client side Single Page web App (SPA) during this course. Based upon data from the API of your chosen user story, you design, build and test a prototype in three iterations. You write vanilla HTML, CSS and JS, and avoid to use frameworks or libraries as much as possible - with the exception of a micro library if neccessary. 

### Goals this week: ‘Hello API’ 🐒

Pick an user story. Design the interface. Retrieve data from the chosen API and build the interface.

### Next week: ‘Design & refactor’ 🛠

Iterate on the User Story. Add Routes and States. Refactor code into Modules. [Check it out](https://github.com/cmda-minor-web/web-app-from-scratch-2122/blob/main/course/week-3.md)


---  

## Assignment

Design and build a Single Page Web App based on a User Story.

### Sub tasks

1. [Pick a user story and sketch the User Interface](#1-pick-a-user-story-and-sketch-the-user-interface)
2. [Load data from the API and build the User Interface](#2-loading-data-from-the-api-and-build-the-user-interface)
3. [Add feedback to the User Interface and test](#3-add-feedback-to-the-user-interface-and-test-dinsdag) (Dinsdag)
4. [Conduct Code Review via GitHub](#4-conduct-code-review-add-issues-on-github-vrijdag) (Vrijdag)

### Slides

1. [Opdracht - Week 2 Maandag 14 feb](WAFS-W2-01-Hello-API.pdf)
2. [UI-Stack - Week 2 Dinsdag 15 feb](WAFS-W2-02-UI-Stack.pdf)



---  

## 1. Pick a User Story and sketch the User Interface

### User stories

1. As a student Digital Design, I want to look at inspiring web design quotes, to get some fresh energy when I'm down while working on crazy deadlines.
[FDND Web Design Quotes API](https://github.com/cmda-minor-web/web-app-from-scratch-2122/blob/main/course/fdnd-quotes.md)
2. As an art lover, I want to be able to search and view art from the Rijksmuseum at home, so that I can still enjoy art during a lockdown
[Rijksmuseum - RijksData API](https://github.com/cmda-minor-web/web-app-from-scratch-2122/blob/main/course/rijksmuseum.md)
3. As a frisbee player, I want to be able to save and pass on the scores of a match, so I know where and when we have to play the next game. 
[Frisbee Tournament - Leaguevine API](https://github.com/cmda-minor-web/web-app-from-scratch-2122/blob/main/course/frisbee-tournament.md)
4. As a foodie, I want to be able to easily search and view information about a product while shopping,
so that I can make a good choice whether it fits my diet.
[Healthy Food Checker - Open Food Facts API](https://github.com/cmda-minor-web/web-app-from-scratch-2122/blob/main/course/healthy-food-checker.md)
5. As a patient, I want to be able to make a reliable diagnosis at home, so that I can better estimate whether I should make an appointment with the doctor.
[EndlessMedical API](https://github.com/cmda-minor-web/web-app-from-scratch-2122/blob/main/course/endless-medical.md)
6. ~~As a artist, I want to sketch and design a t-shirt online, so I can sell my t-shirt-artwork.
[Printify API](https://github.com/cmda-minor-web/web-app-from-scratch-2122/blob/main/course/t-shirt-maker.md)~~
7. As a children's book author, I want to experiment with innovative Dutch-language voice interaction patterns, so I can tell my stories in an entirely new way.
[Storytelling - Web Speech API](https://github.com/cmda-minor-web/web-app-from-scratch-2122/blob/main/course/storytelling.md)

- Do you have an idea you want to design and develop? Yes you can ... Write a User Story and present what you are planning to do.

### Sketch the interface

1. Investigate API
2. Sketch User Flow in a Wireflow
3. Sketch Breakdown-graph: break the Wireflow down in HTML, CSS and JS.

### Resources

- [What is a Single Page Application](https://www.monocubed.com/what-is-single-page-application/)
- [Wat is een User Story?](https://agilescrumgroup.nl/wat-is-een-user-story/)
- [Wireframing User Flow with Wireflows](https://balsamiq.com/learn/articles/wireflows/)

---

## 2. Loading data from the API and build the User Interface

Requesting data from an API can take a relatively long time that your program would not have to wait for.
That is why you are going to make an asynchronous request to the API.

### Fetch data from your API

Create a request object in your code with which you load data (a list of items) with an asynchronous call from the chosen API.  
Parse the JSON into a JavaScript object.

### Build the User Interface

Render the data object into structured HTML and style the interface with CSS.  

### Resources

- Try this tutorial [Working with JSON](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON) to learn about JSON, Fetch and creating HTML
- [How to use the Fetch API with vanilla JS](https://gomakethings.com/how-to-use-the-fetch-api-with-vanilla-js/)
- [Promises in JavaScript](https://gomakethings.com/promises-in-javascript/)
- [Easy Creation of HTML with JavaScript’s Template Strings](https://wesbos.com/template-strings-html)
- [You don’t know JS; Async & Performance](https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/async%20&%20performance/README.md#you-dont-know-js-async--performance)
- [The Event Loop, the inner workings of asynchronous code in JavaScript](https://www.youtube.com/watch?v=8aGhZQkoFbQ)

---  

## 3. Add feedback to the User Interface and test (Dinsdag)

Requesting data from an API can take some time before the data is loaded. Also something can go wrong on the server, client or in between. 


### Design and implement the UI-Stack

You have to show feedback to the user when waiting for a request or when something goes wrong.
Every screen you’ll design for your SPA can have up to five states: Ideal State, Empty State, Error State, Partial State, Loading State. 

1. Design an Empty state, Loading state and/or Error state and add them to your Wireflow.
2. Sketch a Breakdown-graph: break the Wireflow down in HTML, CSS and JS.
3. Implement the new code and test with a peer students. 


### Resources

- Read about the UI-Stack in the article [How to fix a bad user interface](https://www.scotthurff.com/posts/why-your-user-interface-is-awkward-youre-ignoring-the-ui-stack/)
- [Error handling while using native fetch API in JavaScript](https://learnwithparam.com/blog/how-to-handle-fetch-errors/)
- [Promises chaining](https://javascript.info/promise-chaining)
<!-- - [Use promise.finally() to remove loading state](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/finally)   -->
 
 
 <!-- ## 3. Fork GitHub repository for this course and setup the README.md

All code and documentation that you write (for all courses and projects in this minor) will be in a GitHub repository. Make a neat layout of files and folders. Make sure that the code can also be viewed via GitHub Pages as rendered HTML, CSS & JavaScript. A Github repo is only complete if it contains a description and readme (with a poster image of the project). We have already prepared a repository that you can fork.

Fork this repository: https://github.com/cmda-minor-web/web-app-from-scratch-2122

Open issues on your repo so that you can get feedback!
Publish your web app with Github pages and add the link to the web app in the repo description.

A good app comes with a good README.md in which you describe the application. Add the chapters below and document your app.

- linkToLiveDemo? review (assignment): assignGrade (1);  
- What does your app do, what is the goal? Add the USer Story and explain your app design (passing butter)  
- Which API is used and what are the possibilities and limitations? (rate limit)
- Which actors are there in your application? (actor diagram)  
- How does flowed interaction through the application? (interaction diagram)
- Which design patterns and best practices
- What would you like to add (feature wishlist / backlog)  

*(Also see the commented hints in the README.md)* 

### Resources

- [GitHub Hello World (getting started)](https://guides.github.com/activities/hello-world/)
- [Git command explorer](https://gitexplorer.com/)
- [Github Pages](https://pages.github.com/)
- [A list of awesome READMEs](https://github.com/cmda-minor-web/web-app-from-scratch-1819/network/members)
-->

---  

## 4. Conduct code review: add issues on GitHub (Vrijdag)

On GitHub you can use Issues to suggest changes to a colleague developer's code. You can do this online via the GitHub website.
Create at least 2 issues for different peer students. You can look at improvements / suggestions for or questions about HTML, CSS & JavaScript code.

### Resources

- [Vertical and horizontal peer review](https://github.com/cmda-minor-web/web-app-from-scratch-2122/blob/main/course/peer-review-1.md)
- [Best practices JavaScript](https://github.com/cmda-minor-web/best-practices/blob/master/javascript.md)



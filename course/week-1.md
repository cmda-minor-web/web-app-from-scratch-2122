# Exercises Week 1: ‘Hello API’ 🐒

Minor Web Development - Web App From Scratch

## Goal 

Pick a user story, design the interface, retrieve data from an API and render the structured content.

## Intention

The coming three weeks you will create a client side web app during this course. Based upon data from the API of your chosen user story, you design, build and test a prototype in three iterations. You write as much vanilla code as possible, and avoid to use frameworks or libraries as much as possible - with the exception of a micro library if neccessary. 

## Method

16 hours have been scheduled to work on this course this week (Monday and Tuesday). Try to plan your work well! In the meantime, progress is monitored in standup meetings and classroom meetings. Your code will be reviewed at Friday. Any issues will be placed in your GitHub repository.

### This week: ‘Hello API’ 🐒

Pick an user story. Design the interface. Retrieve data from the chosen API and render structured content in the interface.

### Next week: ‘Design & refactor’ 🛠

Iterate on the user story. Add routes and states. Refactor code into modules.

## Exercises

1. Fork GitHub repository for this course and setup the README.md 
2. Pick a user story and design the interface
3. Loading asynchronous data from the API and render structured content in the interface
4. Conduct Code Review via GitHub  


### 1. Fork GitHub repository for this course (Monday)

All code and documentation that you write (for all courses and projects in this minor) will be in a GitHub repository. Make a neat layout of files and folders. Make sure that the code can also be viewed via GitHub Pages as rendered HTML, CSS & JavaScript. A Github repo is only complete if it contains a description and readme (with a poster image of the project). We have already prepared a repository that you can fork.

Fork this repository: https://github.com/cmda-minor-web/web-app-from-scratch-2021

Open issues on your repo so that you can get feedback!
Publish your web app with Github pages and add the link to the web app in the repo description.

#### Resources

[GitHub Hello World (getting started)](https://guides.github.com/activities/hello-world/)  
[Git command explorer](https://gitexplorer.com/)  
[Github Pages](https://pages.github.com/)  

### 2. Write a good README.md (Monday)

A good app comes with a good README.md in which you describe the application. Add the chapters below and document your app.

* linkToLiveDemo? review (assignment): assignGrade (1);  
* What does your app do, what is the goal? (passing butter)  
* Which actors are there in your application? (actor diagram)  
* Which API is used and what are the limitations? (rate limit)  
* How does flowed interaction through the application? (interaction diagram)  
* Which design patterns and best practices  
* What would you like to add (feature wishlist / backlog)  

*(Also see the commented hints in the README.md)*

#### Resources

[A list of awesome READMEs](https://github.com/cmda-minor-web/web-app-from-scratch-1819/network/members)

### 3. Loading data asynchronously from an API (Monday / Tuesday)

Requesting data from an API can take a relatively long time that your program would not have to wait for. That is why you are going to make an asynchronous request to the API.

#### Pick an API
Select a JSON API of your choice from for example Programmable Web (the api must support https!) (Http://www.programmableweb.com/apis/directory)

Examples of easily accessable APIs:
- [Darksky](https://darksky.net/dev)
- [Rijksmuseum](https://www.rijksmuseum.nl/en/api/-rijksmuseum-oai-api-instructions-for-use)
- [Github](https://developer.github.com/v3/)
- [Trivia](https://opentdb.com/api_config.php)

#### Fetch data from your API
Create a request object in your code with which you load data (a list of items) with an asynchronous call from the chosen API.
Parse de JSON and save the data items in a temporary object (and / or in LocalStorage).

#### Resources

[The Event Loop, the inner workings of asynchronous code in JavaScript < MUST SEE!!!](https://www.youtube.com/watch?v=8aGhZQkoFbQ)  
[You don’t know JS; Async & Performance](https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/async%20&%20performance/README.md#you-dont-know-js-async--performance)

### 4. Rendering data in the overview page (Tuesday)

Generate a list of items in the overview page (index.html) based on the data you collected and parsed from the API. Walk through the data items and insert them into the DOM using the innerHTML method in combination with template literals for example.

#### Resources

[element.innerHTML](https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML)  
[Template engines](http://microjs.com/#template)

### 5. Conduct code review: add issues on GitHub (vrijdag)

On GitHub you can use Issues to suggest changes to a colleague developer's code. You can do this online via the GitHub website.
Create at least 2 issues for different peer students. You can look at improvements / suggestions for or questions about HTML, CSS & JavaScript code.

### Extra challenge

If you can use some extra challenge, the topics below might be interesting for you. It may be wise to first create the above exercises as such, and then process one or more of the advanced topics below. If you want to tackle a different topic, we advice you to consult a teacher.

[Instructions on how to conduct peer review](https://github.com/cmda-minor-web/web-app-from-scratch-2021/blob/master/course/peer-review-1.md)

#### Resources

[Write your own template engine](http://krasimirtsonev.com/blog/article/Javascript-template-engine-in-just-20-line)  
[Build your app with Web components](https://meowni.ca/posts/web-components-with-otters/)  
[Write your own Virtual DOM](https://medium.com/@deathmood/how-to-write-your-own-virtual-dom-ee74acc13060)  
[Go functional with Reactive UI’s](https://css-tricks.com/reactive-uis-vanillajs-part-1-pure-functional-style/)  

# Exercises Week 1: ‘Hello API’ 🐒
Minor Web Development - Web App From Scratch

## Intention
The next 3 weeks you will create a client side web app during this course. Based upon data from an API of your choice, you create an overview and detail page of the items retrieved from the API. On the overview page you add a filter / sort functionality, so that you can filter the items. You write as much vanilla code as possible, and avoid the use frameworks or libraries (with the exception of a micro library here and there) as much as possible. You will increasingly give structure to the code as the course progresses.

## Method
16 hours have been scheduled to work on this course this week (Monday and Tuesday). Try to plan your work well! In the meantime, progress is monitored in standup meetings and classroom meetings. Your code will be reviewed at Friday. Any issues will be placed in your GitHub repository.

### This week: ‘Hello API’ 🐒
Retrieve data from an API and render in an overview page

### Volgende week:  ‘Design & refactor’ 🛠
Breakdown the web app. Add routes and states. Rendering detail pages

## Opdrachten
1 Fork GitHub repository for this course (Monday)
2 Write a good README.md (Monday)
3 Loading asynchronous data from an API (Wednesday)
4 Rendering data in the overview page (Wednesday)
5 Conduct Code Review via GitHub (Friday)
Extra challenge

## 1 Fork GitHub repository for this course (Monday)
All code and documentation that you write (for all courses and projects in this minor) will be in a GitHub repository. Make a neat layout of files and folders. Make sure that the code can also be viewed via GitHub Pages as rendered HTML, CSS & JavaScript. A Github repo is only complete if it contains a description and readme (with a poster image of the project). We have already prepared a repository that you can fork.

Fork this repository: https://github.com/cmda-minor-web/web-app-from-scratch-1819
Voeg onderstaande bestanden toe in de repo folder ‘week 1’ 
index.html
src/css/styles.css
src/js/app.js

Zet issues open op jouw repo zodat je feedback kan krijgen!
Zet je website live op Github pages(kies project site) en zet een link naar de website in de repo description.

### Resources
GitHub Hello World (getting started) 
Git command explorer
Github Pages


## 2 Schrijf een goede README.md (vrijdag)

Bij een web app hoort een goed README.md waar je de applicatie beschrijft. Voeg onderstaande hoofdstukken toe en documenteer jou app. 

linkToLiveDemo ? review(assignment) : assignGrade(1);
Wat doet jou app, wat is het doel? (passing butter)
Welke actoren zitten er in jouw applicatie? (actor diagram)
Welke API wordt gebruikt en wat zijn de beperkingen? (rate limit)
Hoe flowed interactie door de applicatie? (interaction diagram)
Welke design patterns en best practices
Wat zou je nog willen toevoegen (feature wishlist / backlog)

### Resources
Een lijst met awesome README’s

## 3 Asynchroon data laden uit een API (woensdag)
Data opvragen van een API kan relatief veel tijd kosten waarop jouw programma code niet op zou hoeven wachten. Daarom ga je een asynchrone request naar de API doen.

Kies een JSON API uit op bijvoorbeeld Programmable Web (de api moet https ondersteunen!) (http://www.programmableweb.com/apis/directory) 
Maak een request object aan in je code waarmee je met een asynchrone call data (een lijst van items) inlaadt vanaf de gekozen API. 
Parse de JSON en sla de data items op in een tijdelijk object (en/of in LocalStorage)

### Resources
The Event Loop, hoe asynchrone code werkt in JavaScript < MUST SEE!!!
You don’t know JS; Async & Performance

## 4 Data renderen in de overzichtspagina (vrijdag)
Genereer aan de hand van de data die je opgehaald en geparsed hebt vanuit JavaScript een lijst van items in de overzichtspagina (index.html). Loop door de data items en schrijf het weg met bijvoorbeeld de innerHTML method van een DOM node. Of je kijkt alvast of je een template engine wil gebruiken. Template engines behandelen we later nog in vak. 

### Resources
element.innerHTML
Template engines
5 Code Review uitvoeren via GitHub (vrijdag)
Op GitHub kan je met Issues wijzigingen in code van een collega developer suggereren. Dit doe je online via de GitHub website.
Maak bij verschillende collega studenten minimaal 2 issues aan. Je kan kijken naar verbeteringen/suggesties voor of vragen over HTML, CSS & JavaScript code.

## Extra uitdaging
Mocht je extra uitdaging kunnen gebruiken, dan zijn onderstaande onderwerpen interessant. Het kan verstandig zijn om eerst de bovenstaande opdrachten als zodanig te maken, en daarna één of meer van onderstaande advanced topics in de app te verwerken. Mocht je een ander onderwerp willen aanpakken, overleg dat dan even.

### Resources
[Schrijf je eigen template engine](http://krasimirtsonev.com/blog/article/Javascript-template-engine-in-just-20-line) 
[Bouw je app op met Web components](https://meowni.ca/posts/web-components-with-otters/) 
[Schrijf je eigen Virtual DOM](https://medium.com/@deathmood/how-to-write-your-own-virtual-dom-ee74acc13060) 
[Go functional met Reactive UI’s](https://css-tricks.com/reactive-uis-vanillajs-part-1-pure-functional-style/) 

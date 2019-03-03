Opdrachten Week 1: ‘Hello API’ 🐒
Minor Web Development - Web App From Scratch

Intentie
De komende 3 weken ga je in dit vak een client side web app maken. Op basis van data uit een API naar keuze maak je een overzichts- en detailpagina’s van de items die je ophaalt uit de API. Op de overzichtspagina bouw je een filter/sorteer functionaliteit, zodat je de items kan filteren. Je schrijft zoveel mogelijk vanilla code, dus je gebruikt geen frameworks of libraries (met uitzondering van hier en daar een micro library). In de loop van dit vak ga je zelf steeds meer structuur geven aan de code.

Deze week: ‘Hello API’ 🐒
Data ophalen uit een API en renderen in een overzichtspagina.

Volgende week:  ‘Design & refactor’ 🛠
Breakdown maken van de web app. Routes en states toevoegen. Detailpagina’s renderen

Werkwijze
Er is 16 uur ingeroosterd om deze week aan dit vak te werken. Probeer je werk goed te plannen! Tussentijds wordt in standup meetings en klassikale bijeenkomsten de voortgang gemonitord. Aan het eind van de week wordt je code gereviewed. Eventuele issues komen in de GitHub repository te staan.

Opdrachten

1 GitHub repository forken voor dit vak (maandag)	2
2 Schrijf een goede README.md (maandag)	2
3 Asynchroon data laden uit een API (woensdag)	3
4 Data renderen in de overzichtspagina (woensdag)	3
5 Code Review uitvoeren via GitHub (vrijdag)	3
Extra uitdaging	3







1 GitHub repository forken voor dit vak (maandag)
Alle code en documentatie die je schrijft (voor alle vakken en projecten in deze minor) komt in een GitHub repository te staan. Maak een nette indeling van bestanden en folders. Zorg ervoor dat de code ook via GitHub Pages te bekijken is als gerenderde HTML, CSS & JavaScript. Een Github repo is pas volledig als er een description en readme bij zitten. We hebben alvast een repository voor je klaar gezet die je kan forken.

Maak een fork van deze repository: https://github.com/cmda-minor-web/web-app-from-scratch-1819
Voeg onderstaande bestanden toe in de repo folder ‘week 1’ 
index.html
public/css/styles.css
public/js/app.js
Zet issues open op jouw repo zodat je feedback kan krijgen!
Zet je website live op Github pages(kies project site) en zet een link naar de website in de repo description.

Resources
GitHub Hello World (getting started) 
Git command explorer
Github Pages


2 Schrijf een goede README.md (vrijdag)

Bij een web app hoort een goed README.md waar je de applicatie beschrijft. Voeg onderstaande hoofdstukken toe en documenteer jou app. 

linkToLiveDemo ? review(assignment) : assignGrade(1);
Wat doet jou app, wat is het doel? (passing butter)
Welke actoren zitten er in jouw applicatie? (actor diagram)
Welke API wordt gebruikt en wat zijn de beperkingen? (rate limit)
Hoe flowed interactie door de applicatie? (interaction diagram)
Welke design patterns en best practices
Wat zou je nog willen toevoegen (feature wishlist / backlog)

Resources
Een lijst met awesome README’s
3 Asynchroon data laden uit een API (woensdag)
Data opvragen van een API kan relatief veel tijd kosten waarop jouw programma code niet op zou hoeven wachten. Daarom ga je een asynchrone request naar de API doen.

Kies een JSON API uit op bijvoorbeeld Programmable Web (de api moet https ondersteunen!) (http://www.programmableweb.com/apis/directory) 
Maak een request object aan in je code waarmee je met een asynchrone call data (een lijst van items) inlaadt vanaf de gekozen API. 
Parse de JSON en sla de data items op in een tijdelijk object (en/of in LocalStorage)

Resources
The Event Loop, hoe asynchrone code werkt in JavaScript < MUST SEE!!!
You don’t know JS; Async & Performance
4 Data renderen in de overzichtspagina (vrijdag)
Genereer aan de hand van de data die je opgehaald en geparsed hebt vanuit JavaScript een lijst van items in de overzichtspagina (index.html). Loop door de data items en schrijf het weg met bijvoorbeeld de innerHTML method van een DOM node. Of je kijkt alvast of je een template engine wil gebruiken. Template engines behandelen we later nog in vak. 

Resources
element.innerHTML
Template engines
5 Code Review uitvoeren via GitHub (vrijdag)
Op GitHub kan je met Issues wijzigingen in code van een collega developer suggereren. Dit doe je online via de GitHub website.
Maak bij verschillende collega studenten minimaal 2 issues aan. Je kan kijken naar verbeteringen/suggesties voor of vragen over HTML, CSS & JavaScript code.


Extra uitdaging
Mocht je extra uitdaging kunnen gebruiken, dan zijn onderstaande onderwerpen interessant. Het kan verstandig zijn om eerst de bovenstaande opdrachten als zodanig te maken, en daarna één of meer van onderstaande advanced topics in de app te verwerken. Mocht je een ander onderwerp willen aanpakken, overleg dat dan even.

Schrijf je eigen template engine
http://krasimirtsonev.com/blog/article/Javascript-template-engine-in-just-20-line 

Bouw je app op met Web components 
https://meowni.ca/posts/web-components-with-otters/ 


Schrijf je eigen Virtual DOM
https://medium.com/@deathmood/how-to-write-your-own-virtual-dom-ee74acc13060 


Go functional met Reactive UI’s
https://css-tricks.com/reactive-uis-vanillajs-part-1-pure-functional-style/
https://css-tricks.com/reactive-uis-vanillajs-part-2-class-based-components/



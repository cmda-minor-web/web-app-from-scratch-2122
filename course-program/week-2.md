Opdrachten Week 2: ‘Design & refactor’ 🛠
Minor Web Development - Web App From Scratch

Intentie
De komende 3 weken ga je in dit vak een client side web app maken. Op basis van data uit een API naar keuze maak je een overzichts- en detailpagina’s van de items die je ophaalt uit de API. Op de overzichtspagina bouw je een filter/sorteer functionaliteit, zodat je de items kan filteren. Je schrijft zoveel mogelijk vanilla code, dus je gebruikt geen frameworks of libraries (met uitzondering van hier en daar een micro library). In de loop van dit vak ga je zelf steeds meer structuur geven aan de code.

[Slides](https://drive.google.com/open?id=1IqQeu1m0dQiSC_KCvrn8eencAgtYe7X6qT-gm0n9Bmc)

Deze week: ‘Design & refactor’ 🛠
Breakdown maken van de web app. Routes en states toevoegen. Detailpagina renderen.

Volgende week: ‘Wrapping up’ 🎁
Data manipuleren en templating. Code splitsen in modules. Reflecteren op wat je hebt gemaakt.

Werkwijze
Er is 16 uur ingeroosterd om deze week aan dit vak te werken. Probeer je werk goed te plannen! Tussentijds wordt in standup meetings en klassikale bijeenkomsten de voortgang gemonitord. Aan het eind van de week wordt je code gereviewed. Eventuele issues komen in de GitHub repository te staan.

Opdrachten

1 Actor diagram maken (maandag) 2
2 Interaction diagram maken (maandag) 2
3 Refactor code (woensdag) 2
4 Handle routes naar de detailpagina’s (woensdag) 3
5 Implementeer een template engine (woensdag) 3

1 Actor diagram maken (maandag)
Visualiseer waar je code leeft op een BEGRIJPELIJKE manier. Zorg dat alle objecten, properties, methods en eventuele variabelen en functies meegenomen worden. Kijk terug naar het college en je aantekeningen om te zien hoe je dit doet. Zet de actor diagram in je README.md van de geforkte repo.
Voer de step-by-step uit van onderstaande documentatie

Resources
Documentatie Actor en Interaction diagram

2 Interaction diagram maken (maandag)
Hoe verloopt de interactie tussen gebruiker en app? Wanneer wordt er bijvoorbeeld data geladen? Welke use cases zijn er mogelijk? Aan de hand van dit diagram en je actor diagram gaan we de beoordeling doen. Zet de interaction diagram in je README.md van de geforkte repo.
Voer de step-by-step uit van onderstaande documentatie

Resources
Documentatie Actor en Interaction diagram

3 Refactor code (woensdag)
Nu je een beter inzicht hebt gekregen, met behulp van de diagrammen, wordt het wellicht tijd om de structuur van je app te refactoren. Ofwel hoe ga je de verschillende actoren, en de afhankelijkheden ertussen, in je app coderen? Welke design patterns gebruik jij? Kijk goed naar de criteria in de [rubric] en zorg ervoor dat jou code daaraan voldoet.

Resources
JavaScript Design Patterns
Advanced JavaScript concepten

4 Handle routes naar de detailpagina’s (woensdag)
In een single page web app zal je zelf de url’s (ofwel routes) naar de verschillende “pagina’s” moeten maken in JavaScript. Bijvoorbeeld als je wilt kunnen navigeren naar een detailpagina. Je kan dit doen door de hash (#) in de url te gebruiken, in combinatie met het hashchange event. Zelf een router maken is best ingewikkeld, dus dit is een mooie gelegenheid om een micro library te gebruiken. Routie.js is een eenvoudige hash router die je kan gebruiken.

Link de items op de overzichtpagina’s naar unieke url’s en handle deze routes.
Zorg ervoor dat je ook weer terug kan navigeren naar de overzicht pagina

Resources
http://microjs.com/#router
5 Implementeer een template engine (woensdag)
Gebruik een template engine om de data te renderen naar HTML.
Voeg de template engine Transparency.js (https://github.com/leonidas/transparency) toe aan je applicatie. Of gebruik een andere template engine ()
Genereer met behulp van de eerder opgehaalde data en de template engine de HTML die je wil tonen in de overzichtssectie.
Genereer ook detailsections van de individuele items uit de lijst.

Resources
http://microjs.com/#template

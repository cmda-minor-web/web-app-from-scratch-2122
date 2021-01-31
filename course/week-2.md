# Opdrachten Week 2: ‘Design & refactor’ 🛠

Minor Web Development - Web App From Scratch

## Intention

The coming three weeks you will create a client side web app during this course. Based upon data from an API of your choice, you create an overview and detail page of the items retrieved from the API. On the overview page you add a filter / sort functionality, so that you can filter the items. You write as much vanilla code as possible, and avoid to use frameworks or libraries (with the exception of a micro library here and there) as much as possible. You will increasingly give structure to the code as the course progresses.

[Slides](https://docs.google.com/presentation/d/1ycANqFk9LtrZCBJF2TyQ1c_bejjEctSlb-52xbK_P1g/edit?usp=sharing)

## Method

16 hours have been scheduled to work on this course this week (Monday and Tuesday). Try to plan your work well! In the meantime, progress is monitored in standup meetings and classroom meetings. Your code will be reviewed at Friday. Any issues will be placed in your GitHub repository.

### This week: ‘Design & refactor’ 🛠

Breakdown the web app in features. Add routes and states. Rendering detail pages

### Next week: ‘Wrapping up’ 🎁

Manipulate data and templating. Split code into modules. Reflect on what you made.

## Exercises

1. Create actor diagram (Monday)
2. Creating an interaction diagram (Monday)
3. Refactor code (Monday)
4. Handle routes to the detail pages (Monday)
5. Implement a template engine (Tuesday)

### 1. Create actor diagram (Monday)

Visualize where your code lives in a comprehensible way. Ensure that all objects, properties, methods and any variables and functions are included. Look back to the lecture and your notes to see how you do this. Put the actor diagram in your README.md of the forked repo.

Perform the step-by-step of the documentation below.

#### Resources

[Documentation Actor and Interaction diagram](https://drive.google.com/open?id=17zwy1Kj4vqM5jqYWz7U6Spi_7i9ucucyBeAMDAfn0mY)
[Overview of the symbols you can use and their meaning](https://www.gliffy.com/blog/how-to-flowchart-basic-symbols-part-1-of-3)

### 2. Create interaction diagram (Monday)

How does the interaction between user and app work? For example, when will data be loaded? Which use cases are possible? We will do the assessment based on this diagram and your actor diagram. Put the interaction diagram in your README.md of the forked repo.

Perform the step-by-step of the documentation below

#### Resources

[Documentation Actor and Interaction diagram](https://drive.google.com/open?id=17zwy1Kj4vqM5jqYWz7U6Spi_7i9ucucyBeAMDAfn0mY)
[Overview of the symbols you can use and their meaning](https://www.gliffy.com/blog/how-to-flowchart-basic-symbols-part-1-of-3)

### 3. Refactor code (Monday)

Now that you have gained a better understanding, using the diagrams, it may be time to refactor the structure of your app. In other words, how are you going to code the various actors and the dependencies between them in your app? Which design patterns do you use? Look carefully at the criteria in the [rubric] and make sure that your code meets these.

#### Resources

[JavaScript Design Patterns](https://addyosmani.com/resources/essentialjsdesignpatterns/book/)  
[Advanced JavaScript concepts](http://javascriptissexy.com/16-javascript-concepts-you-must-know-well/)

### 4. Handle routes to the detail pages (Monday)

On a single page web app you will have to create the URLs (or routes) to the different "pages" in JavaScript. For example if you want to be able to navigate to a detail page. You can do this by using the hash (#) in the url, in combination with the hashchange event. Making a router yourself is quite complicated, so this is a good opportunity to use a micro library. Routie.js is a simple hash router that you can use.

Link the items on the overview pages to unique URLs and handle these routes.
Make sure that you can also navigate back to the overview page.

#### Resources

http://microjs.com/#router

### 5. Implement a template engine (Tuesday)

Use a template engine to render the data to HTML.
Add the Transparency.js template engine (https://github.com/leonidas/transparency) to your application. Or use a different template engine of your own choice.
Using the previously retrieved data and the template engine, generate the HTML that you want to display in the overview section.
Also generate detail sections of the individual items from the list.

#### Resources

http://microjs.com/#template

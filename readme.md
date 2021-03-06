# [BLUEVR](https://thawing-ridge-53961.herokuapp.com/)
Create, store and delete shapes (entities) in WebVR

![](assets/v2.png?raw=true)


## OVERVIEW
This web application allows users to create shapes in WebVR without having to write any code. Instead of writing code, the user selects information regarding the desired geometry, color and position of a new entity. After, the user clicks on the create button to store the entity’s information in a database and also render a new entity in the bowser. Furthermore, the geometry will change color when it interacts with the [gaze-based cursor](https://aframe.io/docs/0.5.0/components/cursor.html). Below is a screenshot of the view when the user clicks on enter virtual reality button.

This is an early stage and still evolving project.

![](assets/img2.png?raw=true)



## INSTALLATION
**TECHNOLOGIES USED**

[A-Frame](https://aframe.io/) | HTML | CSS | JavaScript | jQuery | Handlebars.js | MongoDB | Node | Express | [A-Frame cursor with visual feedback from Captain Anonymous](http://codepen.io/anon/pen/dpmpJP)

* Clone or fork this repository

* Make sure you have the following technologies installed on your computer:
  * [MongoDB](https://www.mongodb.com/download-center#community), [node.js](https://nodejs.org/) and [express.js](https://expressjs.com/)

* Run `$ npm install` to install all dependencies

* To run locally
  * Open a new tab in your terminal and run `$ nodemon`
  * Open another tab in your terminal and simultaneously run `$ mongod`

## DESIGN

The interface of this project began with a single text input. The user was to type inside the input, I would then store the value of that input to a database and then render the data to the browser. I was quickly able to persist data from the text input so I challenged myself and added other inputs that would allow the user to have higher control of the geometries they were creating.

First version of BLUEVR

![](assets/v1.png?raw=true)

Screenshot of geometry created with this web application

![](assets/img1.png?raw=true)

**USER STORIES**

* As a user I want to be able to create a new entity
* As a user I want to be able to update the color of an entity
* As a user I want to be able to delete all entities and start over with a blank scene
* As a user I want to be able to view all of the entities that I created

**DATA MODELING**

This is the model of the Mongoose Schema that stores the attributes of each entity

![](assets/model.png?raw=true)

**RENDERING**

The geometries are then rendered with handlebars.js and by modifying the attributes of the A-Frame entity

![](assets/aframe.png?raw=true)

**USER INTERFACE**

First app sketch, take value from single input, save the value of the input to database in MongoDB and then render text in browser

![](assets/wireframe1.png?raw=true)

Second app sketch, add more inputs in order to allow user to have more control over creation

![](assets/wireframe2.png?raw=true)

**USER EXPERIENCE**

Third app sketch, speculative design where future improvements increase usability of the web application by allowing users to define their geometry based on buttons and not inputs

![](assets/wireframe3.png?raw=true)


**MAJOR HURDLES**

A click, a gaze, both?

Although WebVR runs in the browser, when interacting with A-frame with a computer, the cursor needs to be modified so that it can interact individual entities with the VR scene. In A-frame a click of the mouse in the browser is not a traditional click event. Instead the "click" is actually the center of the screen which is where the camera is gazing or "clicking".

Learn more [here](https://aframe.io/docs/0.5.0/components/cursor.html#sidebar)!

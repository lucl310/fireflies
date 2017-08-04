# Fireflies

Awaken the fireflies!

## Objective
Use **JavaScript Logic** to change CSS, track mouse coordinates with **Mouse Event Client X & Client Y Properties**, and create dynamic visuals with **CSS Keyframe Animations**. Introduction of *setInterval* and *removeChild*.

## Prerequisites
To complete this project, students should have the following:
* Basic understanding of HTML structure and attributes.
* Basic understanding of CSS properties.
* Intermediate understanding of JavaScript and DOM.

## Your Challenge

### Part I
To complete Part I, fulfill the following requirements:
1. Set up your project file structure through the command line.
2. Create the following:
* HTML, CSS, JS file
* Folder called assets
3. Link all of your files correctly.
4. Create a ```div``` with an ```id``` of ```container```.
5. Inside of this ```div```, create a ```header tag``` with an ```id``` of ```text```.

### Part II
1. Setup variables in your JS file to store the container div and the text header.
2. Add an Event Listener to the ```document``` itself. This will listen for when the user moves their mouse.
  * When the mouse is moved, we will track the mouse coordinates.
    * The x and y coordinates of the mouse can be obtained as follows:
    ```javascript
    let x = event.clientX;
    let y = event.clientY;
    ```
3. Change the innerHTML of the header text to display the x and y coordinates when the mouse is moved. We need to know which numbers are the x-coordinates and which numbers are the y-coordinates.

### Part III
1. We need to set an interval for how often we want our fireflies to appear.
2. Create a variable ```interval``` that will store our interval method. The setInterval method takes in a function, then the milliseconds for how often we would like this function to run.
  * This is an example of a setInterval method.
  ```javascript
  let interval = setInterval(myFunction, 3000);
  ```
  * Create a setInterval method that takes in a function called ```create``` and runs it every 100 milliseconds.
    * Do not pass in ```create()``` with a parenthesis. The parenthesis will mean that we want our create function to run right away. Instead, we want to assign the create function to our setInterval method so that it is executed every so many milliseconds.

### Part III
1. We now need to create the function that will make our fireflies appear.
2. Make a function called ```create```.
3. In this function, declare a variable that will create a ```div``` element. This is an example of how to create an element with JavaScript.
```javascript
let newParagraph = document.createElement('p');
```
4. When this function runs, a new div will appear on the screen. Let's apply styles to these divs through JavaScript.
* This is an example of how to apply styles to an element in JavaScript.
``` javascript
newDiv.style.height = "20px";
```
  * [element].style.[property] = "[value]";
  * Style the div so that it has a ```height```, ```width```, ```backgroundColor```, ```position```, ```left```, and ```top``` property. Set ```position = 'absolute'``` so that we can specify exact values in our left and top property.
  * Define a className on the newly created div using the syntax below. Name the class something meaningful and not just className.
  ```javascript
  newDiv.className += " className";
  ```
  * Remember to include the space before className!

### Part IV
1. Place this div on the document for us to see. To do so, we will need to append (attach), this div to our container div as so.
```javascript
containerDiv.appendChild(newDiv);
```

### Part V
1. Now, let's go into our CSS file to make the animations happen!
2. Style the div with class of container so that it has the full height and width of the entire screen.
3. Create a ```CSS Keyframe``` animation that changes **from** ```opacity = 1 ``` **to** another background color, ```top = 0px``` and ```opacity = 0```.
4. In your CSS, create a class selector for the className that you assigned to the newly created div in your ```create``` function.
  * Set the following properties and values according to the name of your keyframe animation and how long you would like this to last: ```animation-name```, ```animation-duration```, and ```opacity = 0```.
5. View this in your browser to see the fireflies awaken!

### Stretch Goals
1. Randomize the height and width of the newly created Div so that every so many milliseconds, a different sized firefly appears.
2. Change the ```left``` and ```top``` properties of the div so that the fireflies appear at the coordinates of your mouse!
3. Create an array that will take in each div as it appears. Create an if statement that will remove the first div in the array if the length of the array is greater than 10.  

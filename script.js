// Be sure to name any p5.js functions we use in the global so Glitch can recognize them.
// Add to this list as you consult the p5.js documentation for other functions.
/* global createCanvas, colorMode, HSB, width, height, random, background, fill, color, random,
          rect, ellipse, stroke, image, loadImage, collideCircleCircle, collideRectCircle, text, 
          mouseX, mouseY, strokeWeight, line, mouseIsPressed, windowWidth, windowHeight, noStroke, 
          keyCode, UP_ARROW, LEFT_ARROW, RIGHT_ARROW, DOWN_ARROW, textSize, noFill, circle, pmouseX, pmouseY, keyTyped, key, saveCanvas,createSlider, save, keyIsPressed, textStyle, BOLD,textFont, keyPressed */

// Content behind double slashes is a comment. Use it for plain English notes,
// or for code that you want to temporarily disable.

let weight, img, slider, yellow, lightblue, purple, green, orange, white, pink, eraser, c, leftwall, rightwall, ceiling, floor;

function setup() {
  // Code here runs only once
 let c = createCanvas(493, 670); // Creates a canvas with a width and height to match the image's dimensions
  weight = 10; // Sets the thickness of the brush
  background(200); // Sets the background to light grey
  instructions();
  
  
  
  yellow = color(253,218,13);
  lightblue = color(173, 216, 230);
  purple = color(195,177,255);
  green = color(56, 255, 182);
  orange = color(255, 128, 0);
  white = color(255, 255, 255);
  pink = color(248,200,220);
  eraser = color(200);
  
  leftwall = 57;
  rightwall = 450;
  ceiling = 68;
  floor = 472;

  stroke(yellow);
  strokeWeight(weight);
  
  image(img, 0, 0, 493, 562); // Defines the image dimensions and creates the image
  
  slider = createSlider(1, 20, 10);
  slider.position(80, 560);
  slider.style('width', '80px');
  
 
} 

function draw() {
  // Code here runs continuously
  //enables the strokeWeight to be adjusted with a slider
  
  weight = slider.value();
  strokeWeight(weight);
  
  if (mouseIsPressed && mouseX > leftwall+(weight/2) && mouseX < rightwall-(weight/2) && mouseY > ceiling+(weight/2) && mouseY < floor-(weight/2)) {
    line(mouseX, mouseY, pmouseX, pmouseY);
  }
//clears background and reloads image again
  else if(keyIsPressed && keyCode == 67){
    background(200);
    image(img, 0, 0, 493, 562);
    instructions();
  }
  
}
//key numbers align with a color
function keyTyped() {
  if (key === '4') {
    stroke(yellow);
  }
  else if (key === '5') {
    stroke(lightblue);
  }
  else if (key === '6') {
    stroke(purple);
  }
  else if (key === '7') {
    stroke(green);
  }
  else if (key === '8') {
    stroke(orange);
  }
  else if (key === '9') {
    stroke(white);
  }
  else if (key === '1') {
    stroke(pink);
  }
  //pressing s calls saveProject and saves canvas as an jpg file
  else if(key === 's'){
    saveProject();
  }
  else if (key === 'f') {
    image(img, 0, 0, 493, 562);
  }
  else if (key === 'e'){
    stroke(eraser);
  }
  
  
}
//image
function preload(){
  img = loadImage('https://cdn.glitch.com/7ac8240c-10b5-4426-a126-bf9735f3128a%2Fpaintbynumber.svg?v=1626449382661');
}
//saves the drawing
function saveProject(){
  saveCanvas(c, 'paintByNumber.jpg');
}

function instructions(){
  ////instructions specifications
  strokeWeight(0);
  textStyle(BOLD);
  textFont('Comic Sans MS');
  textSize(20);
  text("Instructions: ",75,595,75,80);
  textSize(15);
  text("Move slider to increase or decrease thickness",75, 585);
  text("S to SAVE", 75, 635);
  text("C to CLEAR", 175, 635);
  text("F to FINALIZE painting", 275, 635)
  strokeWeight(weight);
}

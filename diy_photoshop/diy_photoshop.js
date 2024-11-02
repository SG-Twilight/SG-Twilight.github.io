var img;
var initials ='sg'; // your initials
var choice = '1'; // starting choice, so it is not empty
var screenbg = 250; // off white background
var lastscreenshot=61; // last screenshot never taken

function preload() {
// preload() runs once, it may make you wait
//  img = loadImage('cat.jpg');  // cat.jpg needs to be next to this .js file
// you can link to an image on your github account
  img = loadImage('https://dma-git.github.io/images/74.png');
}

function setup() {
createCanvas(600, 400);  // canvas size
background(102, 224, 255);   // ocean background color

}

function draw() {
  if (keyIsPressed) {
    choice = key; // set choice to the key that was pressed
    clear_print(); // check to see if it is clear screen or save image
  }
  if (mouseIsPressed){
    newkeyChoice(choice);  // if the mouse is pressed call newkeyChoice
  }
}

function newkeyChoice(toolChoice) { 

 if (toolChoice == '1' ) {  // Teal Pen
     stroke(166, 216, 216); //Teal
     strokeWeight(10);
    line(mouseX, mouseY, pmouseX, pmouseY);
    
  } else if (toolChoice == '2') { // second tool
  fill(204, 242, 255);//light blue
  noStroke();
    ellipse(mouseX - 30, mouseY - 40, 30, 40); // bubbles
    
  } else if (toolChoice == '3') { // third tool
fill(115, 77, 38); //brown
  noStroke();
    triangle(mouseX - 20, mouseY - 60, mouseX - 10, mouseY - 60, mouseX - 10, mouseY - 10); //ocean floor
 
} else if (toolChoice == '4') { //fourth tool
   fill(153, 153, 102); //greenish brown
    noStroke();
    rect(mouseX - 30, mouseY - 30, 40, 30); //underwater rocks
    
  } else if (key == '5') { //fifth tool
    fill(204, 255, 204);//seafoam green
  noStroke();
    ellipse(mouseX - 40, mouseY - 20, 40, 20); //seafoam
    
  } else if (toolChoice == '6') { //sixth tool
fill(255, 102, 255); //hot pink
    noStroke();
     ellipse(mouseX - 40, mouseY - 20, 40, 20); //fish body
     fill(255, 102, 255); //hot pink
     triangle(mouseX - 15, mouseY - 20, mouseX - 5, mouseY - 20, mouseX - 5, mouseY - 5); //bottom fin
     fill(255, 102, 255); //hot pink
     triangle(mouseX - 15, mouseY - 20, mouseX - 5, mouseY - 20, mouseX - 8, mouseY - 40); //top fin
     
  } else if (toolChoice == '7') { //seventh tool
    fill(255, 102, 102); //coral pink
    noStroke();
   triangle(mouseX - 20, mouseY - 30, mouseX - 5, mouseY - 60, mouseX - 8, mouseY - 20); //pink coral
    
  } else if (toolChoice == '8') { //eighth tool
    fill(255, 255, 102); //yellow
    noStroke();
    triangle(mouseX - 50, mouseY - 60, mouseX - 20, mouseY - 80, mouseX - 20, mouseY - 40); //yellow coral
    
  } else if (toolChoice == '9') { //ninth tool
    fill(210, 121, 210); //purple
    noStroke();
    arc(mouseX -200, mouseY -200, 80, 80, 0, PI+QUARTER_PI, CHORD); //seashell
    
  } else if (toolChoice == '0') { //tenth tool
    noStroke(); 
    fill(255, 230, 179); //beige
     ellipse(mouseX, mouseY - 200, 80, 80); //sand & grains
  }
 }
 
function clear_print() {
// s clears the screen by resetting the background
// t calls the routine saveme, which saves a copy of the screen
  if (key == 's' || key == 's') {
    background(screenbg); // set the screen back to the background color
  } else if (key == 't' || key == 't') {
     saveme();  // call saveme which saves an image of the screen
  }
}

function saveme(){
    //this will save the name as the intials, date, time and a millis counting number.
  filename=initials+day() + hour() + minute() +second();
  if (second()!=lastscreenshot) { // don't take a screenshot if you just took one
    saveCanvas(filename, 'jpg');
    key="";
  }
  lastscreenshot=second(); // set this to the current second so no more than one per second
  
}

var ballx = 300;
var bally = 300;
var ballSize = 40;
var score =0;
var gameState= "L1";

function setup() {
  createCanvas(600, 600);
  textAlign(CENTER);
  textSize(20);
} // end setup


function draw() {
  background(220);
 if (gameState=="L1"){
  levelOne();
  } 
  if (gameState=="L2"){
   levelTwo(); 
  }
  if (gameState=="L3"){
   levelThree(); 
  }
  if (gameState=="L4"){
   levelFour(); 
  }
  if (gameState=="L5"){
   levelFive(); 
  }
  if (gameState=="L6"){
   levelSix(); 
  }
   if (gameState=="L7"){
   levelSeven(); 
  }
   if (gameState=="L8"){
   levelEight(); 
   }
   if (gameState=="L9"){
   levelNine(); 
  }
   if(gameState =="win"){
  win();
}
  
  text(("Score: " + score), width/2, 40);
  

} // end draw


function levelOne(){
  background(204, 204, 255);
  text("Level 1 (Finding Square Gains Difficulty Each Level)", width/2, height-20);
  var distToBall= dist(ballx, bally, mouseX, mouseY);
  if (distToBall <ballSize/2){
    ballx = random(width);
    bally= random(height);
    score= score +1;
  }
  if(score>5){
// call level 2
gameState = "L2";

  }
  noStroke();
  rect(ballx, bally, ballSize+20, ballSize+20);
  fill(255, 255, 153);
  
  //emojis
  textSize(20);
  text("🫧", mouseX, mouseY) //bubbles
  
} // end level one

function levelTwo(){
  background(255, 255, 153);
  text("Level 2", width/2, height-20);
  var distToBall= dist(ballx, bally, mouseX, mouseY);
  if (distToBall <ballSize/2){
    ballx = random(width);
    bally= random(height);
    score= score +1;
  }
  if(score>10){
// call level 3
   gameState = "L3";

  }
  
//  line(ballx, bally, mouseX, mouseY);
noStroke();
  rect(ballx, bally, ballSize+20, ballSize+20);
  fill(204, 204, 255);
  
  //emojis
  textSize(40);
  text("🕷️", mouseX, mouseY) //spider
  
} // end level two

function levelThree(){
    background(102, 255, 204);
  text("Level 3", width/2, height-20);
  var distToBall= dist(ballx, bally, mouseX, mouseY);
  if (distToBall <ballSize/2){
    ballx = random(width);
    bally= random(height);
    ballSize=ballSize -1;
    score= score +1;
  }
  if(score>15){
// call level 4
  gameState = "L4";
   

  }
  
//  line(ballx, bally, mouseX, mouseY);
noStroke();
  rect(ballx, bally, ballSize+20, ballSize+20);
  fill(255, 153, 204);
  
  //emojis
  textSize(40);
  text("🕯️️", mouseX, mouseY) //candle
  
} // end level three

function levelFour(){
  background(255, 153, 204);
  text("Level 4", width/2, height-20);
  var distToBall= dist(ballx, bally, mouseX, mouseY);
  if (distToBall <ballSize/2){
    ballx = random(width);
    bally= random(height);
    score= score +1;
  }
  if(score>20){
// call level 5
   gameState = "L5";

  }
  
//  line(ballx, bally, mouseX, mouseY);
noStroke();
  rect(ballx, bally, ballSize+20, ballSize+20);
  fill(102, 255, 204);
  
  //emojis
  textSize(40);
  text("🪼", mouseX, mouseY) //jellyfish
  
} // end level four

function levelFive(){
  background(255, 153, 204);
  text("Level 5", width/2, height-20);
  var distToBall= dist(ballx, bally, mouseX, mouseY);
  if (distToBall <ballSize/2){
    ballx = random(width);
    bally= random(height);
    score= score +1;
  }
  if(score>25){
// call level 6
   gameState = "L6";

  }
  
//  line(ballx, bally, mouseX, mouseY);
noStroke();
  rect(ballx, bally, ballSize+20, ballSize+20);
  fill(255, 77, 166);
  
   //emojis
  textSize(40);
  text("🩻", mouseX, mouseY) //xray
  
} // end level five

function levelSix(){
  background(255, 153, 204);
  text("Level 6", width/2, height-20);
  var distToBall= dist(ballx, bally, mouseX, mouseY);
  if (distToBall <ballSize/2){
    ballx = random(width);
    bally= random(height);
    score= score +1;
  }
  if(score>30){
// call level 7
   gameState = "L7";

  }
  
//  line(ballx, bally, mouseX, mouseY);
noStroke();
  rect(ballx, bally, ballSize+20, ballSize+20);
  fill(255, 102, 179);
  
   //emojis
  textSize(40);
  text("🪴", mouseX, mouseY) //plant pot
  
} // end level six

function levelSeven(){
  background(255, 153, 204);
  text("Level 7", width/2, height-20);
  var distToBall= dist(ballx, bally, mouseX, mouseY);
  if (distToBall <ballSize/2){
    ballx = random(width);
    bally= random(height);
    score= score +1;
  }
  if(score>35){
// call level 8
   gameState = "L8";

  }
  
//  line(ballx, bally, mouseX, mouseY);
noStroke();
  rect(ballx, bally, ballSize+20, ballSize+20);
  fill(255, 128, 191);
  
   //emojis
  textSize(40);
  text("🦕", mouseX, mouseY) //dino
  
} // end level seven

function levelEight(){
  background(255, 153, 204);
  text("Level 8", width/2, height-20);
  var distToBall= dist(ballx, bally, mouseX, mouseY);
  if (distToBall <ballSize/2){
    ballx = random(width);
    bally= random(height);
    score= score +1;
  }
  if(score>40){
// call level 9
   gameState = "L9";

  }
  
//  line(ballx, bally, mouseX, mouseY);
noStroke();
  rect(ballx, bally, ballSize+20, ballSize+20);
  fill(255, 179, 218);
  
   //emojis
  textSize(40);
  text("🚩", mouseX, mouseY) //flag
  
} // end level eight

function levelNine(){
  background(255, 153, 204);
  text("Level 9!", width/2, height-20);
  var distToBall= dist(ballx, bally, mouseX, mouseY);
  if (distToBall <ballSize/2){
    ballx = random(width);
    bally= random(height);
    score= score +1;
  }
  if(score>41){
// call win
   gameState = "win";

  }
  
//  line(ballx, bally, mouseX, mouseY);
noStroke();
  rect(ballx, bally, ballSize+50, ballSize+50);
  fill(255, 153, 204);
  
   //emojis
  textSize(41);
  text("🧌", mouseX, mouseY) //troll
  
} // end level nine

function win(){
  background(77, 0, 38)
  text("You Won!", width/2, height-20);
  
   //emojis
  textSize(60);
  text("🩵", mouseX, mouseY) //heart
  
} //end win

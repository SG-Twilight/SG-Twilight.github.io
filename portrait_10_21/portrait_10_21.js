function setup() {
createCanvas(700, 700);
background(204);
}
function draw() {
background(199, 207, 235);

//hair wave
  fill(128, 85, 0);
 strokeWeight(1);
 stroke(128, 85, 0);
 beginShape();
 vertex(230,200);
 bezierVertex(230, 200, 220, 290, 230, 260);
  bezierVertex(230, 260, 240, 290, 230, 320);
  bezierVertex(230, 320, 220, 350, 230, 380);
  bezierVertex(240, 380, 350, 400, 490, 380);
  bezierVertex(550, 380, 480, 350, 470, 320);
  bezierVertex(480, 320, 460, 290, 470, 260);
  bezierVertex(480, 350, 480, 350, 470, 200);
  endShape(close);
  
  //top of hair
  stroke(128, 85, 0);
  fill(128, 85, 0);
  arc(350, 200, 241, 250, -PI, 0);
  
  //head
  noStroke();
  fill(234, 219, 200)
  circle(350,200,180);
  
  //bangs
  fill(128, 85, 0);
  strokeWeight(1);
  stroke(128, 85, 0);
 
  //lower left bang
  beginShape(); 
  vertex(220, 265); 
  bezierVertex(320, 265, 265, 165, 260, 140);
  endShape();
  
  //upper left bang
  beginShape(); 
  vertex(220, 200); 
  bezierVertex(320, 265, 265, 165, 260, 140);
  endShape();
  
  noStroke();
  
  //neck
  fill(234, 219, 200); 
  quad(330, 210, 370, 210, 380, 370, 320, 370);
  
  //body
  fill(128, 26, 0);
  quad(360, 360, 350, 364, 510, 430, 190, 430);
  rect(190, 430, 320, 60);
  rect(320, 364, 60, 60);
 
 //mouth
 fill(255, 128, 149);
  arc(350, 250, 50, 20, 0, PI);
  
  //pupils
 fill(0,0,0)
ellipse(320, 180, 20, 30);
ellipse(395, 180, 20, 30);

  //eye whites
  let c = color(255, 255, 255);
   c.setAlpha(150);
   fill(c);
   ellipse(310, 180, 55, 40, 15, 15, 15, 15);
   ellipse(390, 180, 55, 40, 15, 15, 15, 15);
   
   //earrings
  fill(0,0,0)
  stroke(179, 179, 179)
  strokeWeight(2);
  //left
  circle(270, 250, 15, 120, 385, 200);
  //right
  circle(430, 250, 15, 120, 385, 200)
  
  //nose
  fill(224, 207, 184); 
  stroke(216, 195, 166)
  circle(350, 220, 15, 120, 385, 200);
  
  }

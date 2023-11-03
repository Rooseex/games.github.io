function setup() {
  canvas = createCanvas(450,450);
  background('orange');
  canvas.parent('processing');
  noLoop();
}

function draw() {
  noStroke();
   fill('darkred');
  triangle(450, 450, 225, 0, 0, 450);
  noStroke();
   fill('darkred');
  triangle(0, 0, 225, 450, 450, 0);
  noStroke();
  fill('pink');
 triangle(450, 450, 0, 225, 450, 0);
 noStroke();
  fill('purple');
 triangle(0, 0, 450, 225, 0, 450);
  
  //strokeWeight(5);
  //stroke('pink');
  //fill('darkred');
  //beginShape();
  //vertex(225,115);
  //vertex(300,225);
  //vertex(225,335);
  //vertex(0,225);
  //endShape(CLOSE);
}

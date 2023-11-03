var xJOS1 = 75;
var xJOS2 = 175;
var xJOS3 = 275;
var yJOS = 75;
var snelheidJOS = 3;

function setup() {
  canvas = createCanvas(450, 450);
  canvas.parent('processing');
  textFont("Verdana");
  textSize(14);
  frameRate(20);
  fill('black');
}

function draw() {
  background('lavender');
  text("x = " + round(xJOS1), 10, 20);

  // Move the first instance of JOS to the right
  tekenJos(xJOS1, yJOS);
  xJOS1 += snelheidJOS;
  xJOS1 = constrain(xJOS1, 75, width - 75);

  // Move the second instance of JOS to the right
  tekenJos(xJOS2, yJOS);
  xJOS2 += snelheidJOS;
  xJOS2 = constrain(xJOS2, 75, width - 75);

  // Move the third instance of JOS to the right
  tekenJos(xJOS3, yJOS);
  xJOS3 += snelheidJOS;
  xJOS3 = constrain(xJOS3, 75, width - 75);
}



//function draw() {
  //background('lavender');
  //text("x = " + round(xJOS),10,20);
  //tekenJos(xJOS,yJOS);
//}

function tekenJos(x,y) {
  push();
  translate(x,y);
  scale(1); 
  noStroke();
  fill('indianred');
  ellipse(0,0,50);
  fill('slategray');
  ellipse(-7,-10,17);
  ellipse(7,-10,17);
  fill('white');
  ellipse(-7,-8,7,13);
  ellipse(7,-8,7,13);
  fill('orange');
  ellipse(0,3,17);
  stroke('slategray');
  strokeWeight(3);
  fill('white');
  arc(0, 13, 26, 13, 0, PI, CHORD);
  pop();
}
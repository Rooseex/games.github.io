var xPositie = 0;
var yPositie = 30;
var schaal = 0.25;

function setup() {
  canvas = createCanvas(1000,300);
  canvas.parent('processing');
  frameRate(15);
  colorMode(RGB,255,255,255,1);
  background(0,0,75,1);
}

function draw() {
  xPositie += 5; // Verhoog xPositie met 5 bij elke iteratie
  yPositie += 1;
  schaal += 0.05; 
  background(0,0,75,1);
  tekenSter(xPositie,yPositie);
}

function tekenSter(x,y,s) {
  push();
  scale(s);
  strokeWeight(2);
  stroke('white');
  fill('khaki');
  translate(x,y);
  triangle(0,0,80,0,40,65);
  translate(0,40);
  triangle(0,0,80,0,40,-65);
  pop();
}
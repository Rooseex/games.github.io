var p = 100;

function setup() {
  canvas = createCanvas(450,450);
  canvas.parent('processing');
  frameRate(50);

}

function draw() {
  background('snow');
  tekenRechthoek(p);  
  tekenVierkant(p);
  tekenLijnen(p);
  p += 0.5;
  if (p > width) {
    noLoop();
  }
}

function tekenRechthoek(p) {
  push();
  strokeWeight(1);
  stroke('green');
  fill('green');
  rect(50, 50, p, p);
  pop();
}

function tekenVierkant(p) {
  push();
  strokeWeight(1);
  stroke('red');
  fill('red');
  rect(200, 200, p, p);
  pop();
}

function tekenLijnen(p) {
  push();
  strokeWeight(1);
  stroke('grey');
  line(0,p,width,p);
  line(0,height - p,width,height - p);
  pop();
}
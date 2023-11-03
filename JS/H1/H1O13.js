var xJOS;
var yJOS;
var scaleValue = 0.5;

function setup() {
  canvas = createCanvas(450,450);
  canvas.parent('processing');
  textFont("Verdana");
  textSize(14);
}

function draw() {
  background('lavender');
  fill('black');
  text("xJOS: " + round(xJOS) + " (mouseX:" + round(mouseX) + ")",10,20);
  text("yJOS: " + round(yJOS) + " (mouseY:" + round(mouseY) + ")",260,20);
  
  xJOS = constrain(mouseX,100,450);
  
  push();
  scale(scaleValue); // Schaal JOS naar 50% van zijn normale grootte
  translate(xJOS / scaleValue, 225 / scaleValue);

  //scale(1);
  //translate(xJOS,225);

  // in de volgende regels wordt JOS getekend

  push();
  noStroke();
  fill('indianred');
  ellipse(0,0,150);
  fill('slategray');
  ellipse(-20,-30,50);
  ellipse(20,-30,50);
  fill('white');
  ellipse(-20,-25,20,40);
  ellipse(20,-25,20,40);
  fill('orange');
  ellipse(0,10,50);
  stroke('slategray');
  strokeWeight(10);
  fill('white');
  arc(0, 40, 80, 40, 0, PI, CHORD);
  pop();
  // einde tekenen JOS
  
}
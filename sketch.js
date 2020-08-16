var hr, mn, sc;

function setup() {
  createCanvas(500, 500);
  hr = hour();
  angleMode(DEGREES);
  mn = minute();
  angleMode(DEGREES);
  sc = second();
  angleMode(DEGREES);
}

function draw() {
  background(255,255,255); 
  hrAngle = map(hr, 0, 12, 0, 360); 
  push();
  rotate(hrAngle);
  stroke(255, 0, 0);
  strokeWeight(8);
  line(250, 250, 225, 225);
  pop();
  
  mnAngle = map(mn, 0, 60, 0, 360);
  push();
  rotate(mnAngle);
  stroke(0, 255, 0);
  strokeWeight(7);
  line(250, 250, 200, 200);
  pop();

  scAngle = map(sc, 0, 60, 0, 360);
  push();
  rotate(scAngle);
  stroke(0, 0, 250);
  strokeWeight(5);
  line(250, 250, 175, 175);
  pop();
  drawSprites();
}
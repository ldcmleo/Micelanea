var x = 0.01;
var y = 0.0;
var z = 0.0;

var a = 10;
var b = 8/3;
var c = 28;

var points = [];

function setup(){
  var can = createCanvas(800, 600, WEBGL);
  can.parent('canv-cont');
  colorMode(HSB);
  // points.push(createVector(5, 5, 5));
  // console.log(points[0]['x']);
}

function draw() {
  background(0);
  var dt = 0.01;
  var dx = (a * (y - x)) * dt;
  var dy = (x * (c - z) - y ) * dt;
  var dz = ((x * y) - (b * z)) * dt;

  x = x + dx;
  y = y + dy;
  z = z + dz;

  points.push(createVector(x, y, z));

  // console.log(points);

  // translate(0, 0, -80);
  scale(5);
  stroke(255);
  noFill();

  var hu = 0;
  beginShape();
  for(var v in points){
    stroke(hu, 255, 255);
    vertex(points[v]['x'], points[v]['y'], points[v]['z']);

    hu += 0.1;
    if(hu > 255){
      hu = 0;
    }
  }
  endShape();

  // console.log(x, y, z);
}

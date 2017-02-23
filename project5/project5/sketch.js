1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
//Written by Sean, Driven by Hassan
 
var x = 0;
var y = 200;
var diameter = 0; 
var r = 23;
var g = 160;
var b = 135;
 
function setup() {
  createCanvas(600, 400);  
diameter = random(0, 600)
     
}
 
function draw() {
     
  // background
  background(r, g, b);
  // ellipse
  fill(250, 200, 200);
  ellipse(x, y, diameter, diameter);
   
  x = x + 1;
}
 
// Mouse Press changes Ellipse diameter to random size. 
function mousePressed() {
diameter = random(0, 600)
}
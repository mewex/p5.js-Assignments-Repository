/* IAT 806 Spring 2023
 * Mewael Welearegay
 * A1-06 Program: Controls the properties of two shapes with two variables "x" and "y". 
*/
function setup() {
  createCanvas(400, 400);
  x = 80;
  y = 120;
}
function draw() {
  background(220);
  noStroke();
  fill('red');
  ellipse(x,y,100,150);
  fill('green');
  rect(x+38,y+50,200,200);
}
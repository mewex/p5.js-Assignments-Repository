/* IAT 806 Spring 2023
 * Mewael Welearegay
 * A1-05 Program: Controls the position and size of two lines with two variables "x" and "y". 
*/
function setup() {
  createCanvas(400, 400);
  x = 50;
  y = 150;
}
function draw() {
  background('yellow');
  strokeWeight(10);
  stroke('red')
  line(x, y, x+300, y-50);
  line(x+150, y, x+200, y+200);
}
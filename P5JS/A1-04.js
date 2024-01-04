/* IAT 806 Spring 2023
 * Mewael Welearegay
 * A1-04 Program: Two lines forming a shape similar to "^" (caret), and their position is controlled by one variable "x". 
*/
function setup() {
  createCanvas(400, 400);
  x=150
}

function draw() {
  background('white');
  stroke(0,127,255);
  strokeWeight(30);
  line(x,50,x-100,200);
  line(x,50,x+100,200); 
}
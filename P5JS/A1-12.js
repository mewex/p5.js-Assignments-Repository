/* IAT 806 Spring 2023
 * Mewael Welearegay
 * A1-12 Program: Draws three visual elements (triangle, circle and square) that each move in relation to the mouse in a different way. 
*/
function setup() {
  createCanvas(400, 400);
}
function draw() {
  background(255);
  var x = mouseX;
  var y = mouseY;
fill(255, 0, 200);
  ellipse(x, y, 50, 50);
fill(0, 150, 255);
  rect(x, height/2, 50, 50);
fill(255, 150, 0);
  triangle(width/2, y, width/2 + 25, y - 50, width/2 - 25, y - 50);
}
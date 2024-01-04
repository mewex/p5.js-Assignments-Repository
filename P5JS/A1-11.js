/* IAT 806 Spring 2023
 * Mewael Welearegay
 * A1-11 Program: Draws two visual elements (circle and square) that each move in relation to the mouse in a different way. 
*/
function setup() {
  createCanvas(400, 400);
}
function draw() {
  background(255);
  var x = mouseX;
  var y = mouseY;
  noStroke()
  fill(255, 0, 200);
  ellipse(x/2, y*1.5 , 50, 50);
  fill(0, 150, 255);
  rect(x*1.2, y/3 *2, 50, 50);
}

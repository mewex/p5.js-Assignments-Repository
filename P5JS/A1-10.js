/* IAT 806 Spring 2023
 * Mewael Welearegay
 * A1-10 Program: Redoes Assignment 1-05 using mouseX and mouseY as the variables. 
*/
function setup() {
  createCanvas(400, 400);
}
function draw() {
  background('yellow');
  strokeWeight(10);
  stroke('red');
  line(mouseX, mouseY, mouseX + 300, mouseY - 50);
  line(mouseX + 150, mouseY, mouseX + 200, mouseY + 200);
}
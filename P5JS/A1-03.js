/* IAT 806 Spring 2023
 * Mewael Welearegay
 * A1-03 Program: Draws three ellipses: Inspired by Toyota® logo : Toyota® logo is a registered trade mark, and used here in a private non-commercial set-up, under a fair use protocol for educational purposes only.
*/
function setup() {
  createCanvas(400, 400);
}
function draw() {
  background('white');
  noFill()
  strokeWeight(15);
  stroke('red');
  ellipse(180,220,199,135)
  stroke('grey');
  ellipse(180,220,40,110)
  ellipse(180,190,130,48);  
}
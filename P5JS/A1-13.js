/* IAT 806 Spring 2023
 * Mewael Welearegay
 *A1-13 Program: Moves a visual element (circle) across the screen and makes it re-appear in the frame.
*/
let x = 0;
let speed1 = 4;
function setup() {
  createCanvas(400, 400);
}
function draw() {
  background(220);
  ellipse(x, height / 3, 50, 50);
  x += speed1;
  if (x > width) {
    x = 0;
  }
}
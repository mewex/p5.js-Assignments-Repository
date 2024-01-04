/* IAT 806 Spring 2023
 * Mewael Welearegay
 *A1-14 Program: Draw a visual element(ellipse) that moves in relation to the mouse, but moves away from the mouse when the mouse is pressed.
*/
let x, y;
function setup() {
  createCanvas(400, 400);
  x = width / 2;
  y = height / 2;
}
function draw() {
  background(220);
  let speed1 = 4;
  if (mouseIsPressed) {
    speed1 = -4;
  }
  x += (mouseX - x) * 0.05 * speed1;
  y += (mouseY - y) * 0.05 * speed1;
  fill(255, 0, 0);
  ellipse(x, y, 50, 50);
}
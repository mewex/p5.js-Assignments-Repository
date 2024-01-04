/* IAT 806 Spring 2023
 * Mewael Welearegay
 *A1-15 Program: Using if and else, makes the mouse perform different actions when in different parts of the window. 
*/
function setup() {
  createCanvas(400, 400);
}
function draw() {
  background(0); 
  if (mouseX < width/2 & mouseY < height/2) {
    fill(255, 0, 0);
    rect(mouseX, mouseY, 100, 100);
  } else if (mouseX > width/2 & mouseY < height/2) {
    fill(250, 255, 0);
    ellipse(mouseX, mouseY, 100, 100);
  } else if (mouseX < width/2 & mouseY > height/2) {
    fill(200, 0, 255);
    triangle(mouseX, mouseY, mouseX+50, mouseY-100, mouseX-50, mouseY-50);
  } else {
    fill(255, 0, 100);
    ellipse(mouseX+50, mouseY-50, 150, 50);
  }
}
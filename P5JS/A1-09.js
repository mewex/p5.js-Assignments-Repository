/* IAT 806 Spring 2023
 * Mewael Welearegay
 * A1-09 Program: Draws an example of a layered form with two new loops. 
*/
function setup() {
  createCanvas(320, 240);
}
function draw() {
  background(255,300,150)
  noStroke()
  for (let i = 0.5; i < 8; i++) {
    fill(254, 4, 84)
    for (let j = 0.5; j < 6; j++) {
      ellipse(i*40, j*40, 20, 20)
    }
  }
  for (let i = 0.5; i < 6; i++) {
    fill(100, 10, 200)
    for (let j = 0.5; j < 4; j++) {
      rect(i*40+20, j*40+20, 20, 20)
    }
  }
}
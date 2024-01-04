/* IAT 806 Spring 2023
 * Mewael Welearegay
 * A1-07 Program: Creates a simple, regular pattern with six lines. 
*/
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(255);
  stroke(0);
  strokeWeight(5);

  for (let i = 0.5; i < 6; i++) {
    let a = map(i, 0, 6, 0, width-25);
    let b = 100;
    let c = a+25;
    let d = height/2;
    line(a, b, c, d);
  }
}
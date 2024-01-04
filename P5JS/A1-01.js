/*
 * IAT 806 Spring 2023
 * Mewael Welearegay
 * A1-01 Program: Draw three lines.
 * Draws three lines to form a shape that's similar to the Greek letter "pi"
 */
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background('yellow');
  strokeWeight(20);
  stroke('purple');
  line(140,130,140,300);
  line(240,130,240,300);
  strokeWeight(30)
  stroke('red')
  line(110,95,270,95);
}
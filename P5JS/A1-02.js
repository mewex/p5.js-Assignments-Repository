/* IAT 806 Spring 2023
 * Mewael Welearegay
 * A1-02 Program: Draws five lines: Inspired by VVISE Lab website logo.
*/
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(2,114,118);
  stroke('white');
  strokeWeight(5);
  line(60,140,100,260)
  line(105,260,145,140);
  line(195,140,195,260);
  line(245,190,320,140);
  line(245,260,320,210);
}
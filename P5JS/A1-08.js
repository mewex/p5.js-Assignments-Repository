/* IAT 806 Spring 2023
 * Mewael Welearegay
 * A1-08 Program: Programs the pattern from Assignment A1-07 using while(). 
*/
function setup() {
  createCanvas(400, 400);
}
function draw() {
  background(255);
  stroke(0);
  strokeWeight(5);
  let i = 0.5;
  while (i < 6) {
    let a = map(i, 0, 6, 0, width-25);
    let b = 100;
    let c = a+25;
    let d = height/2;
    line(a, b, c, d);
    i += 1;
  }
}
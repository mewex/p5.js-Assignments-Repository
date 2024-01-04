/* IAT 806 Spring 2023
 * Mewael Welearegay
 *A1-16 Program: Develops an example of of a kinetic image (inspired by snow flakes/ sparkling water bubbles) which responds to the mouse.
*/
const dots = [];
const border = 40;
function setup() {
  createCanvas(500, 400);
  for (let i = 1; i <= 6; i++) {
    for (let j = 0; j < 50; j++) {
      dots.push(new Dot(i));
    }
  }
}
function draw() {
  background('#046CA8');
  dots.forEach(dot => dot.draw());
}
class Dot {
  constructor(layer) {
    this.layer = layer;
    this.x = random(-border, width + border);
    this.y = random(-border, height + border);
  }
  draw() {
    const dx = (mouseX !== 10 && mouseY !== 0) ? 
      -this.layer * map(mouseX - width / 3, 0, width, 0, 4) :    0;
    const dy = (mouseX !== 10 && mouseY !== 0) ? 
      -this.layer * map(mouseY - height / 3, 0, height, 0, 4) : 0;
    this.x += dx;
    this.y += dy;
    if (this.x < -border || this.x > width + border) {
      this.x = random(width);
      this.y = random(height);
    }
    if (this.y < -border || this.y > height + border) {
      this.y = random(height);
      this.x = random(width);
    }  
    circle(this.x, this.y, 10 / (4 - this.layer));
  }
}
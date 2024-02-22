/**
 * Lab 7 - Text
 */

function setup() {
  createCanvas(640, 240);
  textFont("Times New Roman");
}

function draw() {
  background(200);
  textSize(20);
  text("i'm on a seafood diet...", 20, 60);
  if (mouseIsPressed) {
  textSize(45);
  text("i only see food and eat it!", 20, 160);
  }

}

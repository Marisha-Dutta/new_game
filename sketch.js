var bg;

function preload() {
  bg = loadImage("background.jpg");
}



function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
}

function draw() {
  background(bg);  
  drawSprites();
}
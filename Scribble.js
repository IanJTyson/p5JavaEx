

var img;
function preload() {
  img = loadImage("Scribble.png"); 
}

function setup () {  
  createCanvas(800, 800);
}

function draw() {
  background(50,50,100);
  rect (30,10,200,10)
  rect (30,100,200,400)
  fill (20,15,60)
  image(img,mouseX,mouseY)
}

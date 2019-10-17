   <html>
   <head>
   <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.6.0/p5.js"></script>
   <script src="sketch.js"></script>
   </head>
   <body>
   </body>
   </html>

var img;
function preload() {
  img = loadImage("Scribble.png"); 
}

function setup () {  
  createCanvas(400, 400);
}

function draw() {
  background(50,50,100);
  rect (30,10,200,10)
  rect (30,100,200,400)
  fill (20,15,60)
  image(img,mouseX,mouseY)
}

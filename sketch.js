var duendeVerde1;


function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  duendeVerde1 = duendeVerde (200,200,50,50);
 
}

function draw() {
  background(255,255,255);  
  drawSprites();
  duendeVerde1.display();
}
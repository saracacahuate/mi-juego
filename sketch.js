const Engine = Matter.Engine;//crea una constante para la biblioteca del motor 
const World= Matter.World;//crea una constante para la bibloteca del mundo
const Bodies = Matter.Bodies;

var engine,world;
var duendeVerde1;


function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  engine = Engine.create();//crea el motor
   world = engine.world;//crea el mundo
  duendeVerde1 = duendeVerde (200,200);
 
}

function draw() {
  background(255,255,255);  
  drawSprites();
  Engine.update(engine);
  duendeVerde1.display();
}
const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
const Constraint = Matter.Constraint
var football,ground;
var goalpost,player;
var launcher;
function preload(){
  player = loadImage("images/pl.png")
}
function setup() {
  createCanvas(1300,600);
 engine = Engine.create()
 world = engine.world
 football = new Football(200,10,10,10)
 ground = new Ground(650,590,1300,10)
 goalpost = new Goalpost(1000,380,400,400)
 launcher = new Launcher(football.body,{x:150,y:500})
}

function draw() {
  background(255,255,255); 
  Engine.update(engine) 
  football.display()
    ground.display()
  goalpost.display()
  image(player,50,320,200,300)
  launcher.display()
  
}
function mouseDragged(){
  Matter.Body.setPosition(football.body,{x:mouseX,y:mouseY})
}
function mouseReleased(){
  launcher.fly()
}
function keyPressed(){
  if(keyCode===32){
    Matter.Body.setPosition(football.body,{x:150,y:500})
    launcher.attach(football.body)
  }
}
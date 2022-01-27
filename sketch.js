
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
var ball ,ball1;
var ground,ground1;

function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  
   var ball_options = 
   {
    restitution: .95,
    frictionAir: 0.01
  }
  var ball_options1 = 
  {
   restitution: .5,
   frictionAir: 0.1
 }
   
   var ground_options =
   {
     isStatic: true
   };

   var ground_options1 =
   {
     isStatic: true
   };
  

  ground = Bodies.rectangle(200,390,400,20,ground_options);
  World.add(world,ground);

  ball = Bodies.circle(100,10,20,ball_options);
  World.add(world,ball);

  ground1 = Bodies.rectangle(325,200,150,20,ground_options1);
  World.add(world,ground1);
 
  ball1 = Bodies.circle(350,10,20,ball_options1);
  World.add(world,ball1);

  
  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background(51);
  Engine.update(engine);
  
  ellipse(ball1.position.x,ball1.position.y,20);
  ellipse(ball.position.x,ball.position.y,20);
  rect(ground1.position.x,ground1.position.y,400,20);
  rect(ground.position.x,ground.position.y,400,20);
 
}


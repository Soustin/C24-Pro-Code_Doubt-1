const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
  createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    paper = new Paper(70, 280, 100);
    box = new Box(245, 265, 10, 70);
    box2 = new Box(300, 265, 10, 70);
    box3 = new Box(272.5, 280, 99, 10);
    ground = new Ground(200, 285, width, 10);

	Engine.run(engine);
  
}


function draw() {
  background(0);
  Engine.update(engine);
  rectMode(CENTER);

  paper.display();
  box.display();
  box2.display();
  box3.display();
  ground.display();
  
  drawSprites();
  keyPressed();
 
}

function keyPressed() {
  if(keyCode = UP_ARROW){

    Matter.Body.applyForce(paper.body, paper.body.position, {x: 83, y: 83});

  }
}
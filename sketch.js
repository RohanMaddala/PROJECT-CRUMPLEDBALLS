const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1520, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	papper = new Papper(75,675)
	
	ground = new Ground(width/2,680,width,10)

	wall1= new wall(600+720, 665, 200,20);

	wall2= new wall(1420, 600, 20,150);

	wall3= new wall(1220, 600, 20,150);

 	Engine.run(engine)
  
}


function draw() {

  Engine.update(engine)	
  rectMode(CENTER);
  background(0);

  papper.display();
  ground.display();
  wall1.display();
  wall2.display();
  wall3.display();

  drawSprites();
}

function keyPressed(){
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(papper.body,papper.body.position,{x:160,y:-160});
	}
}
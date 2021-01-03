
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var chain,bob;

function setup() {
	createCanvas(1000, 10000);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
	bob1=new Bob(320,540,130,0)
	roof=new Roof(700,50,700,50)
	chain1=new Chain(bob1.body,{x:600, y:200})
	
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  
  drawSprites();

  
	bob1.display();
	roof.display();
    chain.display();
  }






const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

var roof1;
var bob1;
var bob2;
var bob3;
var rope1;
var bobDiameter;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	bobDiameter=40;

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	roof1=new Roof(500,100,700,60);
	bob1=new Bob(360,500,130);
	bob2=new Bob(410,500,130);
	bob3=new Bob(460,500,130);
	bob4=new Bob(510,500,130);
	bob5=new Bob(560,500,130);
	rope1=new rope(bob1.body,roof1.body,-140,0);
	rope2=new rope(bob2.body,roof1.body,-90,0);
	rope3=new rope(bob3.body,roof1.body,-45,0);
	rope4=new rope(bob4.body,roof1.body,10,0);
	rope5=new rope(bob5.body,roof1.body,60,0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  

  roof1.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  bob5.display();
  rope5.display();
  drawSprites();
 
}

function keyPressed() {
	 if (keyCode === UP_ARROW) {
		  Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-50,y:-45}); 
		} 
	}




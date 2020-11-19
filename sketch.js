const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var Ball,ground,bin1

function preload()
{
	
}

function setup() {
	createCanvas(1600,700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  ground= new Ground(width/2,670,width,20)
   Ball= new paper(200,450,40) 
   bin1=new dustbin(1200,650)
   
  }
  
 
  
function draw() {
  background("black")
 ground.display();
 Ball.display();
 bin1.display();

}



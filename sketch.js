
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const body=Matter.body

var b1,b2,b3,b4,b5,b6,b7,b8,b9,b10,b11,b12,b13,b14,b15;
var p1;
var ground;
function preload()
{
	
}

function setup() {
	createCanvas(1200, 800);


	engine = Engine.create();
	world = engine.world;
ground=Bodies.rectangle(600,475,1200,10,{isStatic:true})
World.add(world,ground)


	//Create the Bodies Here.
b1=new Box(900,450)
b2=new Box(860,450)
b3=new Box(820,450)
b4=new Box(940,450)
b5=new Box(980,450)
b6=new Box(940,410)
b7=new Box(860,410)
b8=new Box(820,410)
b9=new Box(900,410)
b10=new Box(780,450)
b11=new Box(900,370)
b12=new Box(940,370)
b13=new Box(920,330)
b14=new Box(880,330)
b15=new Box(900,290)
p1=new Bo(200,200)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  rect(ground.position.x,ground.position.y,1200,20)

  b1.display()
b2.display()
b3.display()
b4.display()
b5.display()
b6.display()
b7.display()
b8.display()
b9.display()
b10.display()
/*b11.display()
b12.display()
b13.display()
b14.display()
b15.display()*/
p1.display()
  drawSprites();
 
}





const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
   

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    hammer = new Hammer(400,350,120,35)
    ground = new Ground(400,690,800,10)
    stone = new Stone(520,680,70,70)
    rubber = new Rubber(640,680,20)
    sand = new Sand(590,680,5)
    sand1 = new Sand(400,680,5)
    sand2 = new Sand(395,680,5)
    sand3 = new Sand(390,680,5)
    sand4 = new Sand(200,680,5)
    sand5 = new Sand(195,680,5)
    sand6 = new Sand(190,680,5)
    sand7 = new Sand(50,680,5)
    iron = new Iron(90,680,50,20)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("cyan");
  
  hammer.display()
  ground.display()
  stone.display()
  rubber.display()
  sand.display()
  sand1.display()
  sand2.display()
  sand3.display()
  sand4.display()
  sand5.display()
  sand6.display()
  sand7.display()
  iron.display()

  drawSprites();
}




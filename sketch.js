var paper
var ground
var leftSide
var bottom
var rightSide
var bin

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload(){
  binImage=loadImage("Bin.png")
}

function setup() {
	createCanvas(1000, 600);

	engine = Engine.create();
	world = engine.world;
  paper = new Paper(100,500,50) 
  
  ground = new Ground(500,570,1000,20)

 leftSide=new Dustbin(750,510,20,100)
 bottom=new Dustbin(810,550,100,20)
 rightSide=new Dustbin(870,510,20,100)
 bin=createSprite(810,490,100,120)
 bin.addImage(binImage)
 bin.scale=0.2


	Engine.run(engine);
  
}

   
function draw() {
  rectMode(CENTER);

  background("white");

  Engine.update(engine)

  ground.display()

  paper.display()

  leftSide.display()
  bottom.display()
  rightSide.display()

  drawSprites();
 
}


function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:25,y:-30})
	}
}

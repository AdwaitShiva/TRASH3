
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint

var engine, world, paper1, ground, dustbin1;
function preload(){
  trash=loadImage("dustbingreen.png")
}
function setup() {
    createCanvas(800, 700);
    rectMode(CENTER);

    engine = Engine.create();
    world = engine.world;

    //Create the Bodies Here.
    paper1 = new Paper(100,600, 10);
    ground = new Ground(400,680,800,20);
    dustbin1 = new Dustbin(610,660, 100, 20);
   dustbin2 = new Dustbin(550,670,20,100);
    dustbin3 = new Dustbin(670,620,20,100) 
    launch=new Launcher(paper1.body,{x:150,y:150})
    


    Engine.run(engine);
  
}

function draw() {
  
  rectMode(CENTER);
  
  background(0);
  
  //Engine.update(engine);
    
  paper1.display();

  ground.display();

dustbin2.display()
launch.display()

}

function keyPressed(){
    if (keyCode === UP_ARROW ) {
      Matter.Body.applyForce(paper1.body, paper1.body.position, {x:10,y: -20})
    }
  }


function mouseReleased(){
  launch.fly();
}

function mouseDragged(){
  Body.setPosition(paper1.body,{x:mouseX, y:mouseY})
}
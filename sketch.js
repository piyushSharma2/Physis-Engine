const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
var engine,world;
var object;
var ground;
var ball;
var ball2;


function setup() {
  createCanvas(400,400);
engine=Engine.create()
world=engine.world
/*var objectOption={
  isStatic:true
}
object=Bodies.rectangle(200,200,100,100,objectOption)
World.add(world,object)
console.log(object);
*/
var groundOption={
  isStatic:true
}
ground=Bodies.rectangle(200,400,400,20,groundOption)
World.add(world,ground)

var ballOption={
  restitution:0.2
}
ball=Bodies.circle(200,200,10,ballOption)
World.add(world,ball)

var ball2Option={
  restitution:5
}
ball2=Bodies.circle(300,300,50,ball2Option)
World.add(world,ball2);
}

function draw() {
  background(0); 

  Engine.update(engine)

  rectMode(CENTER);
  //rect(object.position.x,object.position.y,100,100)
  rect(ground.position.x,ground.position.y,400,20)


  ellipseMode(RADIUS);
  fill("red");
  stroke("green");
  strokeWeight(3);
  noStroke();
  ellipse(ball.position.x,ball.position.y,10,10)
  fill("yellow");
  ellipse(ball2.position.x,ball2.position.y,50,50)

}
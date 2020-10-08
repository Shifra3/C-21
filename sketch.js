var movingRectangle,fixedRectangle

function setup() {

  createCanvas(800,400);
  movingRectangle=createSprite(300,200,50,50)
  movingRectangle.shapeColor="green"
  fixedRectangle=createSprite(500,200,50,50)
  fixedRectangle.shapeColor="green"
  movingRectangle.velocityX = +5;
  fixedRectangle.velocityX = -5;
}

function draw() {
  background(255,255,255); 
  //movingRectangle.x=World.mouseX
 // movingRectangle.y=World.mouseY
  
bounceOff(movingRectangle,fixedRectangle)
  drawSprites();
}

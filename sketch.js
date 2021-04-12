var sea,sea_moving
var ship,ship_moving,ship_moving1;

function preload(){
sea_moving=loadAnimation("sea.png")
  ship_moving=loadAnimation("ship-1.png","ship-2.png")
ship_moving1=loadAnimation("ship-3.png","ship-4.png")
}

function setup(){
  createCanvas(400,400);
  sea = createSprite(200,200);
  sea.addAnimation("moving",sea_moving) 
  sea.scale=0.3;
  sea.velocityX=-2;

  ship=createSprite(200,200);
  ship.addAnimation("moving",ship_moving) 
  ship.scale=0.3;
  



}

function draw() {
  background("blue");
 console.log(sea.x)
 if (sea.x<0) {
   sea.x=200;
 } 
  if (keyDown("space")){
     ship.addAnimation("moving",ship_moving1);
    
  }
  
  drawSprites()
}
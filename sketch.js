var fixedRect;
var movingRect;



function setup() {
  createCanvas(1200,800);

  fixedRect = createSprite(200, 100, 50, 50);
 
  
 object1=createSprite(300,300,23,20);
 object1.velocityY=4;

 object2=createSprite(350,350,30,30);
 object2.velocityY=-4;

  movingRect = createSprite(200,200,40,10);
 
  
}

function draw() {
  background(0);  

  
  

   movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;



  if(isTouching(movingRect,object1)){
    object1.shapeColor="red";
    movingRect.shapeColor="blue";
  }else{
    object1.shapeColor="green";
    movingRect.shapeColor="green";
  }

  bounceOff(object1,object2);
  drawSprites();
}


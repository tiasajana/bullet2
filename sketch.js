var wall1,wall2,wall3,wall4,car,border1,border2,border3;
var speed,weight;



function setup() {
  createCanvas(800,400);

  border1=createSprite(200,100,800,10);
  border2=createSprite(200,200,800,10);
  border3=createSprite(200,300,800,10);

  wall1=createSprite(490,50,10,50);
  wall2=createSprite(490,150,10,50);
  wall3=createSprite(490,250,10,50);
  wall4=createSprite(490,350,10,50);

  car1=createSprite(475,50,20,20);
  car1.velocity.x=-3;
  
  car2=createSprite(475,150,20,20);
  car2.velocity.x=-3;
  car3=createSprite(475,250,20,20);
  car3.velocity.x=-3;
  car4=createSprite(475,350,20,20);
  car4.velocity.x=-3;
  

  
}

function draw() {
  background("black");

  if(car1.x<30){
    car1.velocityX=3;
  }

  if(car1.x>480){
    car1.velocityX=0;
    car1.shapeColor=color("red");
  }
  
  if(car2.x<30){
    car2.velocityX=4;
  }

  if(car2.x>480){
    car2.velocityX=0;
    car2.shapeColor=color("yellow");
  }
  
  if(car3.x<30){
    car3.velocityX=3;
  }

  if(car3.x>480){
    car3.velocityX=0;
    car3.shapeColor=color("green");
  }

  if(car4.x<30){
    car4.velocityX=3;
  }

  if(car4.x>480){
    car4.velocityX=0;
    car4.shapeColor=color("blue");
  }
  
  
  
  
  

  
  drawSprites();
}

var bullet, wall, speed, weight;
var yb;

function setup() {
  createCanvas(1600,400);
  yb= random(20,83);
  wall=createSprite(1200, 200, yb, height/2);
  bullet=createSprite(50,200,50,50)
  
  speed=random(223,321);
  weight=random(30,52);
  wall.shapeColor="black";
  bullet.velocityX=speed;

}

function draw() {
  background(255,255,255);  

  if(algo1(bullet,wall)){
    bullet.velocityX=0;
    var damage=0.5 * weight * speed* speed/(yb *yb *yb);
    if(damage<10){
      wall.shapeColor="green";
    }
    else{
      wall.shapeColor="red";
    }
  }
  drawSprites();
}

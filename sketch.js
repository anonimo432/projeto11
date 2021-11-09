var runner,piso
var correr,chão
var grama1,grama2
function preload(){
 correr=loadAnimation("Runner-1.png","Runner-2.png")
chão=loadImage("path.png")
}

function setup(){
  createCanvas(400,400);
  grama1=createSprite(50,200,10,400)
  grama2=createSprite(350,200,10,400)
  piso=createSprite(200,200,10,10)
  piso.addImage("ola",chão)
  piso.velocityY=20
 runner=createSprite(200,350,10,10)
runner.addAnimation("pessoa",correr)
runner.scale=0.05
grama1.visible=false
grama2.visible=false

}


function draw() {
  background("Green");
 drawSprites()
runner.x=mouseX
runner.collide(grama1)
runner.collide(grama2)

 if(piso.y>400){
piso.y=height/8
 }
}

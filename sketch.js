var bg,bgImg;
var player, shooterImg, shooter_shooting;
var zombie, zombieImg;

var heart1, heart2, heart3;
var heart1Img, heart2Img, heart3Img;

var zombieGroup;



function preload(){
  bgImg = loadImage('bg.jpeg')
  shooterImg = loadImage('shooter_2.png')
  shooter_shooting = loadImage('shooter_3.png')
  zombieImg = loadImage('zombie.png')


}

function setup() {
  createCanvas(windowWidth,windowHeight);

  //adding the background image
  bg = createSprite(displayWidth/2-20,displayHeight/2-40,20,20)
bg.addImage(bgImg)
bg.scale = 1.1
  

player = createSprite(displayWidth-1150, displayHeight-300, 50, 50);
player. addImage(shooterImg)
player.scale =0.3

zombieGroup = new Group()


}
  function draw(){
    background(0) 

if(keyDown('up_arrow')){
  player.y = player.y - 30
}

if(keyDown('down_arrow')){
  player.y = player.y + 30
}
if(keyWentDown('space')){
  player.addImage(shooter_shooting)
}

else if(keyWentUp("space")){
  player.addImage(shooterImg)
}




 enemy();
drawSprites();
}



//creating function to spawn zombies
function enemy(){
  if(frameCount%50===0){

    zombie = createSprite(random(500,1100),random(100,500),40,40);
zombie. addImage(zombieImg)
zombie.scale =0.2
zombie.velocityX = -3
zombieGroup.add(zombie)
  }
  }



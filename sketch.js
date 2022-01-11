var robot
var plasma

function preload(){
  robotImg = loadImage("Robot.png")
  backgroundImg = loadImage("BgImg.jpg")
}

function setup() {
  canvas = createCanvas(850, 400);
  bg = createSprite(450,200)
  bg.addImage(backgroundImg)
  //plasma = createSprite(5,5,20,20)
  robot = createSprite(250, 200)
  robot.addImage(robotImg)
  robot.scale = 0.2
}

function draw() {
  background(backgroundImg);

  move()
  shoot()
  spawnPlasma()
  if(keyDown("space")){
    plasma.velocityX = 10
  }
  else{
    plasma.x = robot.x
  }

  drawSprites()
  
}

function shoot(){

}

function move() {
  if (keyDown("w")) {
    robot.y -= 5
  }
  if (keyDown("s")) {
    robot.y += 5
  }
  if (keyDown("a")) {
    robot.x -= 5
  }
  if (keyDown("d")) {
    robot.x += 5
  }

}

function spawnPlasma(){
if (frameCount % 60 === 0) {
   plasma = createSprite(5,5,20,20)
  // plasma.y = robot.y
  //plasma.addImage(cloudImage);
   //assign lifetime to the variable
  plasma.lifetime = 200;
  //add each cloud to the group
  //cloudsGroup.add(cloud);
}
}
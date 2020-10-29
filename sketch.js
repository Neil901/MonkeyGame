var monkey, monkey_running
var banana, bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score = 0
var ground

function preload() {


  monkey_running = loadAnimation("sprite_0.png", "sprite_1.png", "sprite_2.png", "sprite_3.png", "sprite_4.png", "sprite_5.png", "sprite_6.png", "sprite_7.png", "sprite_8.png")

  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");

}



function setup() {
  createCanvas(400, 400);
  monkey = createSprite(80, 315, 20, 20);
  monkey.addAnimation("moving", monkey_running);
  monkey.scale = 0.1;
  ground = createSprite(200, 350, 400, 10);
  FoodGroup = new Group();

}


function draw() {
  background(250);
  textSize(25)
  text("Survival Time: " + score, 150, 80);
  monkey.collide(ground);
  if (keyDown("space") && monkey.y > 275) {
    monkey.velocityY = -12;
  }
  monkey.velocityY = monkey.velocityY + 0.8;
if (FoodGroup.isTouching (monkey))
  {
    score = score+1;
    FoodGroup.destroyEach();
  }
  
  
  bananaSpawn();
  obstacleSpawn();
  drawSprites();
}

function bananaSpawn() {
  if (frameCount % 40 == 0) {
    var rand = Math.round(random(180, 260))
    banana = createSprite(400, rand, 10, 10);
    banana.addImage(bananaImage);
    banana.velocityX = -5;
    banana.scale = 0.1;
    banana.lifetime = 100;
    FoodGroup.add (banana);
  }


}

function obstacleSpawn() {
  if (frameCount % 80 == 0) {
    obstacle = createSprite(400, 315, 10, 10);
    obstacle.addImage(obstacleImage)
    obstacle.velocityX = -5;
    obstacle.scale = 0.2
    obstacle.lifetime = 100
  }
}
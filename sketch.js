var child,fruit,animal,weapon,pFruit;
var child_running,animal_running;
var fruitImage,pFruitImage;
var weaponImage;
var ground;
var groundImage;


function preload(){

child_running = loadAnimation("Images/g1.jpg","Images/g2.jpg","Images/g3.jpg","Images/g4.jpg","Images/g5.jpg",
"Images/g6.jpg","Images/g7.jpg","Images/g8.jpg","Images/g9.jpg");

animal_running = loadAnimation("Images/b1.jpg","Images/b2.jpg","Images/b3.jpg",
"Images/b5.jpg","Images/b6.jpg");

fruitImage = loadImage("Images/f1.jpg");

pFruitImage = loadImage("Images/Pf1.jpg");

weaponImage = loadImage("Images/weapon.png");

groundImage = loadImage("Images/background.png");
}

function setup() {
  createCanvas(1200,800);

ground = createSprite(0,0,0,0);
ground.addImage("ground",groundImage);

ground.velocityX = -3;


child = createSprite(200,675);
child.addAnimation("running",child_running);
child.scale = 0.2;

animal = createSprite(20,650);
animal.addAnimation("animal_running",animal_running);
animal.scale = 0.2;


}

function draw() {
  background(255);
  if(ground.x<0){
    ground.x = ground.width/2;
  }

  spawnFruits();
  spawnWeapon();
  spawnpFruit();
  drawSprites();
}

function spawnFruits(){
  if(frameCount%150 === 0){
    fruit = createSprite(1200,600,10,10);
    fruit.addImage(fruitImage);
    fruit.scale = 0.2;
    fruit.velocityX = -2;
    fruit.lifetime = 600;
  }
}

function spawnWeapon(){
  if(frameCount%200 === 0){
    weapon = createSprite(1200,550,15,15);
    weapon.addImage(weaponImage);
    weapon.scale = 0.2;
    weapon.velocityX = -4;
    weapon.lifetime = 300;
  }
}

function spawnpFruit(){
  if(frameCount%250 === 0){
  pFruit = createSprite(1200,600,10,10);
  pFruit.addImage(pFruitImage);
  pFruit.scale = 0.3;
  pFruit.velocityX = -2;
  pFruit.lifetime = 600;

}
}
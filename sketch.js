var garden,rabbit,apple,orangeL,redL;
var gardenImg,rabbitImg,carrotImg,orangeImg,redImg;


function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  orangeImg = loadImage("orangeLeaf.png");
  redImg = loadImage("redImage.png");
}


function setup(){
  
  createCanvas(400,400);
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);


//creating boy running
rabbit = createSprite(160,340,20,20);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}

function draw() {
  background(0);
  
  // boy moving on Xaxis with mouse'
  rabbit.x=World.mouseX;
  
  edges= createEdgeSprites();
  rabbit.collide(edges);


   createApples();
   createOrange();
   createRed();
   drawSprites();

}

function createApples() {
 
  if (frameCount % 80 === 0){
    var apple = createSprite(400,165,10,40);
    apple.velocityY = 3;
  }
apple = createSprite(random(50, 350),40, 10, 10);
apple.addImage(appleImg);
apple.scale=0.07;
apple.velocityY = 3;
apple.lifetime = 10;
  
}

function createOrange() {
 
  if (frameCount % 80 === 0){
    var orangeL = createSprite(400,165,10,40);
    orangeL.velocityY = 3;
  }
orangeL = createSprite(random(50, 350),40, 10, 10);
orangeL.addImage(orangeImg);
orangeL.scale=0.08;
orangeL.velocityY = 3;
orangeL.lifetime = 10;
}

function createRed() {

  if (frameCount % 80 === 0){
    var a
    redL = createSprite(400,165,10,40);
    redL.velocityY = 3;
  }
redL = createSprite(random(50, 350),40, 10, 10);
redL.addImage(redImg);
redL.scale=0.06;
  redL.velocityY = 3;
  redL.lifetime = 1
  0;
}

var backgroundImage , backgroundsp;
var spaceshipImage , spaceship;
var gameState = "play";
var cometImage , comet;
var cometGroup ;

function preload(){
  backgroundImage = loadImage("./Assets/Spacebackground.jpg");
  spaceshipImage = loadImage("./Assets/spaceship.png");
  cometImage = loadImage("./Assets/comet.png");
}

function setup() {
  
  canvas = createCanvas(windowWidth  , windowHeight );
  backgroundsp = createSprite( width/2 , height/2 );
  backgroundsp.addImage("space",backgroundImage);
  backgroundsp.scale = 1.6;
  backgroundsp.velocityY = 2 ;
  
  spaceship = createSprite( width/2 , height - 100);
  spaceship.addImage("spaceship",spaceshipImage);
  spaceship.scale = 0.4 ;
  
  cometGroup=new Group();

}

function draw() {
  background(backgroundImage);
  
  if(gameState === "play" ){
    if(backgroundsp.y>height){
      backgroundsp.y = height/2
    }
  
    if(keyDown("left")){
      spaceship.x = spaceship.x-5;
    }
  
    if(keyDown("right")){
      spaceship.x = spaceship.x+5;
    }
  
    if(keyDown("up")){
      spaceship.y = spaceship.y-5;
    }
  
    if(keyDown("down")){
      spaceship.y = spaceship.y+5;
    }
    spawnComet();
  
  
  }
  
  drawSprites();
}


function spawnComet(){
  if(frameCount % 100 == 0 ){
    comet = createSprite( random( 90 , width-70) , 0 );
    comet.addImage("comet",cometImage);
    comet.velocityY = 3;
    comet.scale = 0.1;
    cometGroup.add(comet);
  }
  
}
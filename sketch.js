

var MarioSound,ThankYou;
var button,box;
var bg,play,play2,bg2,bg3,bg4,bg5,bg6;
var Like1,dislike1,neutral1,ground
var gameState = 0 ;
function preload()
{
play       = loadSound("Music/Music.mp3");
MarioSound = loadSound("Mario/Mario Sound.mp3");
play2      = loadSound("Music2/Music2.mp3");
Mario      = loadImage("images/Mario.png")
ThankYou   = loadSound("Music/Thank You last.mp3");
bg         = loadImage("images/cool-backgrounds.png");
bg2        = loadImage("images/images.png");
bg3        = loadImage("images/Hoop.png");
bg4        = loadImage("images/mariolvl2.png")
bg5        = loadImage("images/mariolvl3.png")
bg6        = loadImage("images/WhiteHatJr.png");
}

function setup() {
  createCanvas(900,600);

//Create the Bodies Here.


buttons   = new Buttons;
mario     = createSprite(200,355,1,1)
mario.visible = false
like1     = createSprite(300,350,1,1)
disike1   = createSprite(450,350,1,1)
neutral1  = createSprite(580,350,1,1)
ground    = createSprite(500,410,1000000,1)
//Play music in Starting
play.play();
 
}
function draw() {

  rectMode(CENTER);
mario.collide(ground);
 mario.collide(like1);
 //mario.collide(dislike1);
 // mario.collide(neutral1);




  if(gameState===0){ 
    
    background(bg);
    buttons.display();
  }

  if(gameState===1){
    background(bg2);
   
  }
  if(gameState===2){
    background(bg3);
   
  }
  if(gameState===3){
    background(bg4);
   
  }
  if(gameState===4){
    background(bg5);
    
  }
  if(gameState===5){
    ground.visible=false
    
    background(bg6);
    }
  }
  

  if(gameState!==0 && gameState!==5){
    mario.visible = true
    if(keyDown("A")){
      mario.x = mario.x-10
    }
    if(keyDown("W")){
      mario.x = mario.x+10
    }
   
  }

  if(mario.isTouching(like1)){
    if(keyDown("S")){
      mario.visible = false;
    }
  }

drawSprites();

 function keyPressed(){
  if(keyCode==32){
    mario.velocityY = -10
    
  } 
  mario.velocityY = mario.velocityY + 0.8
}


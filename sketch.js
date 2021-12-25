var grid = 50;
var width = 1366;
var carGroup1,logGroup1;
var grassHeight = 100;
var gameState = "play";
var carAnimation, logAnimation, playerAnimation;
var school,player,cars;
function preload()
{
 
}

function setup() {
  createCanvas(1366,700);
  carGroup1 = new Group();
  logGroup1 = new Group();

  player = new Player(width/2,height-25);

  if(i%2===0)
  {
    var road= createSprite(683,height-150-(i*400)-grassHeight,width,300);
    road.shapeColor="black";
  }
  
  for(var i = 0;i<40;i++)
  {
    cars= new Car(2);
    carGroup1.add(cars.spt);
  }
  for(var i = 0;i<40;i++)
  {
    log= new Log(-2);
    logGroup1.add(log.spt);
  }
 
  for(var i=0;i<6;i++)
  {
    var bottomGrass1= createSprite(683,height-50-(i*400),width,grassHeight);

    if(i%2===0)
    {
      var road= createSprite(683,height-150-(i*400)-grassHeight,width,300);
      road.shapeColor="black";
    }
   
  bottomGrass1.shapeColor="green";
 }
}

function draw() {
  background("skyblue");
  translate(0,-player.spt.y+height-150);

  for(i=1;i<logGroup1.length;i++)
  {
    if(logGroup1.i<0){
      logGroup1.x=width;
    }
  }
  for(i=1;carGroup1.lenght;i++)
  {
    if(carGroup1.i<0){
      carGroup1.x=width;
    }
   if(carGroup1.x=width){
    carGroup1.x<0;
   }
  }
  drawSprites();
}

function keyPressed(){
  if(keyCode == UP_ARROW){
    player.move(0,-2);
  }
  if(keyCode == DOWN_ARROW){
    player.move(0,2);
  }
  if(keyCode == LEFT_ARROW){
    player.move(-2,0);
  }
  if(keyCode == RIGHT_ARROW){
    player.move(2,0);
  }
}

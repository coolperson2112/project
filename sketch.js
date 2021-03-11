

function preload(){
balloon = loadImage("Hot Air Ballon-02.png")
background1 = loadImage("Hot Air Ballon-01.png")
}
function setup() {
  createCanvas(800,400);
ball = createSprite(400, 200, 50, 50);
ball.addImage(balloon)
ball.scale = 0.6
database = firebase.database()

var boxPosition = database.ref("box/position")
boxPosition.on("value", readPosition,showError)
}

function readPosition(data){
  console.log(data)
  position = data.val()
  ball.x = position.x
  ball.y = position.y
}

function showError(error){
  console.log(error)
}

function draw() {
  background(background1);  
  if(keyDown(LEFT_ARROW)){
    changePosition(-1,0);
}
else if(keyDown(RIGHT_ARROW)){
    changePosition(1,0);
}
else if(keyDown(UP_ARROW)){
    changePosition(0,-1);
}
else if(keyDown(DOWN_ARROW)){
    changePosition(0,+1);
}
  drawSprites();
}

function changePosition(x,y){
  ball.x = ball.x + x;
  ball.y = ball.y + y;
  database.ref("box/position").set({x:position.x+x,y:position.y+y})

  
}
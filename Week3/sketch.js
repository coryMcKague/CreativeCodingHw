var playerX = 400;
var playerY = 400;

var w = 87; 
var s = 83;
var a = 65;
var d = 68;

var obstacleX = 50;
var obstacleY = 100;
var obstacletXspeed;
var obstacleYspeed;

var obstacle2X = 300;
var obstacle2Y = 100;
var obstaclet2Xspeed;
var obstacle2Yspeed;

var objectX;
var objectY;

function setup() {
  createCanvas(800, 600);
    obstacleXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    obstacleYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    obstacle2XSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    obstacle2YSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    createPlayer(50,50);
}

function draw() {
  background(50,100,0);
  
  createBorders (20,30,0);
  
  createFinish();
  
  createWin();
  
  drawObstacle();
  obstacleMovement();
  
  drawObstacle2();
  obstacle2Movement();
  
  drawPlayer();
  playerMovement();
  
  drawObject ();
  
  
}


function drawObstacle ()
{
  fill(100,1,1);
  circle(obstacleX, obstacleY, 25);
}

function obstacleMovement ()
{
    obstacleXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    obstacleYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);

    obstacleX += obstacleXSpeed;
    obstacleY += obstacleYSpeed;

  if(obstacleX > width)
    {
        obstacleX = 0;
    }
    if(obstacleX < 0)
    {
        obstacleX = width;
    }
    if(obstacleY > height)
    {
        obstacleY = 0;
    }
    if(obstacleY < 0)
    {
        obstacleY = height;
    }
}

function drawObstacle2 ()
{
  fill(180,20,50);
  circle(obstacle2X, obstacle2Y, 100);
}

function obstacle2Movement ()
{
  obstacle2XSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
  obstacle2YSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);

  obstacle2X += obstacle2XSpeed;
  obstacle2Y += obstacle2YSpeed;

  if(obstacle2X > width)
    {
        obstacle2X = 0;
    }
    if(obstacle2X < 0)
    {
        obstacle2X = width;
    }
    if(obstacle2Y > height)
    {
        obstacle2Y = 0;
    }
    if(obstacle2Y < 0)
    {
        obstacle2Y = height;
    }
}

function playerMovement ()
{
  if(keyIsDown(w))
    {
        playerY -= 10;   
    }
    if(keyIsDown(s))
    {
        playerY += 10;   
    }
    if(keyIsDown(a))
    {
        playerX -= 10;   
        console.log("movement: " + playerX);
    }
    if(keyIsDown(d))
    {
        playerX += 10;   
    }
}

function createPlayer (x,y)
{
  playerX = x;
  playerY = y;
  console.log(playerX);
}

function drawPlayer ()
{
  fill(200, 30, 200);
  circle(playerX,playerY, 50)
}

function createBorders (thickness)
{
  rect(0,0,width-110,thickness);
  
  rect(0,0,thickness,height);
    
  rect(0, height-thickness,width,thickness);
    
  rect(width-thickness,0,thickness,height);
}

function createFinish ()
{
  textSize(25);
  text("FINISH", width-110,height/2-250)
}

function createWin ()
{
   if(playerX > width && playerY > width/2-550)
    {
      fill(400);
      stroke(5);
      textSize(26);
      text("You Win! :D", width/2-50, height/2-50);
    }
}

function mouseClicked()
{
  objectX = mouseX;
  objectY = mouseY; 
}

function drawObject ()
{
  fill(400,20,50);
  circle(objectX, objectY,75);
}
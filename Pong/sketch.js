//ball var
let ballNormalColor = [255, 255, 255];
let ballHitColor = [255, 0, 0];
let xBall = 300;
let yBall = 200;
let dBall = 30;
let rBall = dBall / 2;
//ball speed var
let ballSpeed = 10;
let xBallSpeed = ballSpeed;
let yBallSpeed = ballSpeed;
//Racket
//racket var
let xRacket = 5
let yRacket = 150;
let wRacket = 10;
let hRacket = 90;
//racket2 var
let xtRacket = 585
let ytRacket = 150;
let wtRacket = 10;
let htRacket = 90;
//racketspeed
let racketSpeed = 10;
//points
let yPoints = 0;
let oPoints = 0;
//sound variables
let trilha;
let raquetada;
let ponto;



function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  //ball
  showBall();
  moveBall();  
  //collision
  verifyCollision(); 
  //racket
  showRacket();
  controlRacket();
  racketCordinates();
  //points
  showPoints();
  addPoints();
  //racketBallCollision();
  collideByLibrary();
  noBallStuck();
  opracket();
  
}

///////PRELOAD FUNCTION (img, sound)
function preload(){
  raquetada = loadSound("raquetada.mp3");
  ponto = loadSound("ponto.mp3");  
}

////////p5collidelibrary
function collideByLibrary() {
  let hit = false;
  let thit = false;
  
  
  hit = collideRectCircle(xRacket, yRacket, wRacket, hRacket,     xBall, yBall, rBall);
  thit = collideRectCircle(xtRacket, ytRacket, wtRacket, htRacket, xBall, yBall, rBall);
  
  if(hit){
    xBallSpeed *= -1;
    ballNormalColor = ballHitColor; 
    raquetada.play();
  }
  else{
    ballNormalColor = 255
  }
  if(thit){
    xBallSpeed *= -1;
    ballNormalColor = ballHitColor;
    raquetada.play();
  }
}

////////BALL
function showBall() {
  circle(xBall, yBall, dBall);
  colorMode(RGB);
  fill(ballNormalColor);
}
function moveBall() {
    
  xBall += xBallSpeed;
  yBall += yBallSpeed;
}
function verifyCollision() {

  if(xBall + rBall >= width || xBall - rBall <= 0){
    xBallSpeed *= -1;
  }
  if(yBall + rBall >= height || yBall - rBall <= 0){
    yBallSpeed *=-1;
  }
}
//ballstuck fix
function noBallStuck() {
  if(xBall - rBall <= 0){
    xBall = 35;
  }
  if(xBall + rBall >= 600) {
    xBall = 570;
  }

}

///////RACKET FUNCTIONS
//oponnent racket collision and auto follow
function opracket(){
  ytRacket = yBall - htRacket / 2;
}
function showRacket() {
  rect(xRacket, yRacket, wRacket, hRacket);
  rect(xtRacket, ytRacket, wtRacket, htRacket);
}
function controlRacket() {
  if(keyIsDown(87)) {
    yRacket -= racketSpeed;
  }
  if(keyIsDown(83)) {
    yRacket += racketSpeed;
  }
//racket2
  if(keyIsDown(38)) {
    ytRacket -= racketSpeed;
  }
  if(keyIsDown(40)) {
    ytRacket += racketSpeed;
  }
  
  yRacket = constrain(yRacket, 0, 310);
  ytRacket = constrain (ytRacket, 0, 310);
}
function racketCordinates() {
  if(keyIsDown(70)) {
    text(yRacket, 20, 20);
    fill(255);
  }
}
function racketBallCollision() {
  if (xBall - rBall < xRacket - wRacket && yBall - rBall < yRacket + hRacket && yBall + rBall > yRacket){
    xBallSpeed *= -1;
  }
}

///////POINTS FUNCTION
function showPoints() {
  fill(255)
  textSize(18);
  text(yPoints, 200, 20);
  text(oPoints, 400, 20);
}
function addPoints() {
  if(xBall + rBall >= 600){
    yPoints += 1;
    ponto.play();
  }
  if(xBall - rBall <= 0){
    oPoints += 1;
    ponto.play();
  }
}

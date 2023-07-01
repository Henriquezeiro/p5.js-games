//código do ator
let xAtor = 250;
let yAtor = 366;
//colisão
let colisao = false;

let points = 0;

function mostraAtor() {
  image(imagemDoAtor, xAtor, yAtor, 30, 30);
}

function movimentaAtor() {
  if (keyIsDown(87)) {
      yAtor -= 3;
  }
  if (keyIsDown(83)) {
    if (podeSeMover()) {
      yAtor +=3;
    }
  }
}

function podeSeMover(){
  return yAtor < 366;
}

function verificaColisao(){
  for (let i = 0; i < imagemCarros.length; i++){
    colisao = collideRectCircle(xCarros[i], yCarros[i],carrosLargura, carrosAltura, xAtor, yAtor, 10); 
    
    if (colisao){
      print("colidiu");
      retornaAtorAoPontoZero();
    }
  }
}

function retornaAtorAoPontoZero() {
  yAtor = 366;
  efeitoDeColisao();
}
function addPoints() {
  if (yAtor <= 30) {
    yAtor = 366;
    points++;
  }
}

function pontosMaioresQueZero(){
  if (points > 0) {
    points --; 
  }
}

function efeitoDeColisao(){ 
  colorMode(RGB);
  fill(255, 0, 0);
  rect(0, 0, 1000, 1000);
}

function contador(){
  stroke(0);
  strokeWeight(4);
  fill(255);
  textSize(14);
  text(points, 20, 25);
}

function cordinate(){
  //mouseXposition = F key
  if(keyCode == 70){
    text(mouseX, mouseX, mouseY);
  }
  //mouseYposition = G key
  if(keyCode == 71){
    text(mouseY, mouseX, mouseY); 
  }
}
//laços de repetição
function setup() {
  createCanvas(500, 400);
}

function draw() {
  background(imagemDaEstrada); 
  
  //mostrar
  mostraAtor();
  mostraCarro();
  
  //movimentar
  movimentaCarro();
  movimentaAtor();
  voltaPosicaoInicialDoCarro();
  
  //sistema de pontos
  verificaColisao();
  contador();
  addPoints();
  
  //cordenada do mouse pra criar funcionalidades
  cordinate();
}

//código do carro

let yCarros = [40, 95, 150, 210, 270, 318];
let xCarros = [600, 600, 600, 600, 600, 600];
let velocidadeCarros = [3, 5, 6.2, 2.5, 7, 4];

//tamanho dos carros
let tamanhoDosCarros = [60, 40];
let carrosLargura = 60;
let carrosAltura = 40;

function mostraCarro() {
  for (let i = 0; i < imagemCarros.length; i++) {
    image(imagemCarros[i], xCarros[i], yCarros[i], carrosLargura, carrosAltura); 
  }
}

function movimentaCarro() {
  for (let i = 0; i < imagemCarros.length; i++){
    xCarros[i] -= velocidadeCarros[i];
  }
}

function voltaPosicaoInicialDoCarro() {
  for (let i = 0; i < imagemCarros.length; i++) {
    if(passouTodaATela(xCarros[i])) {
      //se todos eles passarem a tela xCarros representa a         lista inteira.  O i ira verificar todos.
      xCarros[i] = 600;
      //ele fara o loop jogando todos os carros pro início
        
      //print("verificando os carros: " + i);
      //carro azul: 0, carro preto: 1, carro amarelo: 2
    } 
  }
}

//verifica se os carros passaram pela tela. Também pede o parâmetro para o loop definir se todos os carros passaram, sem a necessidade de usar uma condição perguntando para cada um se passou.
function passouTodaATela(xCarros) {
  return xCarros < -50;
}





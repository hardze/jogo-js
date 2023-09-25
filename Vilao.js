//Vilões
let xViloes = [600, 600, 600, 600];
let yViloes = [40, 96, 150, 190];
let velocidadeViloes = [2, 2.5, 3.2, 3.8];
let comprimentoVilao = 50;
let alturaVilao = 40;

function mostraVilao(){
  for (let i = 0; i < imagemViloes.length; i++){
  image(imagemViloes[i], xViloes[i], yViloes[i], comprimentoVilao, alturaVilao);
}
}

function movimentaVilao(){
  for (let i = 0; i < imagemViloes.length; i++){
  xViloes[i] -= velocidadeViloes[i];
}
}

function voltaPosicaoInicialDoVilao(){
  for (let i = 0; i < imagemViloes.length; i++){
  if (passouTodaATela(xViloes[i])){
  xViloes[i] = 600;
}
}
}

function passouTodaATela(xVilao){
return xVilao < - 50;
}
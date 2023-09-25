function setup() {
createCanvas(600, 400); 
somDoRio.loop();
}

function draw(){
background(imagemDaSelva); 
mostraPassaro();
mostraVilao();
movimentaVilao();
movimentaPassaro(); 
voltaPosicaoInicialDoVilao(); 
verificaColisao();
incluiPontos();
marcaPonto();
}

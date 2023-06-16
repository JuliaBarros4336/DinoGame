var ponto = 0;
var fundoMaior;
var fundo;
var chao;
var dino;
var pedra;
//determina o que é o chao para quando o dino cair apos o apice do pulo
var solo
// Y = Y - velocidade para subir no pulo e  negativar a velocidade para somar e fazer com que dino desça no pulo e chegue ao solo


/*Importa aquivos e os inseri no jogo*/
function preload(){
    
    fundoMaior = loadImage("IMG/fundo_dino.png")
    fundo = loadImage("IMG/fundoMini_dino.png");
    chao = loadImage("IMG/solo_dino.png");
    dino = loadImage("IMG/dino.png");
    pedra = loadImage("IMG/pedra.png");

}

 /**/
function setup(){
    createCanvas(800,600).parent("jogo");
    
    fundoMaior = new FundoMaior();
    fundo = new Fundo();
    chao = new Chao();
    dino = new Dino();
    pedra = new Pedra();
}   


/**/
function draw(){
    
    fundo.mova();
    fundoMaior.mova();
    chao.mova();
    dino.mova();
    pedra.mova();

    //Texto da Pontuação do Player
textSize(20);
text("Pontuação:" + ponto, 600, 20);

}


//usado para rodar no celular

//function mousepressed
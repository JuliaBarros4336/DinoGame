class Pedra{
    constructor(){
        this.imagem = pedra;
        this.altura = 100;
        this.largura = 100;
        this.posY = 480 ;
        this.posX = 600; 
        this.velocidade = 5;
        //Relação da posY com a medida Inicial do cenário
        this.yInicial = this.posY;
        //Relação da posX com a medida Inicial do cenário
        this.xInicial = this.posX;
        //Relação da posY com a medida Final do cenário
        this.yFinal = this.posY + this.altura;
        //Relação da posX com a medida Final do cenário
        this.xFinal = this.posX + this.largura;

    }
    mova() {
        image(this.imagem, this.posX, this.posY, this.largura, this.altura);
        
        this.posX -= this.velocidade;
        
        if(this.largura <=0){
            pedra = new Pedra();

        }//else{
            
        //}
    }

}
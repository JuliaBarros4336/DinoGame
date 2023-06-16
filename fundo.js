class Fundo{
    constructor(){
        this.imagem = fundo;
        this.altura = 600;
        this.largura = 800;
        this.posY = 0;
        this.posX = 0; 
        this.velocidade = 5;

    }
    mova() {
        image(this.imagem, this.posX, this.posY, this.largura, this.altura);
      
        this.posX -= this.velocidade;
        
        if(fundo.largura <=800){
        
            this.posX - this.velocidade;

        }else{
            fundo = new Fundo();
        }
    }
    
    
}
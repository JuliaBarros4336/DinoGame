class FundoMaior{
    constructor(){
        this.imagem = fundoMaior;
        this.altura = 600;
        this.largura = 1600;
        this.posY = 0;
        this.posX = 0; 
        this.velocidade = 2;

    }
    mova() {
        image(this.imagem, this.posX, this.posY, this.largura, this.altura);
      
        this.posX -= this.velocidade;
        
        if(fundoMaior <=800){
        
            fundoMaior = new FundoMaior();
    }   
         
        
            
        

        
            
            
   
}

}
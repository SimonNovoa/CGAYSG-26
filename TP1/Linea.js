class Linea{
  constructor(x1,y1,x2,y2){
    this.x1=x1
    this.y1=y1
    this.x2=x2
    this.y2=y2
    
    this.tam=0.125
    
  }
  dibujar(tam1,tam2,v,o){
    stroke(0)
    strokeWeight(4)
     strokeCap(SQUARE)
    
    if(this.x1==this.x2){
      
      this.mitad = (posicionesy[tam1]+posicionesy[tam2])/2
      
      if(o==1){
        
        if(this.y2<=this.mitad ){
          this.aceleracion= map(this.y2,posicionesy[tam2],this.mitad ,1,v)
        }
         if(this.y2>=this.mitad ){
           this.aceleracion= map(this.y2,this.mitad ,posicionesy[tam1],v,1)
         }
        
        this.y2=this.y2+this.tam*this.aceleracion * velocidad
        
        if(this.y2>=posicionesy[tam1]){
          this.tam=this.tam*-1
          this.y2 = posicionesy[tam1]
        }
        if(this.y2<=posicionesy[tam2]){
          this.tam=this.tam*-1
          this.y2 = posicionesy[tam2]
        }
        
      }
      
      if(o==2){
        
          if(this.y1<=this.mitad ){
          this.aceleracion= map(this.y1,posicionesy[tam2],this.mitad ,1,v)
        }
         if(this.y1>=this.mitad ){
           this.aceleracion= map(this.y1,this.mitad ,posicionesy[tam1],v,1)
         }
        
        this.y1=this.y1+this.tam*this.aceleracion * velocidad
        
        if(this.y1>=posicionesy[tam1]){
          this.tam=this.tam*-1
          this.y1 = posicionesy[tam1]
        }
        if(this.y1<=posicionesy[tam2]){
          this.tam=this.tam*-1
          this.y1 = posicionesy[tam2]
        }
        
      }
      
    }else{            
      
      this.mitad = (posicionesx[tam1]+posicionesx[tam2])/2
      
      if(o==1){
        
        if(this.x2<=this.mitad ){
          this.aceleracion= map(this.x2,posicionesx[tam2],this.mitad ,1,v)
        }
         if(this.x2>=this.mitad ){
           this.aceleracion= map(this.x2,this.mitad ,posicionesx[tam1],v,1)
         }
        
        this.x2=this.x2+this.tam*this.aceleracion * velocidad
        
        if(this.x2>=posicionesx[tam1]){
          this.tam=this.tam*-1
          this.x2 = posicionesx[tam1]
        }
        if(this.x2<=posicionesx[tam2]){
          this.tam=this.tam*-1
          this.x2 = posicionesx[tam2]
        }
      }
      
      if(o==2){
        
        if(this.x1<=this.mitad ){
          this.aceleracion= map(this.x1,posicionesx[tam2],this.mitad ,1,v)
        }
         if(this.x1>=this.mitad ){
           this.aceleracion= map(this.x1,this.mitad ,posicionesx[tam1],v,1)
         }
        
        this.x1=this.x1+this.tam*this.aceleracion * velocidad
        
        if(this.x1>=posicionesx[tam1]){
          this.tam=this.tam*-1
          this.x1 = posicionesx[tam1]
        }
        if(this.x1<=posicionesx[tam2]){
          this.tam=this.tam*-1
          this.x1 = posicionesx[tam2]
        }
      }
    }
    
    line(this.x1,this.y1,this.x2,this.y2)
    //text(this.aceleracion,100,200)
  }
}

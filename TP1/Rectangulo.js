class Rectangulo{
  constructor(x,y,tamx,tamy){
    this.velocidad = 0.125
    
    this.x = x
    this.y = y
    this.tamx = tamx
    this.tamy = tamy
  }
  dibujar(pos1,pos2,v,o){
    noStroke()
    
    if(o==1){
      
      this.mitad = (posicionesx[pos1]+posicionesx[pos2])/2
      if(this.x<=this.mitad ){
        this.aceleracion= map(this.x,posicionesx[pos1],this.mitad ,1,v)
      }
       if(this.x>=this.mitad ){
         this.aceleracion= map(this.x,this.mitad ,posicionesx[pos2],v,1)
       }
      this.x=this.x+this.velocidad*this.aceleracion * velocidad
      
      if(this.x <= posicionesx[pos1]){
        this.x = posicionesx[pos1]
        this.velocidad = this.velocidad * -1
      }
      if(this.x >= posicionesx[pos2]){
        this.x = posicionesx[pos2]
        this.velocidad = this.velocidad * -1
      }
      
    }
    
    if(o==2){
      
      this.mitad = (posicionesy[pos1]+posicionesy[pos2])/2
      if(this.y<=this.mitad ){
        this.aceleracion= map(this.y,posicionesy[pos1],this.mitad ,1,v)
      }
       if(this.y>=this.mitad ){
         this.aceleracion= map(this.y,this.mitad ,posicionesy[pos2],v,1)
       }
      this.y=this.y+this.velocidad*this.aceleracion * velocidad
      
      if(this.y <= posicionesy[pos1]){
        this.y = posicionesy[pos1]
        this.velocidad = this.velocidad * -1
      }
      if(this.y >= posicionesy[pos2]){
        this.y = posicionesy[pos2]
        this.velocidad = this.velocidad * -1
      }
      
    }
    
    rect(this.x,this.y,this.tamx,this.tamy)
    //text(this.aceleracion,100,200)
  }
}

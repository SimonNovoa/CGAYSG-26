class Circulo1{
  constructor(x,y){
    this.tam=6*38
    this.velocidad = 0.125
    this.x = posicionesy[x]
    this.y = posicionesx[y]
    this.y2 = posicionesx[y]
  }
  dibujar(posy1,posy2,f1,f2,f3){
    this.mitad = (posicionesy[posy1]+posicionesy[posy2])/2
    if(this.y <= this.mitad){
      this.aceleracion = map(this.y, posicionesy[posy1], this.mitad, 1, 5)
    }
    if(this.y >= this.mitad){
      this.aceleracion = map(this.y, this.mitad, posicionesy[posy2], 5, 1)
    }
    
    this.y = this.y + this.velocidad * this.aceleracion * velocidad
    
    if(this.y >= posicionesy[posy2]){
      this.velocidad = this.velocidad * -1
      this.y = posicionesy[posy2]
    }
    if(this.y <= posicionesy[posy1]){
      this.velocidad = this.velocidad * -1
      this.y = posicionesy[posy1]
    }
    fill(f1)
    arc(this.x,this.y2,this.tam,this.tam,90,-90, PIE )
    fill(f2)
    arc(this.x,this.y,this.tam,this.tam,-90,0, PIE )
    fill(f3)
    arc(this.x,this.y,this.tam,this.tam,0,90, PIE )
  }
}

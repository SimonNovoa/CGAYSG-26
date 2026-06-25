class Circulo2 {
  constructor(){
    this.tam=6*38
    this.tam2=this.tam
    this.velocidad = 0.50
    this.aumento = this.velocidad

  }
  dibujar(x,y){
    this.tam = this.tam + this.aumento * velocidad
    this.aumento = this.aumento * 0.9935
    
    if(this.tam >= this.tam2){
      this.aumento = -this.velocidad
    }
    if(this.tam <= this.tam2-38*2){
      this.aumento = this.velocidad
    }
    
    noStroke()
    circle(posicionesx[x],posicionesy[y],this.tam)
    
  }
  
  corte(x, y){
    
    this.tam = this.tam + this.aumento
    this.aumento = this.aumento * 0.9935
    
    if(this.tam >= this.tam2){
      this.aumento = -this.velocidad
    }
    if(this.tam <= this.tam2-38*2){
      this.aumento = this.velocidad
    }
    
    drawingContext.save()
    drawingContext.beginPath()
    drawingContext.arc(posicionesx[x], posicionesy[y], this.tam / 2, 0, Math.PI * 2)
    drawingContext.clip()
  }
  
  fin(){
    drawingContext.restore()
  }
}

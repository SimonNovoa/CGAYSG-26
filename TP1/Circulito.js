class Circulito {
  constructor(){
    this.tam = random(38,38*2)
    this.velocidad = 0.30
    this.aumento = this.velocidad
  }
  dibujar(x,y){
    this.tam = this.tam + this.aumento * velocidad
    this.aumento = this.aumento * 0.9935

    if(this.tam >= 37.5*2){
      this.aumento = -this.velocidad
    }
    if(this.tam <= 37.5){
      this.aumento = this.velocidad
    }

    noStroke()
    circle(posicionesx[x],posicionesy[y],this.tam)
  }
}

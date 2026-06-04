class Rectangulos{
  
  constructor(){
    this.Rectangulo = []
    for(let i=0; i<3; i++){
      this.Rectangulo.push(new Rectangulo)
    }
  }
  dibujar(){
    for(let i=0; i< this.Rectangulo.length; i++){
      fill(colores[i])
      noStroke()
      this.Rectangulo[i].dibujar()
    }
  }
  
  cortes(){
    drawingContext.beginPath()
    for(let i=0; i< this.Rectangulo.length; i++){
      fill(colores[i])
      noStroke()
      this.Rectangulo[i].corte2()
    }
    drawingContext.clip()
  }
  
  cruces(){
  for(let i=0; i<this.Rectangulo.length; i++){
    drawingContext.save()
    this.Rectangulo[i].corte1()
      for(let j=0; j<this.Rectangulo.length; j++){
        if(i != j){
          this.Rectangulo[j].dibujar()
        }
      }
    drawingContext.restore()
    }
  }
  
}


//________________________________________________________

class Rectangulo{
  constructor(){
    this.posx = random(posicionesx)
    this.posy = random(posicionesy)
    this.posyOriginal = this.posy
    this.tamx = round(random(1,5))*38
    this.tamy = round(random(1,5))*38
  }
  posyActual(){
    if(!interactivo) return this.posyOriginal
    let offset = map(mouseY, 0, height, 0, 2*38)
    if(this.posyOriginal < height/2){
      return this.posyOriginal + offset
    } else {
      return this.posyOriginal - offset
    }
  }
  dibujar(){
    noStroke()
    rect(this.posx, this.posyActual(), this.tamx, this.tamy)
  }
  corte1(){
    drawingContext.beginPath()
    drawingContext.rect(
    this.posx, this.posyActual(), this.tamx, this.tamy
    )
    drawingContext.clip()
  }
  
  corte2(){
    drawingContext.rect(
    this.posx, this.posyActual(), this.tamx, this.tamy
    )
  }
}

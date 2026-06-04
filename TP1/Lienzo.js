class Lienzo{
  constructor(){
    this.Rectangulos = new Rectangulos
    this.Circulo1 =  new Circulo1
    this.Circulo2 =  new Circulo2
    this.Circulitos = new Circulitos
    this.Lineas = new Lineas
    this.pintarIdx=round(random(0,2))
    this.elegir=round(random(1,2))
  }
  dibujar(){
    
    let tamDinamico = interactivo ? map(mouseX, 0, width, 6*38, 4*38) : 6*38;
    tamDinamico = constrain(tamDinamico, 4*38, 6*38);
    //Guia()
    this.Rectangulos.dibujar()
    fill(0)
    
    this.Rectangulos.cruces()
    this.Circulitos.dibujar()
    
    if(this.elegir==1){
      fill(colores[this.pintarIdx])
      this.Circulo2.dibujar(tamDinamico)
      push()
      drawingContext.save()
      this.Rectangulos.cortes(tamDinamico)
      fill(0)
      this.Circulo2.dibujar(tamDinamico)
      drawingContext.restore()
      pop()
    }else{
      this.Circulo1.dibujar(tamDinamico)
    }
    
    //Guia()
    
    //MARGENES
    fill(255)
    rect(0,0,width,37)
    rect(0,0,37,height)
    rect(width,height,-37,-height)
    rect(width,height,-width,-37)
    this.Lineas.dibujar()
  }
}

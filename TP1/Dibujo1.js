class Dibujo1{
  constructor(){
    this.colores = shuffle(colores)
    
    this.Rectangulo1 = new Rectangulo(posicionesx[0],posicionesy[5],38*8,38*8)
    this.Rectangulo2 = new Rectangulo(posicionesx[0],posicionesy[11],38,38*2)
    this.Rectangulo3 = new Rectangulo(posicionesx[0],posicionesy[0],38,38)
    this.Rectangulo4 = new Rectangulo(posicionesx[1],posicionesy[0],38*2,38)
    
    this.Circulito1 = new Circulito
    this.Circulito2 = new Circulito
    
    this.Circulo1 = new Circulo1(5,6)
    this.Circulo2 = new Circulo2
    
    this.Linea1 = new Linea(posicionesx[1],posicionesy[0],posicionesx[1],posicionesy[13])
    this.Linea2 = new Linea(posicionesx[0],posicionesy[11],posicionesx[10],posicionesy[11])
    this.Linea3 = new Linea(posicionesx[10],posicionesy[0],posicionesx[10],posicionesy[13])
  }
  dibujar(){
    
    this.colores[0] = colores[cambio % 3]
    this.colores[1] = colores[(cambio+1) % 3]
    this.colores[2] = colores[(cambio+2) % 3]
    
    fill(this.colores[0])
    this.Rectangulo1.dibujar(5,6,2,2)
    fill(this.colores[1])
    this.Rectangulo2.dibujar()
    fill(this.colores[0])
    this.Rectangulo3.dibujar(0,1,5,2)
    fill(this.colores[2])
    this.Rectangulo4.dibujar(0,1,5,2)
    
    
    fill(this.colores[1])
    this.Circulito1.dibujar(8,12)
    fill(this.colores[2])
    this.Circulito2.dibujar(9,1)
    
    //this.Circulo1.dibujar(5,7,this.colores[1],this.colores[0],this.colores[2])
    fill(this.colores[1])
    this.Circulo2.dibujar(5,6)
    push()
    this.Circulo2.corte(5,6)
    fill(0)
    this.Rectangulo1.dibujar(5,6,2,2)
    this.Circulo2.fin
    pop()
    
    Margenes()
    
    this.Linea1.dibujar(6,0,20,2)
    this.Linea2.dibujar(10,7,10,1)
    this.Linea3.dibujar(13,5,20,1)
  }
}

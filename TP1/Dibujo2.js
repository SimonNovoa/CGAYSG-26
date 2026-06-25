class Dibujo2{
  constructor(){
    this.colores = shuffle(colores)
    
    this.Rectangulo1 = new Rectangulo(posicionesx[1],posicionesy[2],38*4,38*4)
    this.Rectangulo2 = new Rectangulo(posicionesx[5],posicionesy[3],38*4,38*2)
    this.Rectangulo3 = new Rectangulo(posicionesx[2],posicionesy[12],38,38)
    this.Rectangulo4 = new Rectangulo(posicionesx[2],posicionesy[10],38,38)
    this.Rectangulo5 = new Rectangulo(posicionesx[6],posicionesy[10],38,38)
    this.Rectangulo6 = new Rectangulo(posicionesx[7],posicionesy[10],38*3,38)
    
    this.Circulito1 = new Circulito
    this.Circulito2 = new Circulito
    
    this.Circulo1 = new Circulo1(5,6)

    this.Linea1 = new Linea(posicionesx[1], posicionesy[1],posicionesx[6],posicionesy[1])
    this.Linea2 = new Linea(posicionesx[0], posicionesy[2],posicionesx[6],posicionesy[2])
    this.Linea3 = new Linea(posicionesx[2], posicionesy[8],posicionesx[2],posicionesy[13])
    this.Linea4 = new Linea(posicionesx[3], posicionesy[8],posicionesx[3],posicionesy[12])
    this.Linea5 = new Linea(posicionesx[1], posicionesy[11],posicionesx[6],posicionesy[11])
    this.Linea6 = new Linea(posicionesx[0], posicionesy[12],posicionesx[7],posicionesy[12])
  }
  dibujar(){
    this.colores[0] = colores[cambio % 3]
    this.colores[1] = colores[(cambio+1) % 3]
    this.colores[2] = colores[(cambio+2) % 3]
    
    fill(this.colores[0])
    this.Rectangulo1.dibujar(2,4,5,2)
    this.Rectangulo5.dibujar(3,6,5,1)
    fill(this.colores[1])
    this.Rectangulo2.dibujar(5,6,2,1)
    this.Rectangulo3.dibujar()
    fill(this.colores[2])
    this.Rectangulo4.dibujar()
    this.Rectangulo6.dibujar()
    
    fill(this.colores[2])
    this.Circulito1.dibujar(9,1)
    fill(this.colores[1])
    this.Circulito2.dibujar(9,12)
    
    this.Circulo1.dibujar(5,7,this.colores[2],this.colores[0],this.colores[1])
    
    Margenes()
    
    this.Linea1.dibujar(7,4,10,1)
    this.Linea2.dibujar(6,3,10,1)
    this.Linea3.dibujar(13,11,5,1)
    this.Linea4.dibujar(13,11,5,1)
    this.Linea5.dibujar(2,1,2,2)
    this.Linea6.dibujar(7,3,5,1)
  }
}

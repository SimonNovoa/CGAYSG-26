class Dibujo3{
  constructor(){
    this.colores = shuffle(colores)
    
    this.Rectangulo1 = new Rectangulo(posicionesx[4],posicionesy[0],38,38*7)
    this.Rectangulo2 = new Rectangulo(posicionesx[5],posicionesy[7],38*5,38)
    this.Rectangulo3 = new Rectangulo(posicionesx[4],posicionesy[7],38,38)
    this.Rectangulo4 = new Rectangulo(posicionesx[0],posicionesy[10],38*3,38*3)
    this.Rectangulo5 = new Rectangulo(posicionesx[7],posicionesy[10],38*3,38*3)
    
    this.Circulito1 = new Circulito
    this.Circulito2 = new Circulito
    this.Circulito3 = new Circulito
    
    this.Circulo2 = new Circulo2
    
    this.Linea1 = new Linea(posicionesx[5],posicionesy[10],posicionesx[5],posicionesy[13])
    this.Linea2 = new Linea(posicionesx[0],posicionesy[8],posicionesx[10],posicionesy[8])
    this.Linea3 = new Linea(posicionesx[0],posicionesy[9],posicionesx[10],posicionesy[9])
  }
  dibujar(){
    this.colores[0] = colores[cambio % 3]
    this.colores[1] = colores[(cambio+1) % 3]
    this.colores[2] = colores[(cambio+2) % 3]
    
    fill(this.colores[1])
    this.Rectangulo1.dibujar()
    fill(this.colores[2])
    this.Rectangulo2.dibujar(4,6,5,1)
    fill(this.colores[0])
    this.Rectangulo3.dibujar(3,5,5,1)
    this.Rectangulo4.dibujar(0,2,5,1)
    this.Rectangulo5.dibujar(5,7,5,1)
    
    fill(this.colores[0])
    this.Circulito1.dibujar(9,1)
    fill(this.colores[1])
    this.Circulito2.dibujar(9,3)
    fill(this.colores[2])
    this.Circulito3.dibujar(9,5)
    
    fill(this.colores[0])
    this.Circulo2.dibujar(3,3)
    push()
    this.Circulo2.corte(3,3)
    fill(0)
    this.Rectangulo1.dibujar()
    this.Circulo2.fin()
    pop()
    
    Margenes()
    
    this.Linea1.dibujar(10,8,5,2)
    this.Linea2.dibujar(10,5,5,1)
    this.Linea3.dibujar(5,0,5,2)
  }
}

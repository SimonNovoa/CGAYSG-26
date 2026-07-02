class Dibujo4 {
  constructor(){
    this.colores = shuffle(colores)
    
    this.Rectangulo1 = new Rectangulo(posicionesx[0],posicionesy[0],38,38)
    this.Rectangulo2 = new Rectangulo(posicionesx[9],posicionesy[12],38,38)
    this.Rectangulo3 = new Rectangulo(posicionesx[0],posicionesy[6],38*5,38)
    this.Rectangulo4 = new Rectangulo(posicionesx[5],posicionesy[6],38*5,38)
    
    this.Circulito1 = new Circulito
    this.Circulito2 = new Circulito
    
    this.Linea1 = new Linea(posicionesx[0],posicionesy[0],posicionesx[0],posicionesy[13])
    this.Linea2 = new Linea(posicionesx[10],posicionesy[0],posicionesx[10],posicionesy[13])
    
    this.Circulo2 = new Circulo2
  }
  dibujar(){
    this.colores[0] = colores[cambio % 3]
    this.colores[1] = colores[(cambio+1) % 3]
    this.colores[2] = colores[(cambio+2) % 3]
    
    fill(this.colores[1])
    this.Rectangulo1.dibujar(0,9,20,1)
    this.Rectangulo2.dibujar(0,9,20,1)
    fill(this.colores[2])
    this.Rectangulo3.dibujar(0,2,5,1)
    this.Rectangulo4.dibujar(3,5,5,1)
    
    fill(this.colores[0])
    this.Circulito1.dibujar(8,2)
    this.Circulito2.dibujar(2,11)
    
    fill(this.colores[0])
    this.Circulo2.dibujar(5,6)
    push()
    this.Circulo2.corte(5,6)
    fill(0)
    this.Rectangulo3.dibujar()
    this.Rectangulo4.dibujar()
    this.Circulo2.fin()
    pop()
    
    Margenes()
   
    this.Linea1.dibujar(13,6,14,1)
    this.Linea2.dibujar(7,0,14,2)
  }
}

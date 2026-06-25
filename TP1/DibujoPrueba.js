class DibujoPrueba{
  constructor(){
    
    this.Rectangulo1 = new Rectangulo(posicionesx[0],posicionesy[0],38*1,38*1)
    this.Rectangulo2 = new Rectangulo(posicionesx[1],posicionesy[1],38*1,38*1)
    this.Rectangulo3 = new Rectangulo(posicionesx[2],posicionesy[0],38*1,38*1)
    
    this.Circulito1 = new Circulito
    this.Circulito2 = new Circulito
    this.Circulito3 = new Circulito
    
    this.Linea1 = new Linea(posicionesx[0],posicionesy[5],posicionesx[0],posicionesy[9])
    this.Linea2 = new Linea(posicionesx[0],posicionesy[5],posicionesx[5],posicionesy[5])
    this.Linea3 = new Linea(posicionesx[5],posicionesy[9],posicionesx[5],posicionesy[10])
    this.Linea4 = new Linea(posicionesx[2],posicionesy[10],posicionesx[5],posicionesy[10])
    
    this.colores = shuffle(colores)
    this.posicionesx=shuffle(posicionesx)
    this.posicionesy=shuffle(posicionesy)
  }
  dibujar(){
    fill(this.colores[0])
    this.Rectangulo1.dibujar(0,2,20,1)
    fill(this.colores[1])
    this.Rectangulo2.dibujar()
    fill(this.colores[2])
    this.Rectangulo3.dibujar(0,2,10,2)
    
    fill(this.colores[0])
    this.Circulito1.dibujar(4,1)
    fill(this.colores[1])
    this.Circulito2.dibujar(6,1)
    fill(this.colores[2])
    this.Circulito3.dibujar(8,1)
    
    Margenes()
    
    this.Linea1.dibujar(10,6,20,1)
    this.Linea2.dibujar(5,1,20,1)
    this.Linea3.dibujar(9,5,20,2)
    this.Linea4.dibujar(4,0,20,2)
    
  }
}

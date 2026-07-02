class Dibujo5{

constructor(){
    this.colores = shuffle(colores)

    this.Rectangulo1 = new Rectangulo(posicionesx[0],posicionesy[9],38*1,38*1)
    this.Rectangulo2 = new Rectangulo(posicionesx[0],posicionesy[10],38*1,38*3)
    this.Rectangulo3 = new Rectangulo(posicionesx[1],posicionesy[10],38*1,38*3)
    this.Rectangulo4 = new Rectangulo(posicionesx[2],posicionesy[11],38*1,38*2)
    this.Rectangulo5 = new Rectangulo(posicionesx[5],posicionesy[10],38*1,38*2)
    this.Rectangulo6 = new Rectangulo(posicionesx[6],posicionesy[10],38*4,38*2)
    this.Rectangulo7 = new Rectangulo(posicionesx[5],posicionesy[12],38*1,38*1)
    this.Rectangulo8 = new Rectangulo(posicionesx[6],posicionesy[12],38*4,38*1)
    this.Rectangulo9 = new Rectangulo(posicionesx[4],posicionesy[9],38*1,38*1)
    this.Rectangulo10 = new Rectangulo(posicionesx[3],posicionesy[8],38*1,38*1)
    this.Rectangulo11 = new Rectangulo(posicionesx[4],posicionesy[8],38*1,38*1)
    this.Rectangulo12 = new Rectangulo(posicionesx[3],posicionesy[7],38*1,38*1)
    this.Rectangulo13 = new Rectangulo(posicionesx[5],posicionesy[8],38*5,38*1)
    this.Rectangulo14 = new Rectangulo(posicionesx[8],posicionesy[9],38*2,38*1)
    this.Rectangulo15 = new Rectangulo(posicionesx[0],posicionesy[2],38*11,38*1)

    this.Circulo2 = new Circulo2

    this.Circulito1 = new Circulito
    this.Circulito2 = new Circulito

    this.Linea1 = new Linea(posicionesx[6], posicionesy[0], posicionesx[6], posicionesy[13])
    this.Linea2 = new Linea(posicionesx[0], posicionesy[0], posicionesx[6], posicionesy[0])


}
dibujar(){
    this.colores[0] = colores[cambio % 3]
    this.colores[1] = colores[(cambio+1) % 3]
    this.colores[2] = colores[(cambio+2) % 3]

    fill(0)
    this.Rectangulo1.dibujar(0,1,10,1)//desde donde a donde (mas chico a mas grande) y velocidad y modo (2 vertical)
    fill(this.colores[1])
    this.Rectangulo2.dibujar(0,1,10,1)
    fill(this.colores[0])
    this.Rectangulo3.dibujar(1,2,10,1)
    fill(this.colores[2])
    this.Rectangulo4.dibujar(2,3,10,1)
    fill(this.colores[0])
    this.Rectangulo5.dibujar()
    fill(this.colores[2])
    this.Rectangulo6.dibujar()
    fill(this.colores[1])
    this.Rectangulo7.dibujar()
    fill(0)
    this.Rectangulo8.dibujar()
    fill(0)
    this.Rectangulo9.dibujar(8,9,10,2)//negro abajo
    fill(0)
    this.Rectangulo10.dibujar(7,8,10,2)//negro arriba
    fill(this.colores[0])
    this.Rectangulo11.dibujar(7,8,10,2)//rojo abajo
    fill(this.colores[0])
    this.Rectangulo12.dibujar(6,7,10,2)//rojo arriba
    fill(this.colores[1])
    this.Rectangulo13.dibujar(7,8,10,2)//amarillo ancho
    fill(0)
    this.Rectangulo14.dibujar(8,9,10,2)
    fill(this.colores[2])
    this.Rectangulo15.dibujar(0,3,10,1)//azul ancho


    fill(this.colores[2])
    this.Circulito1.dibujar(5,11)
    fill(this.colores[1])
    this.Circulito2.dibujar(2,8)

    fill(this.colores[1])
    this.Circulo2.dibujar(3,3)//circulo grande
    push()
    this.Circulo2.corte(3,3)
    fill(0)
    this.Rectangulo15.dibujar(0,3,10,1)//negro ancho
    this.Circulo2.fin()
    pop()

    Margenes()
    this.Linea1.dibujar(5,0,10,2)//desde donde a donde, vel y modo (2 de arriba hacia abajo)
    this.Linea2.dibujar(10,6,10,1)//desde donde a donde, vel y modo (1 de derecha a izq)

}

}

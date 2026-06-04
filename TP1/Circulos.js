class Circulo1{
  constructor(){
    this.corte1 = 90
    this.tam=6*38
    this.posx=random(posicionesx.slice(5,7))
    this.posy=random(posicionesy.slice(6,8))
    this.mover=round(random(0,1))*38
    this.orden=shuffle([0,1,2])
  }
  dibujar(tam = this.tam){
    fill(colores[this.orden[0]])
    arc(this.posx,this.posy,tam,tam,this.corte1,-this.corte1, PIE )
    fill(colores[this.orden[1]])
    arc(this.posx,this.posy+this.mover,tam,tam,-this.corte1,0, PIE )
    fill(colores[this.orden[2]])
    arc(this.posx,this.posy+this.mover,tam,tam,0,this.corte1, PIE )
  }
}

//________________________
class Circulitos{
  constructor(){
    this.Circulito = []
    for(let i=0; i<3; i++){
      this.Circulito.push(new Circulito)
    }
  }
  dibujar(){
    for(let i=0; i< this.Circulito.length; i++){
      fill(colores[i])
      noStroke()
      this.Circulito[i].dibujar()
    }
  }
}


class Circulito{
  constructor(){
    this.posx=random(posicionesx)
    this.posy=random(posicionesy)
    this.tam=round(random(1,2))*38
  }
  dibujar(){
    circle(this.posx,this.posy,this.tam)
  }
}

//________________________
class Circulo2{
  constructor(){
    this.tam=6*38
    this.posx=random(posicionesx.slice(4,7))
    this.posy=random(posicionesy.slice(5,8))
  }
  dibujar(tam = this.tam){
    circle(this.posx,this.posy,tam)
 }
}

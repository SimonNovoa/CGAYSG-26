class Lineas{
  constructor(){
    this.Linea = []
      for(let i=0; i<4; i++){
        this.Linea.push(new Linea)
      }
  }
  dibujar(){
      for(let i=0; i< this.Linea.length; i++){
      noStroke()
      this.Linea[i].dibujar()
    }
  }
  reposicionar(){
    for(let i=0; i< this.Linea.length; i++){
      this.Linea[i].reposicionar()
    }
  }
}
class Linea{
  constructor(){
    this.grosor=5
    this.elegir=round(random(0,1))
    this.reposicionar()
  }
  reposicionar(){
    let posicioneslx =[...posicionesx, 11*38]
    let posicionesly =[...posicionesy, 11*38]
    this.posx=random(posicioneslx)
    this.posy=random(posicionesly)
    this.tamx=round(random(5,10))*38
    this.tamy=round(random(5,13))*38
  }
  dibujar(){
    strokeCap(SQUARE)
    stroke(0)
    strokeWeight(this.grosor)
    if(this.elegir==0){
      line(this.posx,posicionesy[0],this.posx,this.tamy)
    }else{
      line(posicionesx[0],this.posy,this.tamx,this.posy)
    }
    noStroke()
  }
}

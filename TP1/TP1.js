let posicionesx=[], posicionesy=[]
let interactivo = false

function setup() {
  createCanvas(454,568)
  angleMode(DEGREES)
  
  for(let i=0; i<10;i++){
    posicionesx.push(37+i*38)
  }
  
  for(let i=0; i<13;i++){
    posicionesy.push(37+i*38)
  }
  
  colores = [color(233, 3, 5), //0 rojo
             color(255, 207, 0), //1 amarillo
             color(14, 76, 175),] //2 negro
  
  Lienzo = new Lienzo
  
}


function draw() {
  background(255)
  Lienzo.dibujar()
}

function keyPressed() {
  if (key === '1') {
    interactivo = !interactivo
  }
  if (key === ' ' && interactivo) {
    colores.push(colores.shift())
  }
  if ((key === 's' || key === 'S') && interactivo) {
    Lienzo.Lineas.reposicionar()
  }
}

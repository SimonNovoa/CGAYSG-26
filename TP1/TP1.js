let posicionesx=[], posicionesy=[]
let mic, fft
let umbralSilencio = 0.02
let Chillido = false, frame=0,cambio=0,cambio2=0
let umbrall=30


function setup() {
  angleMode(DEGREES)
  createCanvas(454,568)
  
  mic = new p5.AudioIn()
  mic.start()
  fft = new p5.FFT()
  fft.setInput(mic)
  
  for(let i=0; i<11;i++){
    posicionesx.push(37+i*38)
  }
  
  for(let i=0; i<14;i++){
    posicionesy.push(37+i*38)
  }
  
  colores = [color(233, 3, 5), //0 rojo
             color(255, 207, 0), //1 amarillo
             color(14, 76, 175),] //2 negro
             
  
  dibujos = [new Dibujo1(), new Dibujo2(), new Dibujo3()]

}


function draw() {
  background(255)
  

  fft.analyze()
  let agudos = fft.getEnergy("highMid", "treble")
  let graves = fft.getEnergy("bass", "lowMid")
  let palma = fft.getEnergy("bass", "lowMid")
  let nivel = mic.getLevel()
  
  if(nivel < umbralSilencio){
    velocidad = 2
  } else {
    let balance = agudos - graves 
    velocidad = map(agudos, 0, 150, 0.4, 10)
  }
  
  if(agudos > 180 && nivel > 0.05){
    Chillido = true
    frame++
  }else{
    if(Chillido){
      if(frame < umbrall){
          cambio++
          if(cambio>2) {cambio=0}
      }else{
        cambio2=(cambio2+1)%dibujos.length
      }
    }
    Chillido=false
    frame=0
  }
  
  dibujos[cambio2].dibujar()
  //DibujoPrueba.dibujar()
  //fill(0,255,0)
  //text(nivel,100,80)
  //text("agudos: " + agudos, 100, 100)
  //text("graves: " + graves, 100, 120)
  //text("velocidad: " + velocidad.toFixed(2), 100, 140)
  //Guia()

}

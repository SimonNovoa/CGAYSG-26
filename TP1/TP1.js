let posicionesx=[], posicionesy=[]
let mic, fft
let umbralSilencio = 0.02
let umbralSilencioDefault = umbralSilencio
let Chillido = false, frame=0,cambio=0,cambio2=0
let umbrall=30
let agudos, graves, nivel
let ver = false

let hz1 = 20
let hz2 = 140
let hz3 = 400
let hz4 = 2600
let hz5 = 5200
let hz6 = 14000

// Valores originales, para poder restablecer con el botón RESET
let hz1Default = hz1
let hz2Default = hz2
let hz3Default = hz3
let hz4Default = hz4
let hz5Default = hz5
let hz6Default = hz6

// Referencias a los campos de texto y al botón (se crean una sola vez en setup)
let inputUmbral, inputHz1, inputHz2, inputHz3, inputHz4, inputHz5, inputHz6, botonReset

function setup() {
  angleMode(DEGREES)

  // Contenedor para poder ubicar los inputs HTML exactamente sobre el canvas
  let contenedor = createDiv()
  contenedor.style('position','relative')
  contenedor.style('width','454px')
  contenedor.style('height','568px')

  let cnv = createCanvas(454,568)
  cnv.parent(contenedor)

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


  dibujos = [new Dibujo5(), new Dibujo1(), new Dibujo2(), new Dibujo3(), new Dibujo4()]

  // Campos editables (arrancan ocultos, aparecen al apretar "a")
  inputUmbral = crearCampoNumerico(contenedor, 130, 68, 60, umbralSilencio, 0.001, function(v){ umbralSilencio = v })

  inputHz1 = crearCampoNumerico(contenedor, 250, 8,   55, hz1, 1, function(v){ hz1 = v })
  inputHz2 = crearCampoNumerico(contenedor, 250, 28,  55, hz2, 1, function(v){ hz2 = v })
  inputHz3 = crearCampoNumerico(contenedor, 250, 48,  55, hz3, 1, function(v){ hz3 = v })
  inputHz4 = crearCampoNumerico(contenedor, 250, 68,  55, hz4, 1, function(v){ hz4 = v })
  inputHz5 = crearCampoNumerico(contenedor, 250, 88,  55, hz5, 1, function(v){ hz5 = v })
  inputHz6 = crearCampoNumerico(contenedor, 250, 108, 55, hz6, 1, function(v){ hz6 = v })

  botonReset = createButton('RESET')
  botonReset.parent(contenedor)
  botonReset.position(320, 55)
  botonReset.size(90, 25)
  botonReset.style('background-color', '#c80000')
  botonReset.style('color', '#ffffff')
  botonReset.style('border', 'none')
  botonReset.style('cursor', 'pointer')
  botonReset.mousePressed(resetValores)
  botonReset.hide()
}

// Crea un <input type="number"> posicionado sobre el canvas.
// setter(v) es la función que actualiza la variable global correspondiente.
function crearCampoNumerico(padre, x, y, ancho, valorInicial, paso, setter){
  let inp = createInput(String(valorInicial))
  inp.parent(padre)
  inp.position(x, y)
  inp.size(ancho, 16)
  inp.style('font-size', '12px')
  inp.elt.type = 'number'
  inp.elt.step = paso
  inp.elt.min = 0
  inp.input(function(){
    let v = parseFloat(inp.value())
    if(!isNaN(v)){
      setter(v)
    }
  })
  inp.hide()
  return inp
}

function resetValores(){
  hz1 = hz1Default; inputHz1.value(hz1)
  hz2 = hz2Default; inputHz2.value(hz2)
  hz3 = hz3Default; inputHz3.value(hz3)
  hz4 = hz4Default; inputHz4.value(hz4)
  hz5 = hz5Default; inputHz5.value(hz5)
  hz6 = hz6Default; inputHz6.value(hz6)
  umbralSilencio = umbralSilencioDefault; inputUmbral.value(umbralSilencio)
}

function draw() {
  background(255)


  fft.analyze()
  agudos = fft.getEnergy(hz4, hz5)
  graves = fft.getEnergy(hz1, hz2)
  nivel = mic.getLevel()

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
        cambio2=round(random(0,4))//(cambio2+1)%dibujos.length
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
  Valores()
}

function keyPressed(){
  if(key == 'a'){
    ver = !ver
    let accion = ver ? 'show' : 'hide'
    inputUmbral[accion]()
    inputHz1[accion]()
    inputHz2[accion]()
    inputHz3[accion]()
    inputHz4[accion]()
    inputHz5[accion]()
    inputHz6[accion]()
    botonReset[accion]()
  }
}

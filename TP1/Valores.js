function Valores (){
  if(ver == true){
    noStroke()
    fill(0)
    rect(0,0,width,300)
    fill(255)

    // agudos y graves vienen de fft.getEnergy(), que siempre da 0-255
    // (es energía/volumen dentro de la banda hz que definiste, no una frecuencia)
    let agudoEscalado = round(map(agudos, 0, 255, 0, 14000))
    let graveEscalado = round(map(graves, 0, 255, 0, 14000))

    text("agudo: " + agudoEscalado, 10,20)
    text("graves: " + graveEscalado, 10,40)
    text("nivel: " + nivel, 10, 60)
    text("umbralSilencio:", 10, 80)

    text("hz1:", 210,20)
    text("hz2:", 210,40)
    text("hz3:", 210,60)
    text("hz4:", 210,80)
    text("hz5:", 210,100)
    text("hz6:", 210,120)

    text("agudo va de hz4 a hz5", 320, 20)
    text("grave va de hz1 a hz2", 320, 40)

    // Panel de espectro en vivo, para calibrar hz1-hz6 según el micrófono real
    dibujarEspectro(140, 110)

    // Barra horizontal de nivel de sonido, con el umbral de silencio marcado
    dibujarBarraUmbral(270, 20)
  }
}

// Dibuja el espectro de audio real (barras verdes) desde 0 hasta 14000 Hz,
// con líneas verticales marcando hz1...hz6, para poder ajustar los umbrales
// mirando en dónde REALMENTE tiene energía el micrófono que estés usando.
function dibujarEspectro(y, alto){
  let spectrum = fft.analyze()
  let nyquist = (typeof sampleRate === 'function') ? sampleRate() / 2 : 22050
  let frecMax = 14000
  let numBins = min(floor(frecMax / nyquist * spectrum.length), spectrum.length)

  let xIni = 10
  let xFin = width - 10
  let anchoBarra = (xFin - xIni) / numBins

  noStroke()
  fill(0,255,0)
  for(let i=0; i<numBins; i++){
    let alturaBarra = map(spectrum[i], 0, 255, 0, alto)
    let x = xIni + i*anchoBarra
    rect(x, y+alto-alturaBarra, anchoBarra, alturaBarra)
  }

  dibujarMarcaHz(hz1, xIni, xFin, y, alto, color(0,150,255),  "hz1")
  dibujarMarcaHz(hz2, xIni, xFin, y, alto, color(0,150,255),  "hz2")
  dibujarMarcaHz(hz3, xIni, xFin, y, alto, color(200,200,200),"hz3")
  dibujarMarcaHz(hz4, xIni, xFin, y, alto, color(255,80,80),  "hz4")
  dibujarMarcaHz(hz5, xIni, xFin, y, alto, color(255,80,80),  "hz5")
  dibujarMarcaHz(hz6, xIni, xFin, y, alto, color(200,200,200),"hz6")

  // Eje de referencia
  stroke(255)
  strokeWeight(1)
  line(xIni, y+alto, xFin, y+alto)
  noStroke()
  fill(255)
  textSize(9)
  text("0", xIni, y+alto+12)
  text("14000 Hz", xFin-40, y+alto+12)
  textSize(12)
}

function dibujarMarcaHz(valorHz, xIni, xFin, y, alto, col, etiqueta){
  let x = map(valorHz, 0, 14000, xIni, xFin)
  stroke(col)
  strokeWeight(2)
  line(x, y, x, y+alto)
  noStroke()
  fill(col)
  textSize(9)
  text(etiqueta, x-8, y-2)
  textSize(12)
}

// Barra horizontal: gris = nivel captado por el micrófono en vivo,
// línea roja = dónde está el umbralSilencio actual.
// Si tu voz nunca llena la barra o siempre la llena del todo,
// ajustá "nivelMax" para darle más resolución visual.
function dibujarBarraUmbral(y, alto){
  let xIni = 10
  let xFin = width - 10
  let nivelMax = 0.3

  noStroke()
  fill(80)
  rect(xIni, y, xFin-xIni, alto)

  let anchoNivel = map(constrain(nivel, 0, nivelMax), 0, nivelMax, 0, xFin-xIni)
  fill(nivel >= umbralSilencio ? color(0,255,0) : color(130))
  rect(xIni, y, anchoNivel, alto)

  let xUmbral = xIni + map(constrain(umbralSilencio, 0, nivelMax), 0, nivelMax, 0, xFin-xIni)
  stroke(255,0,0)
  strokeWeight(2)
  line(xUmbral, y-4, xUmbral, y+alto+4)

  noStroke()
  fill(255)
  textSize(9)
  text("nivel de sonido (linea roja = umbralSilencio)", xIni, y-6)
  textSize(12)
}

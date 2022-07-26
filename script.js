// Generar numeros aleatorios entre 1 y 3
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
// La coputadora elige aleatoreamente un número entre 1 y 3
let pc = randomNumber(1, 3);

//El jugador elige: 1 es piedra, 2 es papel, 3 es tijera
let jugador = 0;

const elecion = {
  piedra: 1,
  papel: 2,
  tijera: 3,
};

jugador = prompt("Elige 1 para piedra, 2 para papel, 3 para tijera");
if (jugador == 1) {
  if (pc == 1) {
    //Resultados si el jugador elige 1-piedra
    alert("Elegiste piedra \nLa computadora eligió piedra \nEMPATE");
  } else if (pc == 2) {
    alert("Elegiste piedra \nLa computadora eligió papel \nPERDISTE");
  } else if (pc == 3) {
    alert("Elegiste piedra \nLa computadora eligió tijera \nGANASTE");
  }
} else if (jugador == 2) {
  //Resultados si el jugador elige 2-papel
  if (pc == 1) {
    alert("Elegiste papel \nLa computadora eligió piedra \nGANASTE");
  } else if (pc == 2) {
    alert("Elegiste papel \nLa computadora eligió papel \nEMPATE");
  } else if (pc == 3) {
    alert("Elegiste papel \nLa computadora eligió tijera \nPERDISTE");
  }
} else if (jugador == 3) {
  //Resultados si el jugador elige 3-tijera
  if (pc == 1) {
    alert("Elegiste tijera \nLa computadora eligió piedra \nPERDISTE");
  } else if (pc == 2) {
    alert("Elegiste tijera \nLa computadora eligió papel \nGANASTE");
  } else if (pc == 3) {
    alert("Elegiste tijera \nLa computadora eligió tijera \nEMPATE");
  }
} else {
  alert("Por favor elije una opción válida");
}

<script
  src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
  integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
  crossorigin="anonymous"
></script>;

// Generar numeros aleatorios entre 1 y 3
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
// La coputadora elige aleatoreamente un número entre 1 y 3
let pc = randomNumber(1, 3);

//El jugador elige: 1 es piedra, 2 es papel, 3 es tijera
let jugador = 0;

const elecion = {
  elecion1: piedra,
  elecion2: papel,
  elecion3: tijera,
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

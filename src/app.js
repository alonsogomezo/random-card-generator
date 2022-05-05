import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let iconos = ["♦", "♥", "♠", "♣"];
let simbolo = ["J", "Q", "R", "AS", 2, 3, 4, 5, 6, 7, 8, 9, 10];

window.onload = function() {
  let icono = iconos[numeroAleatorioIconos()];
  let simbolo = simbolo[numeroAleatorioSimbolo()];

  console.log("hola");
};

function numeroAleatorioIconos() {
  let num = Math.floor(Math.random() * iconos.length);
  return num;
}

function numeroAleatorioSimbolo() {
  let num = Math.floor(Math.random() * simbolo.length);
  return num;
}

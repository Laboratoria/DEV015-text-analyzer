const elemento = document.querySelector("[name=user-input]");

console.log(elemento);

 // const element = document.getElementById("reset-button");

 // console.log(element);

 // const element = document.getElementsByName("user-input")

const element = document.getElementById("reset-button");

console.log(element);

elemento.addEventListener("input", function () {
  console.log("michi");
});

element.addEventListener("click", function () {
  elemento.value = "";
});


import { analyzeText } from './textAnalyzer.js';

// function metricas (){
//   const text = textarea.value;
// }
//const ul = document.querySelector("ul");
//console.log(ul);
// const ul = document.querySelector("ul").textContent;
//  elemento.value = texto.split(/\s+/);
//  console.log("Conteo de palabras:", palabras.length);



// document.querySelector('.one').textContent = `Recuento de palabras: ${wordCount}`;
// document.querySelector('.two').textContent = `Recuento de caracteres: ${charCount}`;
// document.querySelector('.three').textContent = `Recuento de caracteres excluyendo espacios y signos de puntuacion: ${charCountNoSpaces}`;
// document.querySelector('.four').textContent = `Recuento de numeros: ${numberCount}`;
// document.querySelector('.five').textContent = `Suma total de numeros: ${numberSum}`;
// document.querySelector('.six').textContent = `Longitud media de las palabras: ${averageWordLength.toFixed(2)}`;




document.querySelector('.one').textContent = "Recuento de palabras";
document.querySelector('.two').textContent = "Recuento de caracteres";
document.querySelector('.three').textContent = "Recuento de caracteres excluyendo espacios y signos de puntuacion";
document.querySelector('.four').textContent = "Recuento de numeros";
document.querySelector('.five').textContent = "Suma total de numeros";
document.querySelector('.six').textContent = "Longitud media de las palabras";
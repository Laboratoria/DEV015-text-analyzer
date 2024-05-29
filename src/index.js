import analyzer from './analyzer.js';

const textarea = document.querySelector("[name=user-input]");

console.log(textarea);

// const element = document.getElementById("reset-button");

// console.log(element);

// const element = document.getElementsByName("user-input")

const button = document.getElementById("reset-button");

console.log(button);

textarea.addEventListener("input", function (event) {
  console.log("michi");
  console.log(event.target.value);
  
  const wordCount = analyzer.getWordCount(event.target.value)
  document.querySelector('.one').textContent = `Recuento de palabras: ${wordCount}`;

  const charCount = analyzer.getCharacterCount(event.target.value)
  document.querySelector('.two').textContent = `Recuento de caracteres: ${charCount}`;

  const charCountNoSpaces = analyzer.getCharacterCountExcludingSpaces(event.target.value)
  document.querySelector('.three').textContent = `Recuento de caracteres excluyendo espacios y signos de puntuacion: ${charCountNoSpaces}`;


  const numberCount = analyzer.getNumberCount(event.target.value)
  document.querySelector('.four').textContent = `Recuento de numeros: ${numberCount}`;

const numberSum = analyzer.getNumberSum(event.target.value)
document.querySelector('.five').textContent = `Suma total de numeros: ${numberSum}`;
  
  const averageWordLength = analyzer.getAverageWordLength(event.target.value)
  document.querySelector('.six').textContent = `Longitud media de las palabras: ${averageWordLength.toFixed(2)}`;
});



button.addEventListener("click", function () {
  textarea.value = "";
});




// function metricas (){
//   const text = textarea.value;
// }
//const ul = document.querySelector("ul");
//console.log(ul);
// const ul = document.querySelector("ul").textContent;
//  elemento.value = texto.split(/\s+/);
//  console.log("Conteo de palabras:", palabras.length);



//document.querySelector('.one').textContent = `Recuento de palabras: ${wordCount}`;
//document.querySelector('.two').textContent = `Recuento de caracteres: ${charCount}`;
//document.querySelector('.three').textContent = `Recuento de caracteres excluyendo espacios y signos de puntuacion: ${charCountNoSpaces}`;
//document.querySelector('.four').textContent = `Recuento de numeros: ${numberCount}`;
//document.querySelector('.five').textContent = `Suma total de numeros: ${numberSum}`;
//document.querySelector('.six').textContent = `Longitud media de las palabras: ${averageWordLength.toFixed(2)}`;




//document.querySelector('.one').textContent = "Recuento de palabras";
//document.querySelector('.two').textContent = "Recuento de caracteres";
//document.querySelector('.three').textContent = "Recuento de caracteres excluyendo espacios y signos de puntuacion";
//document.querySelector('.four').textContent = "Recuento de numeros";
//document.querySelector('.five').textContent = "Suma total de numeros";
//document.querySelector('.six').textContent = "Longitud media de las palabras";
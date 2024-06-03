import analyzer from "./analyzer.js";

const textarea = document.querySelector("[name=user-input]");

const button = document.getElementById("reset-button");

textarea.addEventListener("input", function (event) {
  const wordCount = analyzer.getWordCount(event.target.value);
  document.querySelector(
    ".one"
  ).textContent = `Recuento de palabras: ${wordCount}`;

  const charCount = analyzer.getCharacterCount(event.target.value);
  document.querySelector(
    ".two"
  ).textContent = `Recuento de caracteres: ${charCount}`;

  const charCountNoSpaces = analyzer.getCharacterCountExcludingSpaces(
    event.target.value
  );
  document.querySelector(
    ".three"
  ).textContent = `Recuento de caracteres excluyendo espacios y signos de puntuacion: ${charCountNoSpaces}`;

  const numberCount = analyzer.getNumberCount(event.target.value);
  document.querySelector(
    ".four"
  ).textContent = `Recuento de numeros: ${numberCount}`;

  const numberSum = analyzer.getNumberSum(event.target.value);
  document.querySelector(
    ".five"
  ).textContent = `Suma total de numeros: ${numberSum}`;

  const averageWordLength = analyzer.getAverageWordLength(event.target.value);
  document.querySelector(
    ".six"
  ).textContent = `Longitud media de las palabras: ${averageWordLength.toFixed(
    2
  )}`;
});

button.addEventListener("click", function () {
  textarea.value = "";
});

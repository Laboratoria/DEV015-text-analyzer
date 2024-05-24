import analyzer from "./analyzer.js";

const textarea = document.getElementsByName("user-input")[0];

const list = document.querySelector("ul");
const listItems = list.querySelectorAll("li");

textarea.addEventListener("input", function () {
  const input = textarea.value;

  // WORD COUNT
  const wordCount = analyzer.getWordCount(input);
  listItems[0].innerText = `Palabras: ${wordCount}`;

  // CHARACTER COUNT
  const characterCount = analyzer.getCharacterCount(input);
  listItems[1].innerText = `Caracteres: ${characterCount}`;

  // CHARACTER COUNT EXCLUDING
  const characterCountExcluding = analyzer.getCharacterCountExcludingSpaces(input);
  listItems[2].innerText = `Caracteres sin espacios: ${characterCountExcluding}`;

  // AVERAGE WORDS
  const averageWords = analyzer.getAverageWordLength(input);
  listItems[3].innerText = `Promedio longitud: ${averageWords}`;

  // NUMBER COUNT
  const numberCount = analyzer.getNumberCount(input);
  listItems[4].innerText = `Numeros: ${numberCount}`;

  // NUMBER SUM
  const numberSum = analyzer.getNumberSum(input);
  listItems[5].innerText = `Suma de los numeros: ${numberSum}`;
});
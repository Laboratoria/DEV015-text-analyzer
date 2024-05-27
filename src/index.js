import analyzer from "./analyzer.js";

const textarea = document.getElementsByName("user-input")[0];
const buttonClean = document.getElementById('reset-button');


textarea.addEventListener("input", function () {
  const input = textarea.value;
  
  // WORD COUNT
  const wordCount = analyzer.getWordCount(input);
  const wordCountShow = document.querySelector('[data-testid="word-count"]');
  wordCountShow.innerHTML = `Palabras: ${wordCount}`;
  
  // CHARACTER COUNT
  const characterCount = analyzer.getCharacterCount(input);
  const characterCountShow = document.querySelector('[data-testid="character-count"]');
  characterCountShow.innerHTML = `Caracteres: ${characterCount}`;
  
  // CHARACTER COUNT EXCLUDING
  const characterCountExcluding = analyzer.getCharacterCountExcludingSpaces(input);
  const characterCountExcludingShow = document.querySelector('[data-testid="character-no-spaces-count"]');
  characterCountExcludingShow.innerHTML = `Caracteres sin espacios: ${characterCountExcluding}`;
  
  // AVERAGE WORDS
  const averageWords = analyzer.getAverageWordLength(input);
  const averageWordsShow = document.querySelector('[data-testid="word-length-average"]');
  averageWordsShow.innerHTML = `Promedio longitud: ${averageWords}`;
  
  // NUMBER COUNT
  const numberCount = analyzer.getNumberCount(input);
  const numberCountShow = document.querySelector('[data-testid="number-count"]');
  numberCountShow.innerHTML = `Numeros: ${numberCount}`;
  
  // NUMBER SUM
  const numberSum = analyzer.getNumberSum(input);
  const numberSumShow = document.querySelector('[data-testid="number-sum"]');
  numberSumShow.innerHTML = `Suma de los numeros: ${numberSum}`;
});

buttonClean.addEventListener('click', function(){
  textarea.value='';
});
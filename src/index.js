import analyzer from './analyzer.js';

//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`

const ulElement = document.querySelector("ul");
  
const liElements = ulElement.querySelectorAll("li")

//const ulElement = document.querySelector("ul.metrics:nth-child(1)");

const wordCounterLi = liElements[0];
const charCounterLi = liElements[1];
const numCounterLi = liElements[2];
const charWithoutSpacesCounterLi = liElements[3];
const averageLengthCounterLi = liElements[4];
const sumCounterLi = liElements[5];

//La aplicación registra un Event Listener para escuchar el evento input del <textarea> para actualizar las métricas cuando se haga escriba en el cuadro de texto.
const textArea =document.querySelector("[name='user-input']");

textArea.addEventListener("input", retrieveText);

//La aplicación actualiza el atributo textContent o innerHTML de los <li> que mostrar las métricas del texto.
function retrieveText(){
  const textInput = textArea.value;

  const wordCounter = analyzer.getWordCount(textInput);
  const charCounter = analyzer.getCharacterCount(textInput);
  const charCounterWithoutSpaces = analyzer.getCharacterCountExcludingSpaces(textInput);
  const numberCounter = analyzer.getNumberCount(textInput);
  const averageWordLength = analyzer.getAverageWordLength(textInput);
  //console.log(charCounterWithoutSpaces);

  wordCounterLi.textContent = "Palabras: " + wordCounter;
  charCounterLi.textContent = "Caracteres: " +charCounter;
  numCounterLi.textContent = "Números: " + analyzer.getNumberCount(textInput);
  charWithoutSpacesCounterLi.textContent = "Caracteres sin Espacios: " + charCounterWithoutSpaces;
  averageLengthCounterLi.textContent = "Promedio de Longitud: " + averageWordLength;
}

/*
  querySelectorCalls,
  getElementByIdCalls,
  addEventListenerCalls,
  importStatements,
  textContents,
  innerHTMLs
  */





//La aplicación registra un Event Listener para escuchar el evento click del <button> que limpia el contenido de la caja de texto.
const button = document.getElementById("reset-button");

button.addEventListener("click", clearTextArea);

function clearTextArea(){
    textArea.value = "";

}


import analyzer from './analyzer.js';

//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`

const ulElement = document.querySelector("ul");
  
const liElements = ulElement.querySelectorAll("li")
  
let wordCounterLi = liElements[0];
let charCounterLi = liElements[1];
let numCounterLi = liElements[2];
let charSpacesCounterLi = liElements[3];
let averageLengthCounterLi = liElements[4];
let sumCounterLi = liElements[5];

//La aplicación registra un Event Listener para escuchar el evento input del <textarea> para actualizar las métricas cuando se haga escriba en el cuadro de texto.
const textArea =document.querySelector("[name='user-input']");

textArea.addEventListener("input", retrieveText);

//La aplicación actualiza el atributo textContent o innerHTML de los <li> que mostrar las métricas del texto.
function retrieveText(){
  let textInput = textArea.value;
  console.log("text input: " + textInput);
  let wordCounter = analyzer.getWordCount(textInput);
  console.log("counter of words: " + wordCounter);

  wordCounterLi.textContent = "Palabras " + wordCounter;
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


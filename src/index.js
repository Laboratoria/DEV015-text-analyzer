import analyzer from './analyzer.js';


const textArea=document.querySelector('textarea[name=".user-input"]');

const palabras = document.querySelector("item[data-testid='word-count']");
const caracteres = document.querySelector("item[data-testid='character-count']");
const caracteressinespacio = document.querySelector("item[data-testid='character-no-space-count']");
const numeros = document.querySelector("item[data-testid='numbers']");
const sumanumeros = document.querySelector("item[data-testid='number-sum']");
const longitudpalabra = document.querySelector("item[data-testid='word-length-average']")


const resetButton = document.getElementById("reset-button");
let userInput = document.getElementsByName("user-input")[0];
//console.log(document.getElementsByName("user-input"))
function Limpiar() {
    userInput.value = "";  // Limpiar el textarea
}

resetButton.addEventListener('click', Limpiar);

function actualizar() {
let texto = textArea.value;


let totalpalabras = analyzer.getWordCount(texto);
palabras.textContent = "Palabras: " + totalpalabras;

let totalcaracteres = analyzer.getCharacterCount(texto);
caracteres.textContent = "Caracteres: " + totalcaracteres;

let totalcaracteressinespacio = analyzer.getCharacterCountExcludingSpaces(texto);
caracteressinespacio.textContent = "Caracteres sin Espacio: " + totalcaracteressinespacio;

let totalnumeros = analyzer.getNumbersCount(texto);
numeros.textContent = "Números: " + totalnumeros;

let totalsumanumeros = analyzer.getNumberSum(texto);
sumanumeros.textContent = "Suma Números: " + totalsumanumeros;

let totallongitudpalabra = analyzer.getAverageWordLength(texto);
longitudpalabra.textContent = "Promedio Longitúd Palabra" + totallongitudpalabra; 
}



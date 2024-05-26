import analyzer from './analyzer.js';

//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`

//console.log("si estoy contando");

const textareas = document.getElementsByName("textarea");
const textarea = textareas[0];
//console.log(textarea);

textarea.addEventListener("input",() => {
  
    const wordCount = analyzer.getWordCount(textarea.value); 
    console.log("recuento",wordCount);
});

const resetButton = document.getElementById('reset-buton');

resetButton.addEventListener('click', () => {
    textarea.value = ' '; 
    document.getElementById('wordCount').innerText = '0';
});
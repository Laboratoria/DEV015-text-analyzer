/*
La aplicación usa el selector del DOM querySelector.
La aplicación usa el selector del DOM getElementById.
La aplicación registra un Event Listener para escuchar el evento input del <textarea> para actualizar las métricas cuando se haga escriba en el cuadro de texto.
 La aplicación registra un Event Listener para escuchar el evento click del <button> que limpia el contenido de la caja de texto.
  La aplicación actualiza el atributo textContent o innerHTML de los <li> que mostrar las métricas del texto.
*/

const analyzer = {  
  getWordCount: (text) => {
    //TODO: esta función debe retornar el recuento de palabras que se encuentran en el parámetro `text` de tipo `string`.
    const wordsArray = text.split(" ");
    console.log(wordsArray);
    //property that returns the size of an array as a number(integer).
    const wordsCount = wordsArray.length;
    console.log(wordsCount);
    return wordsCount;
  },
  getCharacterCount: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres que se encuentran en el parámetro `text` de tipo `string`.
  },
  getCharacterCountExcludingSpaces: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres excluyendo espacios y signos de puntuación que se encuentran en el parámetro `text` de tipo `string`.
  },
  getAverageWordLength: (text) => {    
    //TODO: esta función debe retornar la longitud media de palabras que se encuentran en el parámetro `text` de tipo `string`.
  },
  getNumberCount: (text) => {
    //TODO: esta función debe retornar cúantos números se encuentran en el parámetro `text` de tipo `string`.
  },
  getNumberSum: (text) => {
    //TODO: esta función debe retornar la suma de todos los números que se encuentran en el parámetro `text` de tipo `string`.
  },
};

export default analyzer;

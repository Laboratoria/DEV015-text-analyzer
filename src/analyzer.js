const analyzer = {  
  getWordCount: (text) => {
    //TODO: esta función debe retornar el recuento de palabras que se encuentran en el parámetro `text` de tipo `string`.
    const wordsArray = text.split(" ");

    return wordsArray.length;
  },
  getCharacterCount: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres que se encuentran en el parámetro `text` de tipo `string`.
    const charArray = text.split("");

    return charArray.length;
  },
  getCharacterCountExcludingSpaces: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres excluyendo espacios y signos de puntuación que se encuentran en el parámetro `text` de tipo `string`.
    //Las expresiones regulares o regex son patrones usados para buscar combinaciones de carácters en un string.
    //En este caso, el patrón [\p{P}|\s] busca cualquier carácter de puntuación \p{P} o espacio \s de forma global.
    const pattern = /[\p{P}|\s]/gu;

    const newText = text.replaceAll(pattern, "");

    return newText.length;
  },
  getAverageWordLength: (text) => {    
    //TODO: esta función debe retornar la longitud media de palabras que se encuentran en el parámetro `text` de tipo `string`.
    const wordsArray = text.split(" ");
    let sum = 0;

    for (let i = 0; i < wordsArray.length; i++) {
      sum += wordsArray[i].length;
    }

    return sum/wordsArray.length;
  },
  getNumberCount: (text) => {
    //TODO: esta función debe retornar cúantos números se encuentran en el parámetro `text` de tipo `string`.

  },
  getNumberSum: (text) => {
    //TODO: esta función debe retornar la suma de todos los números que se encuentran en el parámetro `text` de tipo `string`.
  },
};

export default analyzer;

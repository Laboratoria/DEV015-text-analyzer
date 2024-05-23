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
    //En este caso, el patrón [\p{P}|\s] representa los carácter de puntuación \p{P} o espacios \s de forma global en todo el texto.

    /*
    / Inicio de patrón
    [] conjunto, coincide todos los caracteres dentro de los corchetes
    \p{P} patrón Unicode coincide todos los caracteres de puntuación
    | operador OR, coincide con uno de los dos patrones
    \s coincide con cualquier carácter de espacio en blanco
    / Final de patrón
    g bandera global, busca en todo el texto
    u bandera unicode, busca en texto unicode
    */ 
    const pattern = /[\p{P}|\s]/gu;

    const newText = text.replace(pattern, "");
    return newText.length;
  },
  getAverageWordLength: (text) => {    
    //TODO: esta función debe retornar la longitud media de palabras que se encuentran en el parámetro `text` de tipo `string`.
    const wordsArray = text.split(" "); 
    let sum = 0;

    for (let i = 0; i < wordsArray.length; i++) {
      sum += wordsArray[i].length;
    }
    const average = sum/wordsArray.length;

    return average;
  },
  getNumberCount: (text) => {
    //TODO: esta función debe retornar cúantos números se encuentran en el parámetro `text` de tipo `string`.
    const textArray = text.split(" ");
    let counter = 0;
    //A 5 1.3 789 cat b21 3cdog 1.2b
    for (let i = 0; i < textArray.length; i++) {
      //if textArray[i] string is an interger, parse it to an integer
      if (textArray[i]){
        counter++;
      }
      //elseif textArray[i] string is a float, parse it to a float
      //else continue
    }

  },
  getNumberSum: (text) => {
    //TODO: esta función debe retornar la suma de todos los números que se encuentran en el parámetro `text` de tipo `string`.
    const textArray = text.split(" ");
    
  },
};

export default analyzer;

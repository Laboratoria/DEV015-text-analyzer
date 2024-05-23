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
    /*
    Las expresiones regulares o regex son patrones usados para buscar combinaciones de carácters en un string.
    En este caso, el patrón [\p{P}|\s] representa los carácter de puntuación \p{P} o espacios \s de forma global en todo el texto.
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
    /* 
      ✕ should return 5.53 for "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." 
      Expected: 5.53
      Received: "5.53"
    */
    const wordsArray = text.split(" "); 
    let sum = 0;

    for (let i = 0; i < wordsArray.length; i++) {
      sum += wordsArray[i].length;
    }
    const average = sum/wordsArray.length;

    if(!Number.isInteger(average)){
      return average.toFixed(2);
    }
    else{
      return average;
    }
  },
  getNumberCount: (text) => {
    //TODO: esta función debe retornar cúantos números se encuentran en el parámetro `text` de tipo `string`.
    /* 
      ✕ should return 0 for "This is not a number: 41u0003jot"
      Expected: 0
      Received: 3
      ✕ should return 3 for "Calculate the sum of 1.65 plus 0.15 plus 1.10."
      Expected: 3
      Received: 7  
    */
    let counter = 0;
    
    for (let i = 0; i < text.length; i++) {
      if (Number(text[i])){
        counter++;
      }
    }
    return counter;

  },
  getNumberSum: (text) => {
    //TODO: esta función debe retornar la suma de todos los números que se encuentran en el parámetro `text` de tipo `string`.
    /* 
      ✕ should return 0 for "This is not a number: 41u0003jot"
      Expected: 0
      Received: 8
      ✕ should return 2.9 for "Calculate the sum of 1.65 plus 0.15 plus 1.10."
      Expected: 2.9
      Received: 20
    */
    let numTotal = 0;
    
    for (let i = 0; i < text.length; i++) {
      if (Number(text[i])){
        numTotal += Number(text[i]);
      }
    }
    return numTotal;
    
  },
};

export default analyzer;

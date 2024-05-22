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
    const pattern = /[\p{P}\s]/gu;
    //<---OH:

    const newText = text.replace(pattern, "").length;
    console.log(newText);
    return newText;
  },
  getAverageWordLength: (text) => {    
    //TODO: esta función debe retornar la longitud media de palabras que se encuentran en el parámetro `text` de tipo `string`.
    const wordsArray = text.split(" "); //<---OH:Aquí hago lo mismo que en la línea 4, estaría bien intentar llamar la función aquí dentro de otra función
    let sum = 0;

    for (let i = 0; i < wordsArray.length; i++) {
      sum += wordsArray[i].length;
    }

    return sum/wordsArray.length;
  },
  getNumberCount: (text) => {
    //TODO: esta función debe retornar cúantos números se encuentran en el parámetro `text` de tipo `string`.
    const pattern = /[0-9]/g;
    const numberArray = text.match(pattern);

    return numberArray.length;
  },
  getNumberSum: (text) => {
    //TODO: esta función debe retornar la suma de todos los números que se encuentran en el parámetro `text` de tipo `string`.
  },
};

export default analyzer;

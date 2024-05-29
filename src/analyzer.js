

const analyzer = {
  getWordCount: (text) => {
    //TODO: esta función debe retornar el recuento de palabras que se encuentran en el parámetro `text` de tipo `string`.
    // Eliminar los espacios al principio y al final del texto
    text = text.trim();

    // Si el texto está vacío, retornar 0
    if (text === '') {
      return 0;
    }

    // Dividir el texto en palabras usando cualquier cantidad de espacios como separador, dentro de (actua como si fuese tijeras) en este caso esta cortando los signos .?-,;
    const words = text.split(/\b\w+\b/g);

    // Retornar la cantidad de palabras
    return words.length;
  },



  getCharacterCount: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres que se encuentran en el parámetro `text` de tipo `string`.
    let string = "";
    let numero_de_caracteres = text.length;
    return numero_de_caracteres
  },




  getCharacterCountExcludingSpaces: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres excluyendo espacios y signos de puntuación que se encuentran en el parámetro `text` de tipo `string`.

  // Verificar si el texto es una cadena válida
  if (typeof text !== 'string') {
    return 0;
  }

  // Inicializar un contador para los caracteres válidos
  let count = 0;

  // Recorrer cada carácter en el texto
  for (let i = 0; i < text.length; i++) {
    const char = text[i];

    // Verificar si el carácter es alfanumérico (letra o número)
    if (char.match(/[\w]/)) {
      count++;
    }
  }

  // Retornar el número de caracteres válidos
  return count;
  },








  getAverageWordLength: (text) => {
    //TODO: esta función debe retornar la longitud media de palabras que se encuentran en el parámetro `text` de tipo `string`.
       // Verificar si el texto es una cadena válida
       if (typeof text !== 'string') {
        return 0;
      }
  
      // Eliminar los espacios al principio y al final del texto
      text = text.trim();
  
      // Si el texto está vacío, retornar 0
      if (text === '') {
        return 0;
      }
  
      // Dividir el texto en palabras usando espacios como separador
      const words = text.split(/\s+/);
  
      // Si no hay palabras, retornar 0
      if (words.length === 0) {
        return 0;
      }
  
      // Calcular el total de caracteres en las palabras
      let totalCharacters = 0;
      for (let word of words) {
        totalCharacters += word.length;
      }
  
      // Calcular y retornar la longitud media de las palabras
      return totalCharacters / words.length;
    },


getNumberCount : (text) => {
    //TODO: esta función debe retornar cúantos números se encuentran en el parámetro `text` de tipo `string`.

      const numbers = text.match(/-?\d+(\.\d+)?/g);
      if (numbers === null) {
        return 0;
      }

      return numbers.length;
    },



  getNumberSum: (text) => {
    //TODO: esta función debe retornar la suma de todos los números que se encuentran en el parámetro `text` de tipo `string`.
    
    // Buscar todos los números en el texto
    const numbers = text.match(/-?\d+(\.\d+)?/g);

    // Si no se encuentran números, retornar 0
    if (numbers === null) {
      return 0;
    }

    // Convertir los números a formato numérico y sumarlos
    const sum = numbers.reduce((acc, num) => acc + parseFloat(num), 0);

    return sum;

  },
};

export default analyzer;

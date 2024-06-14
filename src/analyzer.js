const analyzer = {
 
  getWordCount: (text) => {
    text = text.trim(); // Elimina espacios en blanco al principio y al final
    if (text === '') return 0; // Si el texto está vacío, devuelve 0
    return text.split(/\s+/).length; // Divide el texto en palabras y devuelve la cantidad de palabras
  },
  
  getCharacterCount: (text) => {
    return text.length; //Devuelve la longitud del texto, que es el número total de caracteres, incluidos espacios y signos de puntuación.//
  },
  
  getCharacterCountExcludingSpaces: (text) => {
    let count = 0;
    for (let i = 0; i < text.length; i++) { // La función recorre cada carácter del texto.
      if (text[i] !== ' ' && text[i] !== ',' && text[i] !== '.') { // Si el carácter no es un espacio (' '), incrementa el contador.
        count++;
      }
    }
    return count; // Devuelve el total de caracteres que no son espacios.//
  },
  
  getNumberCount: (text) => {
    const numbers = text.match(/\b\d+(\.\d+)?\b/g); //encuentra todas las secuencias de dígitos en el texto, incluyendo números decimales.//
    if (numbers) {
      return numbers.length; //Si se encuentran números, devuelve su cantidad.//
    } else {
      return 0; //Si no se encuentran números, devuelve 0.//
    }
  },

  getNumberSum: (text) => {
    const numbers = text.match(/\b\d+(\.\d+)?\b/g); // Encuentra solo números enteros
    let sum = 0; //inicia suma en 0//
    if (numbers) {
      for (let i = 0; i < numbers.length; i++) { //Si numbers no es null, recorre cada número en el array numbers y lo suma a sum después de convertirlo a un número usando el operador unario +//
        sum += +numbers[i]; // Convierte la cadena a número usando el operador +
      }
    }
    return sum;
  },
  
  getAverageWordLength: (text) => {
    const words = text.trim().split(/\s+/); // Divide el texto en palabras, eliminando espacios innecesarios.
    let totalLength = 0;
    let validWordCount = 0;

    for (let i = 0; i < words.length; i++) { // Usa un bucle for para recorrer cada palabra.
      const word = words[i];                  // este bucle for recorre cada palabra y va actualizando el totalLength y validwordcount //  
      if (word.length > 0) {                  // si el lugar no esta vacío//
        totalLength += word.length;
        validWordCount++;
      }
    }
    let avgWordLength;    //bucle que calcula la longitud media de la palabra//
    if (validWordCount > 0) { //verifica si el numero de palabras validas es mayor que 0//
      avgWordLength = totalLength / validWordCount; //Calcula long. de las palabras dividiendo la long.total de todas las palabras, por el número de palabras válidas.//
    } else {  
      avgWordLength = 0;
    }//Si no hay palabras válidas, establece la longitud media de las palabras como 0.//S

    return Number(avgWordLength.toFixed(2)); //formatea resultado y o devuelve, además de manejar los decimales que se pueden visualizar//
  }
};

export default analyzer;
const analyzer = {  

  getWordCount: (text) => {
      let palabras = 0
      for (let i = 0; i <text.length; i++) {  //ver arrays el for e if no es
        if(i === 0  (text[i - 1]) === " ") {
          palabras++; 
          console.log(palabras)
        }
      }
      return palabras;
    //TODO: esta función debe retornar el recuento de palabras que se encuentran en el parámetro `text` de tipo `string`.
  },
 // getCharacterCount: (text) => {
   // return text.length
    //TODO: esta función debe retornar el recuento de caracteres que se encuentran en el parámetro text de tipo string.
  },
  ///getCharacterCountExcludingSpaces; (text) => {
    //TODO: esta función debe retornar el recuento de caracteres excluyendo espacios y signos de puntuación que se encuentran en el parámetro `text` de tipo `string`.
 // },
  //getAverageWordLength; (text) => {    
    //TODO: esta función debe retornar la longitud media de palabras que se encuentran en el parámetro `text` de tipo `string`.
  //},
  //getNumberCount; (text) => {
    //TODO: esta función debe retornar cúantos números se encuentran en el parámetro `text` de tipo `string`.
 // },
  //getNumberSum; (text) => {
    //TODO: esta función debe retornar la suma de todos los números que se encuentran en el parámetro `text` de tipo `string`.
  //},
};


export default analyzer;
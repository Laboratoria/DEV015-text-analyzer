import analyzer from "./analyzer.js";

document.addEventListener('DOMContentLoaded', () => { //Este evento asegura que el código dentro de la función no se ejecute hasta que el documento HTML se haya cargado completamente.//
  const textArea = document.querySelector('textarea[name="user-input"]'); 

  const palabras = document.querySelector('li[data-testid="word-count"]');
  const caracters = document.querySelector('li[data-testid="character-count"]');
  const caractersinespacio = document.querySelector('li[data-testid="character-no-spaces-count"]');
  const numeros = document.querySelector('li[data-testid="number-count"]');
  const sumanumeros = document.querySelector('li[data-testid="number-sum"]');
  const longitudpalabra = document.querySelector('li[data-testid="word-length-average"]');
  const resetButton = document.getElementById('#reset-button'); // Usando el selector de ID

  const updateMetrics = () => { //Actualiza el contenido de los elementos li con las métricas obtenidas.//
    const text = textArea.value;
  
    const conteoPalabras = analyzer.getWordCount(text);
    palabras.textContent = `Palabras: ${conteoPalabras}`;
  
    const conteoCaracter = analyzer.getCharacterCount(text);    //$ se usa como un alias para acceder al objeto principal de la biblioteca.//
    caracters.textContent = `Caracteres: ${conteoCaracter}`;        //para seleccionar un elemento del DOM//
        
    const conteoCaracterSinEspacio = analyzer.getCharacterCountExcludingSpaces(text);
    caractersinespacio.textContent = `Caracteres sin Espacios: ${conteoCaracterSinEspacio}`;
   
    const conteoNumeros = analyzer.getNumberCount(text);
    numeros.textContent = `Números: ${conteoNumeros}`;
   
    const conteoSumaNumeros = analyzer.getNumberSum(text);
    sumanumeros.textContent = `Suma Números: ${conteoSumaNumeros}`;
   
    const conteoLongitudPalabra = analyzer.getAverageWordLength(text);
    longitudpalabra.textContent = `Promedio Longitud Palabras: ${conteoLongitudPalabra.toFixed(2)}`; //ayuda a formatear con una cantidad especifica de decimales, en este caso 3//
  };

  textArea.addEventListener('input', updateMetrics);

  resetButton.addEventListener('click', () => {
    textArea.value = '';
    updateMetrics(); // Actualizar métricas después de limpiar el textarea
  });
  
    
  
});

const analyzer = {  
  getWordCount: (text) => {
    if (text.trim() === "") {
      return 0;
    }
    const words = text.trim().split(/\s+/);
    return words.length;
  },

  getCharacterCount: (text) => {
    const characters = text.split('');
    return characters.length;
  },

  getCharacterCountExcludingSpaces: (text) => {
    const charactersExcluding = text.replace(/[^\w]|_/g, '');
    return charactersExcluding.length;
  },

  getAverageWordLength: (text) => {
    const words = text.trim().split(/\s+/);
    const characters = text.replace(/[^\w]|_/g, '');

    const wordsSize = words.length;

    const charactersSize = characters.length;

    return charactersSize/wordsSize;
  },

  getNumberCount: (text) => {
    const numbers = text.match(/-?\d+(\.\d+)?/g);

    if (numbers === null) {
      return 0; 
    }
    
    return numbers.length;
    
  },
  
  getNumberSum: (text) => {
    const numbers = text.match(/-?\d+(\.\d+)?/g);
    if (numbers === null) {
      return 0; 
    }
    
    let sum = 0;
    
    for ( let i = 0; i<numbers.length; i++){
      let number = Number(numbers[i])
      sum = sum + number;
    }
    
    return sum;
  },
};

export default analyzer;

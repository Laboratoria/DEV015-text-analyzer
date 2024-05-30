const analyzer = {
  getWordCount: (text) => {
    text = text.trim();
    if (text === '') {
      return 0;
    }
    const words = text.split(/\s+/);
    return words.length;
  },
  getCharacterCount: (text) => {
    let string = "";
    let numero_de_caracteres = text.length;
    return numero_de_caracteres
  },
  getCharacterCountExcludingSpaces: (text) => {
  if (typeof text !== 'string') {
    return 0;
  }
  let count = 0;
  for (let i = 0; i < text.length; i++) {
    const char = text[i];
    if (char.match(/[\w]/)) {
      count++;
    }
  }
  return count;
  },
  getAverageWordLength: (text) => {
       if (typeof text !== 'string') {
        return 0;
      }
      text = text.trim();
      if (text === '') {
        return 0;
      }
      const words = text.split(/\s+/);
      if (words.length === 0) {
        return 0;
      }
      let totalCharacters = 0;
      for (let word of words) {
        totalCharacters += word.length;
      }
      return totalCharacters / words.length;
    },
getNumberCount : (text) => {
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
    const sum = numbers.reduce((acc, num) => acc + parseFloat(num), 0);
    return sum;
  },
};


export default analyzer;

import analyzer from './analyzer.js';

const textarea = document.getElementsByName("user-input")[0];

textarea.addEventListener("input", function() {
//   console.log("values " +textarea.value);
    const input = textarea.value;

    const wordCount = analyzer.getWordCount(input);
    // console.log(`palabras: ${wordCount}`);

    const characterCount = analyzer.getCharacterCount(input);
    // console.log(`caracteres: ${characterCount}`);

    const characterCountExcluding = analyzer.getCharacterCountExcludingSpaces(input);
    // console.log(`caracteres sin espacios ${characterCountExcluding}`);

    const averageWords = analyzer.getAverageWordLength(input);
    // console.log(`promedio ${averageWords}`)

    const numberCount = analyzer.getNumberCount(input);
    // console.log(`numeros ${numberCount}`);

    const numberSum = analyzer.getNumberSum(input);
    // console.log(`suma ${numberSum}`);
});

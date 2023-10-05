import analyzer from "./analyzer.js";

const textarea = document.querySelector('textarea[name="user-input"]');
const wordCountElement = document.querySelector('[data-testid="word-count"]');
const characterCountElement = document.querySelector('[data-testid="character-count"]');
const characterNoSpacesCountElement = document.querySelector('[data-testid="character-no-spaces-count"]');
const numberCountElement = document.querySelector('[data-testid="number-count"]');
const numberSumElement = document.querySelector('[data-testid="number-sum"]');
const wordLengthAverageElement = document.querySelector('[data-testid="word-length-average"]');
const resetButton = document.getElementById("reset-button");

function actualizarElementos(wordCount, characterCount, characterNoSpacesCount, numberCount, numberSum, wordLengthAverage) {
  wordCountElement.textContent = `Palabras: ${wordCount}`;
  characterCountElement.textContent = `Caracteres: ${characterCount}`;
  characterNoSpacesCountElement.textContent = `Caracteres Sin Espacio: ${characterNoSpacesCount}`;
  if (numberCount === 0) {
    numberCountElement.textContent = "Números: 0";
    numberSumElement.textContent = "Suma Números: 0";
  } else {
    numberCountElement.textContent = `Números: ${numberCount}`;
    numberSumElement.textContent = `Suma Números: ${numberSum}`;
  }
  wordLengthAverageElement.textContent = `Promedio Longitud: ${wordLengthAverage.toFixed(
    2
  )}`;
}

function metricas() {
  const texto = textarea.value;
  const wordCount = analyzer.getWordCount(texto);
  const characterCount = analyzer.getCharacterCount(texto);
  const characterNoSpacesCount = analyzer.getCharacterCountExcludingSpaces(texto);
  const numberCount = analyzer.getNumberCount(texto);
  const numberSum = analyzer.getNumberSum(texto);
  const wordLengthAverage = analyzer.getAverageWordLength(texto);
  actualizarElementos(wordCount, characterCount, characterNoSpacesCount, numberCount, numberSum, wordLengthAverage);
}

textarea.addEventListener("input", metricas);
resetButton.addEventListener("click", function () {
  if (textarea.value === "") {
    alert("Ingresa un texto.");
  } else {
    textarea.value = "";
    metricas();
  }
});
metricas();
    
    

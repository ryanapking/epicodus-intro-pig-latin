function addAY(inputWord) {
  return (inputWord + "ay");
};

function isVowel(inputLetter) {
    var vowelArray = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
    if (vowelArray.includes(inputLetter)) {
      return true;
    }
    return false;
};

function startingLetters(inputWord) {
  var consonantString = "";
  var wordArray = inputWord.split("");
  if (isVowel(wordArray[0])) {
    return "vowel";
  } else {
    consonantString = wordArray[0];
    for (i = 1; i < wordArray.length; i++) {
      if (!isVowel(wordArray[i])) {
        consonantString = consonantString + wordArray[i];
      } else {
        if (wordArray[i-1] === "q" || wordArray[i-1] === "Q") {
          if (wordArray[i] === "u" || wordArray[i] === "U") {
            consonantString = consonantString + wordArray[i];
          }
        }
        return consonantString;
      }
    }
    return consonantString;
  }
  //maybe deal with "qu" here?
};

function moveConsonants(inputWord, consonantString) {
  inputWord = inputWord.slice(consonantString.length);
  inputWord = inputWord + consonantString;
  return inputWord;
  // add consonantString to end of inputWord
  // remove consonantString from beginning of inputWord
  //""
};

function separateWords(inputString) {
  var sentenceArray = inputString.split(" ");
  return sentenceArray;
  // splits it into words, storing each word in a single array
  // returns the array
};

function sentenceAssembler(sentenceArray) {
  var modifiedSentenceArray = sentenceArray.map(function(word) {
    var consonantString = startingLetters(word);
    if (consonantString !== "vowel") {
      word = moveConsonants(word, consonantString);
    }
    word = addAY(word);
    return word;
  });
  return modifiedSentenceArray;
};

$(document).ready(function() {
  $("#sentence").submit(function(event) {
    var inputWord = $("#sentenceInput").val();
    var sentenceArray = separateWords(inputWord);
    debugger;
    // the below statement isn't currently working
    var modifiedSentenceArray = sentenceAssember(sentenceArray);
    debugger;
    // var consonantString = startingLetters(inputWord);
    // if (consonantString !== "vowel") {
    //   inputWord = moveConsonants(inputWord, consonantString);
    // }
    // inputWord = addAY(inputWord);
    // $("#result").text(inputWord);
    event.preventDefault();
  });
});

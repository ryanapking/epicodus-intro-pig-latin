function addAY(inputWord) {
  return (inputWord + "ay");
};

function isVowel(inputLetter) {
    var vowelArray = ["a", "e", "i", "o", "u"];
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
  // splits it into words, storing each word in a single array
  returns // the array
};

function addAY(inputWord) {
  var wordArray = inputWord.split("");
  if (isNaN(wordArray[0])) {
    return (inputWord + "ay");
  }
  return inputWord;
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
  if (!isNaN(wordArray[0])) {
    return consonantString;
  }
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
    word = fixPunctuation(word);
    word = word.toLowerCase();
    return word;
  });
  return modifiedSentenceArray;
};

function fixPunctuation(word) {
  var punctuationArray = [",", ".", "!", "?", ";", ":"];
  var punctuationIndex = [];

  punctuationArray.forEach(function(punctuation) {
    var test = word.indexOf(punctuation);
    punctuationIndex.push(test);
  })
  punctuationIndex.forEach(function(index) {
    if (index !== -1 && index !== word.length) {
      word = word.slice(0, index) + word.slice(index+1, word.length) + word.slice(index, index+1);
    }
  })
  return word;
}

function fixCapitalization(outputString, index) {
  var punctuationArray = [".", "?", "!"];
  var punctuationIndex = [];
  var newIndex = index;
  debugger;
  punctuationArray.forEach(function(punctuation) {
    var test = outputString.indexOf(punctuation, index);
    punctuationIndex.push(test);
  });

  if (punctuationIndex[0] !== -1 && punctuationIndex[1] !== -1 && punctuationIndex[2] !== -1) {
    return outputString;
  }

  punctuationIndex.forEach(function(i) {
    if (i !== -1) {
      outputString = outputString.slice(0, i+2) + outputString.slice(i+2, i+3).toUpperCase() +  outputString.slice(i+3, outputString.length);
    }
    if (i !== -1 && i < newIndex) {
      newIndex = i;
    }
  });
  outputString = fixCapitalization(outputString, newIndex);
}

$(document).ready(function() {
  $("#sentence").submit(function(event) {
    var inputWord = $("#sentenceInput").val();
    var sentenceArray = separateWords(inputWord);
    var modifiedSentenceArray = sentenceAssembler(sentenceArray);
    var displaySentence = modifiedSentenceArray.join(" ");
    displaySentence = fixCapitalization(displaySentence, 0);
    $("#result").append("<p>" + displaySentence + "</p>");
    $("#sentenceInput").val("");
    event.preventDefault();
  });
  $("#clear").click(function() {
    $("#result").text("");
  })
});

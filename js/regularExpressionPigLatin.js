var pigLatin = function(stringToPigLatinize) {
  stringToPigLatinize = stringToPigLatinize.toLowerCase();
  var stringToPigLatinizeA = stringToPigLatinize.split(" ");
  var resultsArray = [];

  stringToPigLatinizeA.forEach(function(word) {
    resultsArray.push(wordTransform(word));
  })

  var results = resultsArray.join(" ");
  results = results.charAt(0).toUpperCase() + results.slice(1);
  return results;
};

var beginningPunctuationTest = function(word){
  var punctuation = /(\W)/g;
  punctuation = punctuation.exec(word);
  if (punctuation !== null && punctuation.index === 0){
    return punctuation[0];
  } else {
  return "";
  }
};


var endPunctuationTest = function(word){
  var reverseWord = word.split("").reverse().join("");
  var punctuation = /(\W)/g;
  punctuation = punctuation.exec(reverseWord);
  if (punctuation !== null && punctuation.index === 0){
    return punctuation[0];
  } else {
    return "";
  }
};

var wordTransform = function(word){
  var beginningPunctuation = '';
  var endPunctuation = '';

  while (endPunctuationTest(word) !== ""){
    endPunctuation += word.charAt(word.length-1);
    word = word.slice(0, -1);
  }


  while (beginningPunctuationTest(word) !== ""){
    beginningPunctuation += word.charAt(0);
    word = word.slice(1);
  }

  var initialvowel = /^[aeiou]/i;

  if (initialvowel.exec(word) === null) {
    var vowels = /[aeiouy]/gi ;
    var result = vowels.exec(word);
    while((result[0] === "u" && result.input.charAt(result.index-1) === "q" ) || result.index === 0) {
      result = vowels.exec(word);
    }
    word = word.slice(result.index) + word.slice(0,result.index);
  }
  return beginningPunctuation + word + 'ay' + endPunctuation;
};

$(document).ready(function() {
  $('#pigPic').hide();
  $('form#pLatin').submit(function(event) {
    event.preventDefault();
    var wordInput = $('input#pLatinString').val();
    var result = pigLatin(wordInput);
    $('#result').append('<p>'+ result +'</p>');
    $('#pigPic').show();
    this.reset();
  });
});

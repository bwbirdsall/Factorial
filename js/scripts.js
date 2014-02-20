var Factorial = function(number) {
  if (number < 0 || isNaN(number) || number % 1 !== 0) {
    return "Cannot compute factorial for negative numbers, non-integers, or non-numbers!";
  } else if (number < 2) {
    return 1;
  } else {
    for(var i = number; i > 1; i--) {
      number *= i-1;
    }
    return number;
  }
};

// $(document).ready(function() {
//   $('#pigPic').hide();
//   $('form#pLatin').submit(function(event) {
//     event.preventDefault();
//     var wordInput = $('input#pLatinString').val();
//     var result = pigLatin(wordInput);
//     $('#result').append('<p>'+ result +'</p>');
//     $('#pigPic').show();
//     this.reset();
//   });
// });

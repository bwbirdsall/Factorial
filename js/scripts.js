var Factorial = function(number) {
  if (number === 0 || number === 1) {
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

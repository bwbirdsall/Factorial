var Factorial = function(number) {
  if (number < 0 || isNaN(number) || number % 1 !== 0) {
    return "Cannot compute factorial for negative numbers, non-integers, or non-numbers!";
  } else if (number < 2) {
    return 1;
  } else {
    return number * Factorial(number-1);
  }
};

$(document).ready(function() {
  $('#exclamationMark').hide();
  $('form#factorial').submit(function(event) {
    event.preventDefault();
    var numberInput = $('input#inputNumber').val();
    var result = Factorial(numberInput);
    $('#result').append('<p>'+ result +'</p>');
    $('#exclamationMark').show();
    this.reset();
  });
});

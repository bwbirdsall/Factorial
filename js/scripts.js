var fibonacci = function(number) {
  if (number < 0 || isNaN(number) || number % 1 !== 0) {
    return "Cannot compute factorial for negative numbers, non-integers, or non-numbers!";
  } else {
    return 0;
  }  
};

$(document).ready(function() {
  $('#exclamationMark').hide();
  $('form#factorial').submit(function(event) {
    event.preventDefault();
    var numberInput = $('input#inputNumber').val();
    var result = factorial(numberInput);
    $('#result').text(result);
    $('#exclamationMark').show();
    this.reset();
  });
});

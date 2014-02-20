var factorial = function(number) {
  if (number < 0 || isNaN(number) || number % 1 !== 0) {
    return "Cannot compute factorial for negative numbers, non-integers, or non-numbers!";
  } else if (number < 2) {
    return 1;
  } else {
    return number * factorial(number - 1);
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

var fibonacci = function(number) {
  if (isBadInput(number)) {
    return "Cannot compute Fibonacci sequence for non-positive positions, non-integers, or non-numbers!";
  } else {
    return sequence(number);
  }
};

var isBadInput = function(number) {
  return (number < 1 || isNaN(number) || number % 1 !== 0);
};

var sequence = function(index){
  var fibonacciSequence = [0,1];
  for (var i = 1; i <= index - 2; i++) {
    fibonacciSequence.push(fibonacciSequence[i - 1] + fibonacciSequence[i]);
  }
  return fibonacciSequence[index - 1];
};

// var sequence = function(index) {
//   if (index === 1) {
//     return 0;
//   } else if (index === 2) {
//     return 1;
//   } else {
//     return sequence(index - 1) + sequence(index - 2); 
//   }
// };

$(document).ready(function() {
  $('#fibonacciNautilus').hide();
  $('form#fibonacci').submit(function(event) {
    event.preventDefault();
    var numberInput = $('input#inputNumber').val();
    var result = fibonacci(numberInput);
    $('#result').text(result);
    $('#fibonacciNautilus').show();
    this.reset();
  });
});


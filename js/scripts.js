var cryptosquare = function(string) {
  
};

$(document).ready(function() {
  $('#cryptosquareImage').hide();
  $('form#cryptosquare').submit(function(event) {
    event.preventDefault();
    var numberInput = $('input#inputNumber').val();
    var result = fibonacci(numberInput);
    $('#result').text(result);
    $('#cryptosquareImage').show();
    this.reset();
  });
});


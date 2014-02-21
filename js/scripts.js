var cryptosquare = function(string) {
  string = string.toLowerCase();
  string = removeSpacesAndPunc(string);
  var squareNoColumns = boxSize(string);
  string = encode(string, squareNoColumns);
  return insertSpaces(string);
};

var removeSpacesAndPunc = function(string) {
  var regEx = /\W/g;
  return string = string.replace(regEx, "");
};

var boxSize = function(string) {
  return Math.ceil(Math.sqrt(string.length));
};

var encode = function(string, columns) {
  var box = [];
  var encodedString = "";

  while (string.length > 0) {
    box.push(string.slice(0,columns));
    string = string.slice(columns);
  }

  for(var i = 0; i < columns; i++){
    for(var j = 0; j < box.length; j++) {
      encodedString += box[j].charAt(i);
    }
  }
  return encodedString;
};

var insertSpaces = function(string) {
  var regEx = /(\w{5})/g;
  return string = string.replace(regEx, "$1 ");
};


$(document).ready(function() {
  $('form#cryptosquare').submit(function(event) {
    event.preventDefault();
    var string = $('input#inputString').val();
    var result = cryptosquare(string);
    $('#result').text(result);
    this.reset();
  });
});


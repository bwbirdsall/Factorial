describe('cryptosquare',function() {
  it('should return a valid cryptosquare', function() {
   cryptosquare("aaaa").should.equal("aaaa");
  });
});

describe('removeSpacesAndPunc',function() {
  it('should return "nospaces" for "no spaces!"', function() {
   removeSpacesAndPunc("no spaces!").should.equal("nospaces");
  });
});

describe('boxSize',function() {
  it('should return proper column number for given string\'s length', function() {
   boxSize("nospacesnospacesa").should.equal(5);
  });
});

describe('encode',function() {
  it('should return proper box spacing for a string and column number', function() {
   encode("nospacesnospacesa", 5).should.equal("ncssoepassapncaoe");
  });
});

describe('insertSpaces',function() {
  it('should place spaces in a string every five characters', function() {
   insertSpaces("nospacesnospacesa").should.equal("nospa cesno space sa");
  });
});

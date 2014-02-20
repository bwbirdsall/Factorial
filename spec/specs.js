describe('punctuationTest',function(){
  it('should return 1 for 1', function(){
    Factorial(1).should.equal(1);
  });
  
  it('should return 1 for 0', function(){
    Factorial(0).should.equal(1);
  });


  it('should return 6 for 3', function(){
    Factorial(3).should.equal(6);
  });
});

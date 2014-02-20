describe('Factorial',function(){
  it('should return 1 for 1', function(){
    Factorial(1).should.equal(1);
  });
  
  it('should return 1 for 0', function(){
    Factorial(0).should.equal(1);
  });


  it('should return 6 for 3', function(){
    Factorial(3).should.equal(6);
  });

  it('should return error message for negative number', function(){
    Factorial(-3).should.equal("Cannot compute factorial for negative numbers, non-integers, or non-numbers!");
  });

  it('should return error message for non-number', function(){
    Factorial("Problem!").should.equal("Cannot compute factorial for negative numbers, non-integers, or non-numbers!");
  });

  it('should return error message for non-integers', function(){
    Factorial(3.5).should.equal("Cannot compute factorial for negative numbers, non-integers, or non-numbers!");
  });

});

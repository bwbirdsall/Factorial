describe('factorial',function() {
  it('should return 1 for 1', function() {
    factorial(1).should.equal(1);
  });
  
  it('should return 1 for 0', function() {
    factorial(0).should.equal(1);
  });

  it('should return 6 for 3', function() {
    factorial(3).should.equal(6);
  });

  it('should return error message for negative number', function() {
    factorial(-3).should.equal("Cannot compute factorial for negative numbers, non-integers, or non-numbers!");
  });

  it('should return error message for non-number', function() {
    factorial("Problem!").should.equal("Cannot compute factorial for negative numbers, non-integers, or non-numbers!");
  });

  it('should return error message for non-integers', function() {
    factorial(3.5).should.equal("Cannot compute factorial for negative numbers, non-integers, or non-numbers!");
  });

});

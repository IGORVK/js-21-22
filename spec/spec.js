

var testObj = require('../js/testScriptPow.js');

describe("testObj", function() {
  it("test function involution()", function() {
      
      //prepare
      var result;
      
    
      
      //act
      result = testObj.involution(2,3);
           
      
      //assert
    expect(result).toBe(8);
   
  });
   
});
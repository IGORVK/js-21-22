 var testObj = {involution : function  (num,st){
           
           //var strNum = prompt('Введите число: ');//undefined in Node.js
           //var num = +strNum;
           var result = num;
           
          // var strSt = prompt('Введите степень числа: ');//undefined in Node.js
           //var st = +strSt;
          
           for (var i=1; i<st; i++){
               result *= num;
           }
           
           return result;
    }};
        
  module.exports = testObj;
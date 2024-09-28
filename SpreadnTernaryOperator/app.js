
document.write('Simple copying form orginal')

var even10 = [2,4,6,8,10];
var even8 = even10;
                   even8.pop();
document.write('Even8: '+ even8 +'<br>');
document.write('Even10: '+even10  +'<br> <br>' );


document.write('Now by Spread Operator  <br><br> ' );     //Spread Operator
var even10 = [2,4,6,8,10];
var even8 = [...even10];                         
                        even8.pop();
document.write('Even8: '+ even8 +'<br>');
document.write('Even10: '+even10  +'<br><br>' );


document.write('Ternary Operaor [if/else] <br>');      //Ternary Operator
var num1 = +prompt('Enter Number 2 or anyone');

num1===2 ? document.write('Number is 2 (Even) <br><br>') :
document.write('Number is not 2 nor 3 (Not even) <br><br>');


document.write('Ternary Operaor [Nested if/else] <br>');
var num2 = +prompt('Enter Number 2 or 3');

num2===2 ? document.write('Number is 2 (Even) <br><br>') : 
num2===3 ? document.write('Number is 3 (Odd) <br><br>') :
document.write('Number is not either 2 nor 3(Another number) <br><br>');









//In certain situations, JavaScript automatically converts one data type to another (to the right type). This is known as implicit conversion.

//IMPLICIT CONVERSION TO STRING
// Numeric string used with + gives String Type

let result;

result = '3' + 2
console.log(result)//'32'

result ='3'+ true
console.log(result)//'3true'
result = '3' + undefined
console.log(result)//'3undefined'
result = '3' + null
console.log(result)//'3null'

// When a number is added to a string, JavaScript converts the number to a string before concatenation

//Implicit Conversion to Number
//// numeric string used with - , / , * results number type

let result;

result = '4' - '2'; 
console.log(result); // 2

result = '4' - 2;
console.log(result); // 2

result = '4' * 2;
console.log(result); // 8

result = '4' / 2;
console.log(result); // 2

// non-numeric string used with +, - , / , * results to NaN

let result;

result = 'hello' - 'world';
console.log(result); // NaN

result = '4' - 'hello';
console.log(result); // NaN

//Implicit Boolean Conversion to Number

// if boolean is used, true is 1, false is 0

let result;

result = '4' - true;
console.log(result); // 3

result = 4 + true;
console.log(result); // 5

result = 4 + false;
console.log(result); // 4

// null Conversion to Number
// null is 0 when used with number
let result;

result = 4 + null;
console.log(result);  // 4

result = 4 - null;
console.log(result);  // 4





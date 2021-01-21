//Number types Integer and Floating Points

var integerNumber = 100
var FloatingPointNumber = 100.50
console.log(integerNumber, FloatingPointNumber)

//Number Function

console.log(Number.MAX_VALUE, Number.MIN_VALUE) // JS max min value as a number

//NaN Not a Number property to define not a number property

var name = "Suraj"
console.log(Number(name)) //Not a Number NaN

var num = '100'
console.log(Number(num)) //100

var random = '100wer'
console.log(Number(random)) //NaN

console.log(NaN === NaN) //false

// isNaN() method to determine if its not a legalnumber

console.log(isNaN(NaN)) //true
console.log(isNaN(100)) //false
console.log(isNaN("100")) //false
console.log(isNaN(true)) // false, true boolean value becomes 1 and false 0

//parseInt() parseFloat() method

var num1 = '234hervd24'
console.log(parseInt(num1)) //234

 










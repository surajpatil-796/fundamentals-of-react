/**
 * JavaScript Arrays
 * array holds any type of data such as string, number, object
 * create array using new keyword or array literal []
 * you can pass items to array constructor or literal
 * access using bracket notation
 * set value using bracket notation or length
 * detecting array - Array.isArray()
 * conversion methods = toString() join()
 * stack method push() pop()
 * queue methods - shift(), unshift()
 * reordering methods - reverse(), sort()
 * manipulating methods - concat() slice() splice()
 * location methods - indexOf(), lastIndexOf()
 * iterative methods - every() some() filter() forEach() map()
 * reductive method reduce() reduceRight() */

 // CREATING AN ARRAY
var color = new Array('violet', 'indigo', 'blue')
console.log(color) //[ 'violet', 'indigo', 'blue' ]

// var color = ['violet', 'indigo', 'blue']
// console.log(color) //[ 'violet', 'indigo', 'blue' ]

console.log(color.length) //3
console.log(color.length = 2) //2 will cut blue
console.log(color.length = 100) //100 

// HOW TO KNOW ITS AN ARRAY TYPE
console.log(Array.isArray(color))  //true





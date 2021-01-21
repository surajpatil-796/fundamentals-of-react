/**
 * indexOf, lastIndexOf, trim, toUpperCase(), toLowerCase()
 */

var strVal = "hello world"
console.log(strVal.indexOf('o'))//4
console.log(strVal.indexOf('o', 6))//7
//Second argument is from where to start counting but gives the value from start
console.log(strVal.lastIndexOf('o',6))//7
console.log(strVal.lastIndexOf('o', 6))//4
// it will start from counting from start but will go reverse to search for 'o'

console.log(strVal.toUpperCase())
console.log(strVal.toLowerCase())
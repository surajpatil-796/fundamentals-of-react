/**
 * String manipulation methods
 * conct slice substr substring
 */

var str1 = "Hello"
var str2 = "World"
var str3 = str1.concat('Suraj', '!')
 console.log(str1.concat(str2))//HelloWorld
console.log(str3)//HelloSuraj!
 
var myString = "hello world"
console.log(myString.slice(3))// lo world
console.log(myString.slice(3, 7))// lo w

console.log(myString.substring(3,7))// lo world
console.log(myString.substring(3))// lo world

console.log(myString.substr(3))// lo world
console.log(myString.substr(3,7))// lo worl
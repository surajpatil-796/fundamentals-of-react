/**
 * JS primitive wrapper type
 * String Number Boolean
 */

var person = {
     name:"Suraj"
}
 
var myString = 'hello world'
//JS everything inherits object... primitive types are also created like an object behind the scenes...
//Behind the scenes, var myString = newString()
var mySubString = myString.substring(2)
console.log(mySubString)//llo world
 
var num = 10
//var num = new Number() and same with boolean
//Check out the default primitive methods
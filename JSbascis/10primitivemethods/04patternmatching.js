/**
 * match search replace split
 * match is as same as calling RegExp objects exec() method
 * match() accepts regular expression string or RegExp object
 * search() method takes one argument as same as match
 * it returns the index of the first pattern occurence in the string ...or -1 if its not
 * replace() takes two arguments, first argument RegExp object or a string 
 * The second argument can be a string or a function
 * split() method seperates the string into an array of substrings 
 * ...based on a seperator
 */

var text = "cat bat sat fat"
var pattern = /.at/ // . matches any character except new line
var matches = text.match(pattern)
aconsole.log(matches.index)//0
aconsole.log(matches[0])//cat

//Search
var matches1 = text.search(pattern)
//returns 1, which is the first position of "at" in the string
console.log(matches)//1

//replace
var matches2 = text.replace('at', 'ond')
var matches3 = text.replace('/(.at)/g', 'word($1)')

console.log(matches2)//cond bat sat fat
console.log(matches3)//word(cat), word(bat), ...

//SPLIT
var colorText = "red, blue, green, yellow"
var color = colorText.split(',')
console.log(color)

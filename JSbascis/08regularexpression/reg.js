/**
 * Regula expression is a sequence of characters that forms a pattern
 * var re= /hello/
 * regular expression methods
 * test() match()
 * string methods match, search replace split
 * you create a regular string using new keyword or inbetween two //
 */

var re = /hello/
var sentence = "hello world"
console.log(re.test(sentence))//true
 
var re = /^\d{3}$/
console.log(re.test('123helloworld')) //false
// it must only contain three digit

/**
 * d = digit
 * ^ - begining
 * $ - end 
 * g - global
 */
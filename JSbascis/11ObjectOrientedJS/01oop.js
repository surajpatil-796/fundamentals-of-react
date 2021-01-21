/**Object Oriented JS
 * Factory pattern, Constructor pattern, prototype pattern
 * 
 */

 //Objects are group of name-value pairs
 //When  a function is created inside an object , they are called methods

var person = {
    name: "Suraj",
    sayName: function () {
        return this.name
    }
}
person.sayName('Suraj')
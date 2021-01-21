/**this is a reference to the execution context that the function is operating on
 * when a function is called in the gloabl scope of a web page 
 * this points to window object
 */

window.color - 'red'//global context

var obj = { color: 'blue' }

function sayColor() {
    console.log(this.color)
}
 
sayColor() //red

obj.sayColor = sayColor //assigning this function as a property method

obj.sayColor() //blue
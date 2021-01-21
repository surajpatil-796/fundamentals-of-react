//EXECUTION CONTEXT
/**
 * execution context of a variable or function defines what other data it has access to
 * each function call has its own execution context
 */

 // GLOBAL EXECUTION CONTEXT
 /**
  * global execution context is the outermost one.
  * in web browser, it is window object
  */
 // SCOPE CHAIN
 /**
  * when code is executed in context, a scope chain is created
  * its purpose is to provide access to all variables and functions needed to the execution context
  * this chain continues as needed until global context
  * is reached which is a window object
  */

var color = "blue" //global execution

 
function colorUpdate() {
    //Execution Context
}

function colorUpdate() {
    var anotherColor = "red"
    return color // scope chain
} // blue

function colorUpdate() {
    var anotherColor = "red"
    var color = "purple"//
    return color // scope chain
}
console.log(colorUpdate()) //it will return purple now as it has its own color in executuon context
/**
 * What is inside functions?
 * Two special objects are inside - arguments, this
 * arguments object is an array like object, containing all arguments 
 * arguments property - callee  - pointer to the function
 * ... that owns the argument
 * function object has additional property 'caller' which contains a refernce to the function thst called this function or null
 * this is a reference to the execution context that the function ... is operating on
 * when a function is called in the global scope of a web page ... this points to window object
 */

function factorial(num) {
    if (num < 1) {
        return 1;
    } else {
       // return num*factorial(num-1)
        return num*arguments.callee(num-1)//same as  num*factorial(num-1)
     }
}
console.log(factorial(5)) //120

function outside() {
    inside()
}

function inside() {
    console.log(inside.caller) //how is calling me
}

/**output
 * function outside() {
    inside()
}

 */
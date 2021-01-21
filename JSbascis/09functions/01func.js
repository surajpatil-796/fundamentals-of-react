/**
 * IN JS EVERYTHING INHERITS OBJECT TYPE
 * functions are basically objects
 * function names are just pointers
 * Each function is an instance of function type
 * Function name without() access the function but does not execute funct
 * 
 */

function total(num1, num2) {
     return num1 + num2
}
console.log(total) 
 /**function total(num1, num2) {
     return num1 + num2
}*/
console.log(total(1,2))//3
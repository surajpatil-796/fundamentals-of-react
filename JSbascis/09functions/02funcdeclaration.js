/**
 * function declaration are available in the execution context
 * function expression are not complete until the execution reaches that line of code...
 */

 
console.log(total(3, 4))//7
//This will be even though JS executes line by line,  because it is available in global execution

function total(num1, num2) {
     return num1 + num2
} // Function declaration

 // Problem with function declaration is it becomes hoisted, Hoisted means it is available in global execution context

console.log(total(1, 2))//3

var color = "red"//Just like this is available in windows object or global execution 

//FUNCTION EXPRESSION
console.log(minus(10, 4))//Error, minus is not a function
//JS has not gone to minus function as we have called minus before, so giving error

var minus = function (num1, num2) {
     return num1 - num2
} // Function Expression

console.log(minus(7, 4))//3


//FUNCTION AS A ARGUMENT

function callingAFunction(myFunc, myArgs) {
    return myFunc(myArgs)
}

function addHundred(num) {
    return num +100
}

var result = callingAFunction(addHundred,1000)
console.log(result) //1100
// W gave 1000 but we got 100,
//we have passed second argument as a argument in a function addHundred
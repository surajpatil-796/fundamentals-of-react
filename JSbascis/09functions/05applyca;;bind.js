/**
 * Function methods
 * apply(), call(), bind()
 * 
 * the apply() method accepts two arguments
 * the value of this inside the function and an array of arguments
 * the second argument may be an instance of Array
 * but it can also be the arguments object
 */

function sum(num1, num2) {
     return num1 + num2
}
 
function callingSum(num1, num2){
    // return sum.apply(this, arguments) 
    return sum.apply(this,[num1,num2])//we can use first also
}
console.log(callingSum(11, 11))//22


function callingSum(num1, num2){
    return sum.call(this, num1, num2) //it accepts argument

}
console.log(callingSum(11, 11))//22

//the bind() method creates a nre function instance whose this value is bound to the value that was passed into bind()

window.color = "red"
var obj = { color: 'blue' }
function sayColor() {
    return this.color //when this.color is used it means we are calling global expression, red.
}

var objSayColor = sayColor
objSayColor()//red

// we are binding the function with color blue to our var obj
var objSayColor = sayColor.bind(obj)
objSayColor()//blue
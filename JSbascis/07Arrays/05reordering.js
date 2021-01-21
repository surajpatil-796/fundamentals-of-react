//The reverse() method reverses an array in place. The first array element becomes the last, and the last array element becomes the first.


var values = [0, 10, 50,100, 150]
console.log(values.sort())//[ 0, 10, 100, 150, 50 ] //sort method uses toString() method thats why it did not sort the values properly

function compare(val1, val2) {
    return val2 - val1
} //this wont work on string

function compare(val1, val2) {
    return val1 - val2
}//this wont work on string
console.log(values.sort(compare))// now its right [ 150, 100, 50, 10, 0 ], used custom function
console.log(values.sort(compare))// now its right [ 0, 10,,50, 100 ,150 ], used custom function



const colors = ["blue", "green", "yellow","violet","indigo"]
console.log(colors.sort())// 

function compareForString(val1, val2) {
    if (val1 > val2) {
        return -1 //-1 means neither true neither false
    }
        else if (val1 < val2) {
            return 1 //true
    }
    else {
        return 0;//false
    }
}
console.log(colors.sort(compareForString))// [ 'yellow', 'violet', 'indigo', 'green', 'blue' ]



// const colors = ["blue", "green", "yellow"]
// console.log(colors.reverse())//[ 'yellow', 'green', 'blue' ]  



const a = {0: 1, 1: 2, 2: 3, length: 3};

console.log(a); // {0: 1, 1: 2, 2: 3, length: 3}

Array.prototype.reverse.call(a); //same syntax for using apply()

console.log(a); // {0: 3, 1: 2, 2: 1, length: 3}

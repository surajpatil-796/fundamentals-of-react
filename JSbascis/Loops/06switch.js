// each case in switch statement checks if expression is equal to the value
//without break, code execution falls through to the default case
var i = 100;

switch (i) {
    case 10:
        console.log('matched 10')
        break
    case 20:
        console.log("20")
        break
    default:
        console.log("Nothing Found")
}



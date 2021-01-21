//do while creates a loop that executes a block of code
// at least once, before checking the condition is true
// then it will repeat the loop as long as condtion is true

// do {
//     statement
// } while (expression)

var num = 0
do {
    num++
    console.log(num)
} while (num < 5) //12345

var num = 0
do {
    num++
    console.log(num)
} while (num> 1)  //as expression is false and do while always execute once, 1 it will  add one as it execute the block once
let a = 12
let b = 25
let c = a
a = b
b=c
console.log(a, b) 


//take input from the users
let a = 27
let b = 45

//using destructuring assignment
[a, b] = [b, a];

console.log(`The value of a after swapping: ${a}`);
console.log(`The value of b after swapping: ${b}`);
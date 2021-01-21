//The unshift() method adds one or more elements to the beginning of an array and returns the new length of the array

const colors = ["blue", "green", "yellow"]
console.log(colors.unshift("violet", "indigo")) //5

console.log(colors)//[ 'violet', 'indigo', 'blue', 'green', 'yellow' ]

//The shift() method removes the first element from an array and returns that removed element. This method changes the length of the array.

const colors1 = ["blue", "green", "yellow"]
console.log(colors1.shift()) //blue
console.log(colors1) //[ 'green', 'yellow' ]


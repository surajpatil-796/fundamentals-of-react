//reduce() reduceRight()

//Both methods iterate over all items in the array
//... and build up value thatis ultimately required

// they take two arguements, first argument is a function call on each item
//second optional argument is an intial value upon which the reductuon is
//a function passed into accepts four arguments
//previousValue, currentValue, itemIndex, arrayObject

var numbers = [1, 2, 3, 4, 5]
const sum = numbers.reduce(function (previousValue, currentValue, index, array) {
    return previousValue + currentValue
})

console.log(sum) //15
//every(),some(),filter(),forEach(),map()


//every()
//it takes a function as an argument, applies function on every item of an array
// And returns true or false

// var numbers = [1, 2, 3, 4, 5, 7, 9, 1]
// var someNumbers = numbers.every(function (item, index, array) {
//     return item > 2;
// })// false, cause not every item is greater than two
// console.log(everyResult)

//some()

// var numbers = [1, 2, 3, 4, 5, 7, 9, 1]
// var someNumbers = numbers.some(function (item, index, array) {
//     return item > 2;
// })// true, some of the items are greater than two
// console.log(someNumbers)

//filter()

// var numbers = [1, 2, 3, 4, 5, 7, 9, 1]
// var filterResult = numbers.filter(function (item, index, array) {
//     return item > 2;
// })
// console.log(filterResult)//[ 3, 4, 5, 7, 9 ]
// //filter returns all the value greater than two

//forEach()

var numbers = [1, 2, 3, 4]
var foreach = numbers.forEach(function (item, index, array) {
    console.log(item)
})
console.log(foreach)
/**
 * 1
 * 2
 * 3
 * 4
 */ //returns items of the array

var numbers = [1, 2, 3, 4, 5, 7, 9, 1]
 var mapResult = numbers.map(function (item, index, array) {
    return item
 })
 console.log(mapResult)/**[
  1, 2, 3, 4,
  5, 7, 9, 1
]*/




//concat does modify old array it creates a new array

var colors = ["violet", "indigo", "blue"]

var totalColors = colors.concat(["green", "yellow"])

console.log(totalColors)//[ 'violet', 'indigo', 'blue', 'green', 'yellow' ]

//slice() take two argument starting and ending position
// if given one argument, it returns all items between that position and the end of array
//if given two arguments, it returns all item between start and the end positon, not including the end position

var colors1 = ["violet", "indigo", "blue","green", "yellow", "orange","red"]
console.log(colors1.slice())//nothing will happen cause theres no argument

console.log(colors1.slice(1))//[ 'indigo', 'blue', 'green', 'yellow', 'orange', 'red' ]

console.log(colors1.slice(1, 4))// [ 'indigo', 'blue', 'green' ]

//Splice() = insert/ delete / replace
//delete - using two arguments...
//position of first item and the number of items to delete

//insert/replace - same as above with 0 arguments and items to in
//Splice modifie the original array

var spliceColors = ["violet", "indigo", "blue","green", "yellow", "orange","red"]
var deletedItems = spliceColors.splice(0, 3)//delete the first and also delete the next two items
console.log('Colors', spliceColors, "Deleted", deletedItems)
//Colors [ 'green', 'yellow', 'orange', 'red' ] Deleted [ 'violet', 'indigo', 'blue

//Inserting
var spliceColors1
    = ["violet", "indigo", "blue", "green", "yellow", "orange", "red"]
var deleteItems = spliceColors1.splice(1, 4, "iam not a rainbodw color", 'just adding stuff', "in middle")
console.log(spliceColors1, "deleted Items", deleteItems)
/** 
  'violet',
  'iam not a rainbodw color',
  'just adding stuff',
  'in middle',
  'orange',
  'red'
] inserting Items [ 'indigo', 'blue', 'green', 'yellow' ]
*/

 
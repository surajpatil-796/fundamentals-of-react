//Stack Method means Last in First Out
//push() accepts any no of arguments and add to the end of array
//pop() removes the last item in the array

var colors = ['violet', 'indigo', 'blue']
console.log(colors.push('green', 'yellow')) //5
console.log(colors)//[ 'violet', 'indigo', 'blue', 'green', 'yellow' ]

var add = ['orange', 'red']

console.log(colors.push([add]))//6
console.log(colors)
/**[
  'violet',
  'indigo',
  'blue',
  'green',
  'yellow',
  [ [ 'orange', 'red' ] ]
  */
var removedItem = colors.pop()
console.log(colors, 'Removed item', removedItem)
//[ 'violet', 'indigo', 'blue', 'green', 'yellow' ] Removed item [ [ 'orange', 
'red' 
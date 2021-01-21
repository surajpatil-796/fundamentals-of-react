/**
 * arguments are not necesary and can be an data type or none
 * array like object represents arguments internally []
 * you can access each array using bracket notation
 * determine no of arguments using array length property
 */

function shopping(item, item1) {
    if (arguments.length >= 2) {
         console.log('You are granted 20% discount')
    } else if (arguments.length <= 1) {
        console.log('you are not getting any discount')
     }
}
 
shopping('Milk') // you are not getting any discount
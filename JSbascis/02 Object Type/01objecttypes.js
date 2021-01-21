//JS OBJECT TYPES
/**
 * creating object = {}, new
 * accessing object properties with variables
 * updating object properties
 * adding new properties
 * deleting properties
 * object has property?
 * nested object
 */

var person = new Object()
console.log(person) //{}
person.name = "Suraj"
person.age = 24
person.hobbies = true
person.language = ['eng', 'hindi', 'marathi']
person.shoes = {
    "nike": "Jordan",
    puma:"Running Shoes"
}

// console.log(person.language.push('sanskrit'))//4 
// console.log(person.language[0])//eng
// console.log(person.shoes.nike)//Jordan


var menu = {
    item: "cake",
    price: "240",
    desc: "delicios",
    is_available: true,
    user_type: ['kids', 'adults', 'elders'],
    orderFunc: function () {
        return this.item +" is your order "  + this.price + "is your cost"  
    }
}
// console.log(menu.user_type["0"] = "woman")
// console.log(menu) //["woman", "adults", "elder"]
// console.log(menu.orderFunc())

//delete property

delete menu.orderFunc
console.log(menu)
// {
//   item: 'cake',
//   price: '240',
//   desc: 'delicios',
//   is_available: true,
//   user_type: [ 'kids', 'adults', 'elders' ]
// }

// To know if we have a property or not
var know = menu.hasOwnProperty('item')
console.log(know) //true
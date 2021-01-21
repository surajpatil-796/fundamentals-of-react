// Any function that is with a
function createPerson(name, age, job) {
    this.name = name
    this.age = age
    this.job = job
    this.sayName = function () {
        return this.name
    }
}
console.log(new createPerson('Suraj',24,"Developer"))
console.log(new createPerson('Mansi', 21, "Accountant"))

/**createPerson {
  name: 'Suraj',
  age: 24,
  job: 'Developer',
  sayName: [Function (anonymous)]
}
createPerson {
  name: 'Mansi',
  age: 21,
  job: 'Accountant',
  sayName: [Function (anonymous)]
} */

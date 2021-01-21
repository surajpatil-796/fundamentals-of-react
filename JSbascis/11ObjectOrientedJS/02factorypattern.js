function createPerson(name, age, job) {
    var obj = new Object()
    obj.name = name
    obj.age = age
    obj.job = job
    obj.sayName = function () {
        return this.name
    }
    return obj
}
console.log(createPerson('Suraj',24,"Developer"))/**{
  name: 'Suraj',
  age: 24,
  job: 'Developer',
  sayName: [Function (anonymous)]
}*/
console.log(createPerson('Mansi',21,"Accountant"))

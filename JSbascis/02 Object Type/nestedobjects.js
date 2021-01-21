var person = {
    name: "Suraj",
    age: 24,
    likes: {
        books: 'Learning Js',
        movies: {
            one: 'Fight Club',
            two: "American Pyscho",
            three:"Pulp Fiction"
        }
    }
}

console.log(person)
console.log(person.age)//24
console.log(person.likes.books)//Learning Js
console.log(person.likes['books'])//Learning Js
console.log(person.movies)// undefined will be the output because movies is in likes object
console.log(person.likes.movies.one="The Office")// The Office will replace Fight Club
console.log(person)



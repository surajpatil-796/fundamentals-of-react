function outer() {
    let a = 20
    function inner() {
        let b = 10
        console.log(a+b)
    } 
    return inner
}

// outer()
X = outer()/*   function inner() {
        let b = 10
        console.log(a+b)
    }And X become a function inner */
Y = outer() 
console.log(typeof(X))
console.log(X()) //30 
console.log(Y()) //30
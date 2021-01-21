let root1
let root2

let d = b * b - 4 * a * c

let a = prompt("enter your first number")
let b = prompt("enter your second number")
let c = prompt("enter your third number")

if (d > 0) {
        root1 = (-b + Math.sqrt(d)) / (2 * a);
    root2 = (-b - Math.sqrt(d)) / (2 * a);

    // result
    console.log(`The roots of quadratic equation are ${root1} and ${root2}`);
    
} else if (d == 0) {
        root1 = root2 = -b / (2 * a);

    // result
    console.log(`The roots of quadratic equation are ${root1} and ${root2}`);   
} else {
    let realPart = (-b / (2 * a)).toFixed(2);
    let imagPart = (Math.sqrt(-discriminant) / (2 * a)).toFixed(2);

    // result
    console.log(
    `The roots of quadratic equation are ${realPart} + ${imagPart}i and ${realPart} - ${imagPart}i`
  );
}
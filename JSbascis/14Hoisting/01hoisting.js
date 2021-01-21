/**What is Hoisting?
Variable declaration and function declaration are moved to the top of the scope.
Scope of Var in ES5
The scope of var is its execution context, either inside the enclosing function or global. i.e. var is function scoped.
ES6 let and const
ES6 does not allow use of a variable before it is declared.
let and const are both block scoped, not function scoped. i.e. it can exist within the {} block of an if statement.
const is used for immutable variable. Once a variable is declared and assigned, its value cannot be modified. A const variable must be both declared and initialized before use. e.g.const PI = 3.14; For variables that pass by reference like arrays and objects, their inner elements/properties can still be modified. const arr=[1,2]; arr[1]=1; //valid
 */
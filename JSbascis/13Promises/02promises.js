const count = true
let countValue = new Promise((resolve, reject) => {
    if (count === false) {
        resolve("there is a count value")
    } else {
        reject("there is no count value")
    }
})
console.log(countValue)// Promise {'there is a count value}
countValue.then(() => {
    console.log("you can call multiple function this way")
})

//if we state count === false in if state we will get an  error of 
//UnhandledPromiseRejectionWarning there is no count value.
// if we set to to true then we get you can call multiple function this way

let promise = new Promise((resolve, reject) => {
    let x = "surajpatil"
    let y = "surajpatil"
    if (x === y) {
        resolve()
    } else {
        reject()
    }
})

promise.then(() => {
    console.log("username matched")
}).catch(() => {
    console.log("error")
})


// const  delay = (ms) => {
//   return new Promise(resolve => setTimeout(resolve, ms));
// }

// delay(3000).then(() => console.log('runs after 3 seconds'));


const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("after 5 seconds")
    },3000)
})
promise.then(() => {
    console.log("Success")
})



// Function to make a promise that waits for a number
// of seconds, then resolves:
function makePromise(seconds) {
  return new Promise(function(resolve, reject) {
  setTimeout(function() {
    resolve(seconds);
  }, 1000 * seconds);
});
}

makePromise(5).then(function (){
  // This gets run after 5 seconds:
  console.log('5 seconds has passed');

  // Kicks of a 4 second timer, and the next
  // `then` handles the reponse to this new
  // promise:
  return makePromise(4);
}).then(function () {
  // This gets run 4 secods after the first 5
  // seconds has elapsed:
  console.log('4 seconds has passed');
})

const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(seconds)
    }, 3000);
})
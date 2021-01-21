//async functions will always return a value. It makes sure that a promise is returned and
//if it is not returned then javascript automatically wraps it in a promise which is resolved with its value.

// function resolveAfter2Seconds() {
//   return new Promise(resolve => {
//     setTimeout(() => {
//       resolve('resolved');
//     }., 2000);
//   });
// }

// async function asyncCall() {
//   console.log('calling');
//   const result = await resolveAfter2Seconds();
//   console.log(result);
//   // expected output: "resolved"
// }

// asyncCall();

resolveAfter3seconds =() => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("After 3 seconds")
        },3000)
    })
}

calling = async () => {
    console.log("calling")
    const result = await resolveAfter3seconds()
    console.log(result)
}

calling()


//Hello World
//Await function is used to wait for the promise. 
//It could be used within the async block only.It makes the code wait until the promise returns a result.
//It only makes the async block wait


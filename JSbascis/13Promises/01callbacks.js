// function greet(name, callback) {
//     console.log("h1" + name)
//     callback()
// }

// function callMe(name) {
//     console.log("Iam a callback function")
// }
// greet('Suraj',callMe)

// function greet(name, callback) {
//     console.log("h1" + name)
//     callback
// }

// function callMe(name) {
//     console.log("Iam a callback function")
// }
// greet('Suraj', callMe())


//And if you want a third call, you’d get another level of nesting:
setTimeout(function(){
  alert('5 seconds has passed');
  setTimeout(function(){
    alert('4 seconds has passed');
    setTimeout(function(){
      alert('3 seconds has passed');
    }, 3000);
  }, 4000);
}, 5000);

// setTimeout(() => {
//     console.log("After 2seconds")
// }, 2000)

//I think that this getting too unwieldy now, having so many levels of nesting. Of course you could tidy this up by having multiple functions:


setTimeout(function(){
  alert('5 seconds has passed');
  doTimeout2();
}, 5000);

function doTimeout2() {
  setTimeout(function(){
    alert('4 seconds has passed');
    doTimeout3();
  }, 4000);
}

function doTimeout3() {
  setTimeout(function(){
    alert('3 seconds has passed');
  }, 3000);
}



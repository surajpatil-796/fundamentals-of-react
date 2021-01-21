var num = 0
for (i = 0; i < 10; i++){
    if (i === 5) {
          console.log(i) //5
        break;
    }
    num++
    // console.log(num) //12345
}
// loop will run 5 times no will also increment 5 times
console.log(num)//5


//Continue
for (i = 0; i < 10; i++){
    if (i === 5) {
          console.log(i) //5
        continue;
    }
    num++
    console.log(num) //123456789
}
// loop will run 9 times as it skips the 5th 
console.log(num)//9

outerLabel: for (i = 0; i<10; i++){
    for (ii = 0; i < 10; ii++){
        if(i==5 && ii==5)
        continue outerLabel //breaking the outer loop by labelling
    }
    num++
}

console.log(num) //95

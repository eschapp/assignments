// Explain what is going on here.

var p = new Promise(function(res, rej){
    setTimeout(() => res(1), 1000)
})

p.then(add1) //--> new Promise
    .then(add1) //--> new Promise
    .then(add1) //--> new Promise
    .then(add1) //--> new Promise
    .then((v) => console.log(v)) //--> new Promise

function add1(v){ return v+1 }

//    Here p is a promise with a timeout(delay) of one second. p.then(add1) then waits 1 second and then runs add1 4 times and returns the final output to the console. I believe the output should be 5, and it should appear after one second.
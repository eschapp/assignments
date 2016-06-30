// JS has variadic functions.
//
// Write a sum() function that
// returns the sum of all parameters

function sum(){
  return Array.prototype.slice.call(arguments).reduce(function(a,v){ return a+v }, 0)
}

// test
console.assert(sum(1, 2, 3, 4) === 10)
console.assert(sum(-10, -5, 1, 2) === -12)

// BONUS:
// What's the difference between the following?
console.log(sum(1, 2, 3)); //#1 regular use of sum
console.log(sum.call(null, 1, 2, 3)); //#2
console.log(sum.apply(null, [1, 2, 3])); //#3

var sum123 = sum.bind(null, 1, 2, 3);
console.log(sum123()); //#4 is at a later point.

//All four achieve the same thing, a sum that equals 6. http://stackoverflow.com/questions/15455009/javascript-call-apply-vs-bind is a good link that explains the difference, but essentially you use call and apply when you want to instantly use them. Apply differs from call in that it acts on an array. Bind I believe works on either and is used when you want to bind the object even if it will be called at a later point.
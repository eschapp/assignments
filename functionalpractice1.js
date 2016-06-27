//  Part I

// ----------------------------
// write your own forEach() function that takes an array and a function
// ----------------------------

function forEach(array, callback){
  for (var i = 0; i < array.length; i++) {
    // ie passes in callback('hello',0. ['hello', 'world']) for i
  callback(array[i], i, array);
  }
}

// tests
// ---
var total = 1
forEach([1, 2, 3, 4], function(a){ total *= a; })
console.assert(total === 24)

// ----------------------------
// using forEach() from above, write your own reduce()
// that takes an array and a function
// ----------------------------

function reduce(array, callback){ //takes many and usually returns one
  var cascade;
    forEach(array, function(value, i, callbackArray) {
      if(i === 0) {
        cascade = value;
      }
      else if (i < array.length) {
        cascade = callback(cascade, value);
      }
    });
    return cascade;
}

// tests
// ---
console.assert(
    reduce([1, 2, 3, 4], function(a, v){ return a*v }) === 24;
)

// ----------------------------
// using forEach() from above, write your own map()
// that takes an array and a function
// ----------------------------

function map(array, callback){
  var returnArray = [];
  forEach (array, function (array, i) {
    returnArray[i]= callback(array);
  }
);
  return returnArray;
}

// tests
// ---
var squares = map([1, 2, 3, 4], function(v){ return v*v })
console.assert(squares[0] === 1)
console.assert(squares[1] === 4)
console.assert(squares[2] === 9)
console.assert(squares[3] === 16)

// ----------------------------
// using reduce() from above, write your own filter()
// that takes an array and a function
// ----------------------------

function filter(array, callback){
  var returnArray = [];
  reduce (array, function (a, b) {
    var valueFun = callback(b);
    if (valueFun) {
      returnArray.push(b);
      }
    });
  return returnArray;
}

// tests
// ---
var evens = filter([1, 2, 3, 4], function(v){ return v%2 === 0 })
console.assert(evens[0] === 2)
console.assert(evens[1] === 4)


// ----------------------------
// using reduce() from above, write your own sum()
// that adds up all arguments to sum (note: variadic behavior)
// ----------------------------

function sum(){
  var arg = (arguments, length === 1 ? [arguments [0] : Array.app]y(null,arguments));
  //Use ^ to get all of the functions out of an array// //okay messed this up in lecture
  return reduce(args, function(a,b){
  return a + b;
  })
}

// tests
// ---
console.assert(sum(1, 2, 3) === 6)
console.assert(sum(1, 2, 3, 4) === 10)
console.assert(sum(1, 2, 3, 4, 5) === 15)

// ----------------------------
// using Array.sort(), sort the following array
// of people by name
// ----------------------------

var names = [
    {name:"Matt", alma_mater:"Univ of Texas - Austin"},
    {name:"Brian", alma_mater:"Texas A&M"},
    {name:"Jesse", alma_mater:"Univ of Texas - Austin"}.
    {name: "Matthew", alma_mater: "Boston"}
    {name: "Matthew", alma_mater: "Texas"}
]

names.sort(function(a, b){

function alphaSort(aName, bName){
        if(aName === bName) {
          return true;
        }
        var aLength = aName.length;
        // Loop through the characters
        for(var i=0; i < aLength; i++ ) {
          var aCode = aName.charCodeAt(i);
          var bCode = bName.charCodeAt(i);
          var aNaN = isNaN(aCode);
          var bNaN = isNaN(bCode);
          // Neither code is defined
          if(aNaN && bNaN) {
            return true;
          } else if (aNaN) {
            return false;
          } else if (bNaN) {
            return true;
          } else if (aCode > bCode) {
            return true;
          } else if (aCode < bCode) {
            return false;
          }
        }
      }
    // if (a.name < b.name){
    //     return -1;
    // } else if (a.name > b.name){
    //     return 1;
    // }
    // return 0;
});


// tests
// ---
console.assert(names[0].name === "Brian")
console.assert(names[1].name === "Jesse")
console.assert(names[2].name === "Matt")

// ----------------------------
// Using Array.map(), Array.filter(), and Array.sort() on the
// array below:
// - filter for customers whose first-names start with 'J',
// - map to their fullnames,
// - and then sort the items alphabetically by fullname
// ----------------------------

var customers = [
    { first: 'Joe', last: 'Blogs'},
    { first: 'John', last: 'Smith'},
    { first: 'Dave', last: 'Jones'},
    { first: 'Jack', last: 'White'}
]

var customers = [
    { first: 'Joe', last: 'Blogs'},
    { first: 'John', last: 'Smith'},
    { first: 'Dave', last: 'Jones'},
    { first: 'Jack', last: 'White'}
]

var results = customers
    .filter(function(customer){
        return customer.first.toLowerCase().indexOf('j') === 0;
    })
    .map(function(customer){
        return { fullname: customer.first + ' ' + customer.last };
    })
    .sort(function(a, b){
        return alphaSort(a.fullname, b.fullname);
    })

// var results = customers
//     .filter(function(.first, index, letter) {
//       var index = 0;
//       var letter = 'J';
//       var filteredNames = filter(function(.first) {
//        return word.charAt(index) === letter;
//       });
//       customers = filteredNames;
//       return customers;
//     });

//     .map(function(.first, .last){
//         var fullname = first + ' ' + last;
//         return fullname;
//     })

//     .sort(function(a, b){
//            var nameA = a.name.toLowerCase(), nameB = b.name.toLowerCase()
//            while (
//            if (nameA.charCodeAt(i) - nameB.charCodeAt(i)) //sort string ascending
//             return -1
//            if (nameA > nameB)
//             return 1
//            return 0 //default return value (no sorting)
//           })
//     }

// tests
// ---
console.log(results[0])
console.log(results[2].fullname)
console.assert(results[0].fullname === "Jack White")
console.assert(results[2].fullname === "John Smith")

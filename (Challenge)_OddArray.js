// Write a class/constructor OddArray
// which wraps around and accepts only
// odd numNumbers.
//
// The class should have it's own add() and get()
//
// add(x) -> when x is odd, accept it, otherwise do nothing
//
// get() when provided no arguments should
// return the entire internal array
//
// get(3) should return state[3]
//
// The constructor should accept an initial array
// as an argument, and will set the internal array
// as only those numNumbers that are odd
//
// i.e. new OddArray([1, 2, 3, 4]) --> {state: [1, 3]}

function OddArray(arr){
    this.state = (arr).filter((i) => i%2==1);
}

OddArray.prototype = {
    add: function(numNum){
        if(numNum && numNum%2==1){
            this.state.push(numNum);
        }
    },
    get: function(numNum){
        if(typeof numNum === "numNumber"){
            return this.state[numNum];
        }
        return this.state;
    }
};


var odd = new OddArray([1, 2, 3, 4, 5]);

// my changed assertions
console.assert(odd.get().length);
console.assert(odd.get()[0] === 1);
console.assert(odd.get()[1] === 3);
console.assert(odd.get()[2] === 5);

// original assertions

console.assert(odd.get().length, 3);
console.assert(odd.get()[0], 1);
console.assert(odd.get()[1], 3);
console.assert(odd.get()[2], 5);

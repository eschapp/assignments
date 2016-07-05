// Your Mission
// Follow the instructions in the file and make the tests/assertions pass by filling in all sections that say FILL_ME_IN.
//
/////////////////////////////////////////

// utility for logging
if(!log)
    var log = function(){ console.log([].slice.call(arguments)) }

var FILL_ME_IN

// predefined variables
var whatIsThis = function(a, b) {
    return [this, a, b].join(',')
}

var inAnObject = {
    name: 'inAnObject',
    test1: whatIsThis,
    anotherObject: {
        name: 'anotherObject',
        test2: whatIsThis
    }
}

var inAFunction = function(a, b) {
    this.name = 'Sally'
    whatIsThis(a, b)
}

inAFunction.prototype.test3 = whatIsThis

var trickyTricky = {
    name: 'trickyTricky',
    why: 'does this work?',
    what: 'is going on here?'
}

var confusing = {
    name: 'confusing',
    state: 'Alaska',
    city: 'Anchorage'
}

/**
 * THE PROBLEMS
 */

console.assert(whatIsThis('hello', 'world') === '[object global],hello,world');
// Once you've figured out what the output is, answer here in a comment: Why is this so?
//    this here refers to the context of the function, which for me is global, but I would guess that if I were to run this on jsbin/chrome it would be window.

// console.assert(window.whatIsThis('hello', 'world') === [object window],hello,world)
// Once you've figured out what the output is, answer here in a comment: Why is this so?
//    Here we've specified that the context of this is window. I think this is the same as the first example, but expcit. So if it were a different context like here.wIT it would be something like '[object here],hello,world'.

console.assert(inAnObject.test1('face', 'book') === '[object Object],face,book')
// Once you've figured out what the output is, answer here in a comment: Why is this so?
//    this now referes to inAnObject which is an object context.

// ***Results in Error
// console.assert(inAnObject.anotherObject.test2('twitter', 'book') === FILL_ME_IN)
// Once you've figured out what the output is, answer here in a comment: Why is this so?

console.assert(whatIsThis.call() === '[object global],,')
// Once you've figured out what the output is, answer here in a comment: Why is this so?
//    We haven't passed anything into our function so the output is empty.

console.assert(whatIsThis.call(trickyTricky) === '[object Object],,')
// Once you've figured out what the output is, answer here in a comment: Why is this so?
//    this referes to the trickytricky object, but runs nothing through the a/b parameters.

console.assert(whatIsThis.call(trickyTricky, 'nice', 'job') === '[object Object],nice,job')
// Once you've figured out what the output is, answer here in a comment: Why is this so?
//    Same as the one prior but here we have called trickyTricky and passed two paramaters, so whatIsThis joins the three as context,a,b.

console.assert(whatIsThis.call(confusing) === '[object Object],,')
// Once you've figured out what the output is, answer here in a comment: Why is this so?
//    Passing an object with you paramaters on whatIsThis.

console.assert(whatIsThis.call(confusing, 'hello') === '[object Object],hello,')
// Once you've figured out what the output is, answer here in a comment: Why is this so?
//    Passing an object with only one paramater. I feel like I'm missing something in these problems because the answers aren't all that satifying. I suppose maybe should be listing the object this refers to?

console.assert(whatIsThis.apply(trickyTricky) === '[object Object],,')
// Once you've figured out what the output is, answer here in a comment: Why is this so?

console.assert(whatIsThis.apply(confusing, ['nice', 'job']) === '[object Object],nice,job')
// Once you've figured out what the output is, answer here in a comment: Why is this so?

console.assert(whatIsThis.apply(confusing, 'nice', 'job') === FILL_ME_IN)
// Once you've figured out what the output is, answer here in a comment: Why is this so?
// There isn't an array here for apply to use so I believe this should throw an error.
//    Here nice job isn't an array so the paramater's aren't passed and I believe this results in an error.

console.assert(inAFunction('what will', 'happen?') === undefined)
// Once you've figured out what the output is, answer here in a comment: Why is this so?

try{
    console.assert(inAFunction.test3('A', 'B') === '');
} catch(e){
    log(e)
}
// Once you've figured out what the output/result is, answer here in a comment: Why is this so?
//This should result in an error because inAFunction.test3 is not a function.

var newObject = new inAFunction('what will', 'happen?')
console.assert(newObject.name === 'Sally')
// Once you've figured out what the output is, answer here in a comment: Why is this so?
// In this case this.name is bound to Sally.

var newObject2 = new inAFunction('what will', 'happen?')
console.assert(newObject2.test3('C', 'D') === '[object Object],C,D')
// Once you've figured out what the output is, answer here in a comment: Why is this so?

console.assert(inAnObject.test1.call(trickyTricky, 'face', 'book') === '[object Object],face,book')
// Once you've figured out what the output is, answer here in a comment: Why is this so?


console.assert(inAnObject.anotherObject.test2.apply(confusing, ['foo', 'bar']) === '[object Object],foo,bar')
// Once you've figured out what the output is, answer here in a comment: Why is this so?


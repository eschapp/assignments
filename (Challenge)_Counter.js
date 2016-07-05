// You're going to implement a simple counter class.
// The counter will start at zero, and every time its `incr`
// method is called, it will increase by 1.
//
// There's one caveat: Your counter must act like a
// number and support arithmetic operations and
// comparisons.


function Counter(){this.count=0;}

Counter.prototype.inc=function(){
  return this.count++;};

Counter.prototype.toString = function() {
 return this.count;
};

/********** Commented Code **********************

function Counter(){
  // Constructors cannot return things
  // they can only set the initial
  // conditions when a new object is
  // created.
  this.count = 0; // starts at zero
}

Counter.prototype.inc = function(){
  // When inc is called, we increase
  // the object's (this) counter variable
  // by one.
  return this.count++;
};

Counter.prototype.toString = function() {
 return this.count;
};

*************/

// Declare a new instance of an object
// and sets the variable c, to that
// instance.
var c = new Counter();
c.inc(); // counter is now at 1
console.log('c is ' + c);
console.assert(c+1, 2);
console.assert(c > 0 === true);
console.assert(c > 0);
console.assert(c == 1);
console.log(Math.sqrt(c)); // 1

// Rewrite the following `filter()` using `reduce()`:
//
// arr.filter(callback[, thisArg])
// The filter() method creates a new array with all elements that pass the test implemented by the provided function.
//
// arr.reduce(callback[, initialValue])
// The reduce() method applies a function against an accumulator and each value of the array (from left-to-right) to reduce it to a single value.


// Basic filter
[1,2,3,4].filter(function (input) {
    return (input > 2);
}) // => [3,4]

// Filter with reduce
[1,2,3,4].reduce(function (result, input) {
  // if(input > 2) {
  //   return result.push(input);
  // }
  // return result;
    if(input && input > 2) {
    var resultCopy =result.slice(0, result.lenghth);
    resultCopy.push(input);
    return resultCopy;
  }
  return result;
  }, []) // => [3,4]

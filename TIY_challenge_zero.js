function addNumbers(numberA, numberB) {
  console.log(numberA + numberB);
  return numberA + numberB;
}

var twoPlusTwo = addNumbers(2, 2);

console.assert(twoPlusTwo === 4);
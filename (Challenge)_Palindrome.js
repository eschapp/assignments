
// Write a function isPalindrome(x)
// that returns true if x is a palindrome,
// otherwise false.
//
// Palindromes are words that are the same
// going forwards and backwards. Examples:
//
// i
// dod
// meeteem
// TrickirT

function isPalindrome(input) {
  var reverseStr = input.split('').reverse().join('');

//  console.log(input);
//  console.log(reverseStr);
if(input == reverseStr)
    return true;
}

// tests
console.assert( isPalindrome("tacocat") === true );
console.assert( isPalindrome("Tacocat") === false );
console.assert( isPalindrome("racecar") === true );
console.assert( isPalindrome("cowboy") === false );

https://gist.github.com/2221f7c1a3d18fb4229a98dd916dfc11
//! 8kyu

// Nathan loves cycling. Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling. You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value.
// For example:
// time = 3 ----> litres = 1
// time = 6.7---> litres = 3
// time = 11.8--> litres = 5

function litres(time) {
  return Math.floor(time * 0.5);
}

// In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?
// Example:
// makeNegative(1); // return -1
// makeNegative(-5); // return -5
// makeNegative(0); // return 0
// makeNegative(0.12); // return -0.12
// Notes: The number can be negative already, in which case no change is required. Zero (0) is not checked for any specific sign. Negative zeros make no mathematical sense.

function makeNegative(num) {
  if (num < 0) {
    return num * 1;
  }
  if (num > 0) {
    return num * -1;
  }
  if (num === 0) {
    return 0;
  }
}

// Your task is to create a function that does four basic mathematical operations.
// The function should take three arguments - operation(string/char), value1(number), value2(number).
// The function should return result of numbers after applying the chosen operation.
// Examples
// basicOp('+', 4, 7)         // Output: 11
// basicOp('-', 15, 18)       // Output: -3
// basicOp('*', 5, 5)         // Output: 25
// basicOp('/', 49, 7)        // Output: 7

function basicOp(operation, value1, value2) {
  return eval(value1 + operation + value2);
}

// Very simple, given a number, find its opposite.
// Examples:
// 1: -1
// 14: -14
// -34: 34

function opposite(number) {
  return number * -1;
}

// Complete the square sum function so that it squares each number passed into it and then sums the results together.
// For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.

function squareSum(numbers) {
  // "accumulator"  is a variable that is what was returned from the function on the previous run. "currentValue" is the element in the array being currently iterated
  return numbers.reduce(
    (accumulator, currentValue) => accumulator + currentValue * currentValue,
    0 //initial value
  );
}

// A hero is on his way to the castle to complete his mission. However, he's been told that the castle is surrounded with a couple of powerful dragons! each dragon takes 2 bullets to be defeated, our hero has no idea how many bullets he should carry.. Assuming he's gonna grab a specific given number of bullets and move forward to fight another specific given number of dragons, will he survive?
// Return True if yes, False otherwise :)

function hero(bullets, dragons) {
  if (bullets === dragons * 2 || bullets >= dragons * 2) {
    return true;
  } else {
    return false;
  }
}

// Convert number to reversed array of digits
// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.
// Example:
// 348597 => [7,9,5,8,4,3]

function digitize(n) {
  //check if n is positive
  if (n > 0) {
    //turn param into string
    const toStr = String(n);
    //make an array which elements are each character in the string passed as a param
    const splitStr = toStr.split("");
    //create a new array which elements are the elements in the previous array and turn them into a number
    const mappedSplitStr = splitStr.map(Number);
    //reverse the order of the elements in the array
    return mappedSplitStr.reverse();
  }
  //if n is not positive, don't return anything
  return;
}

// The cockroach is one of the fastest insects. Write a function which takes its speed in km per hour and returns it in cm per second, rounded down to the integer (= floored).
// For example:
// 1.08 --> 30
// Note! The input is a Real number (actual type is language dependent) and is >= 0. The result should be an Integer.

function cockroachSpeed(s) {
  //calculate how many seconds there are in an hour
  const secsInHour = 3600;
  //calculate how many cm there are in a km
  const centimetersInKilometers = 100000;
  //convert the speed to cm/s and make it an integer
  return Math.floor((s * centimetersInKilometers) / secsInHour);
}

// Complete the solution so that it reverses the string passed into it.
// 'world'  =>  'dlrow'

function solution(str) {
  return str
    .split("") //make an array which elements are the characters in the string
    .reverse() //reverse the order of the elements in the array
    .join(""); //join the elements of the array and return a string
}

// It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.

function removeChar(str) {
  //split string
  const splitStr = str.split("");
  //remove the first and the last element in the array
  const slicedArr = splitStr.slice(1, splitStr.length - 1);
  //join elements in the array to form a string and return it
  return slicedArr.join("");
}

// You get an array of numbers, return the sum of all of the positives ones.
// Example [1,-4,7,12] => 1 + 7 + 12 = 20
// Note: if there is nothing to sum, the sum is default to 0.

function positiveSum(arr) {
  return arr
    .filter((num) => num > 0) //create an array which elements are positive numbers
    .reduce((accumulator, currentValue) => accumulator + currentValue, 0); //sum the numbers in the array
}

// Description:
// Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).
// For example,
// [true,  true,  true,  false,
//   true,  true,  true,  true ,
//   true,  false, true,  false,
//   true,  false, false, true ,
//   true,  true,  true,  true ,
//   false, false, true,  true]
// The correct answer would be 17.
// Hint: Don't forget to check for bad values like null/undefined

const countSheeps = (arr) => arr.filter((sheep) => sheep).length; //return an array with only true elements and count them

// Simple, remove the spaces from the string, then return the resultant string.

function noSpace(x) {
  return x.split(" ").join(""); //make an array which elements are the characters in the string not separated by an empty space and join them to form a string
}

// Summation
// Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.
// For example:
// summation(2) -> 3
// 1 + 2
// summation(8) -> 36
// 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8

const summation = (num) => {
  //collector array
  let nums = [];
  //fill collector array with all the number from 0 to num
  for (let i = 0; i <= num; i++) {
    nums.push(i);
  }
  //sum the numbers in the collector array
  return nums.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0 //initial value
  );
};

// Given an array of integers, return a new array with each value doubled.
// For example:
// [1, 2, 3] --> [2, 4, 6]
// For the beginner, try to use the map method - it comes in very handy quite a lot so is a good one to know.

const maps = (x) => x.map((num) => num * 2);

//! 7kyu

// Create a Function that takes one parameter and returns its square root rounded to 5 decimal places. You are not allowed to use the Math.sqrt() or the Math.pow() methods.
// Trailing zeros should be left out. For example:
// squareRoot(39) // => 6.245;
// rather than
// squareRoot(39) // => 6.24500;

function squareRoot(x) {
  //the square root of a number is the same as that number ^ (1/2)
  return parseFloat(x ** 0.5);
}

// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.
// isIsogram("Dermatoglyphics") == true
// isIsogram("aba") == false
// isIsogram("moOse") == false // -- ignore letter case

function isIsogram(str) {
  //set string to lower case
  const lcStr = str.toLowerCase();
  //turn string to an array which elements are their characters
  const splitStr = lcStr.split("");

  // check if the given "value" at "index" is actually first encountered at this "index" position within a string ("self")
  const isUnique = function (value, index, self) {
    return self.indexOf(value) === index;
  };

  // since an isogram string contains no duplicate, it must have the same length as splitStr.
  return splitStr.filter(isUnique).length == str.length;
}

// The Western Suburbs Croquet Club has two categories of membership, Senior and Open. They would like your help with an application form that will tell prospective members which category they will be placed.
// To be a senior, a member must be at least 55 years old and have a handicap greater than 7. In this croquet club, handicaps range from -2 to +26; the better the player the lower the handicap.
// Input
// Input will consist of a list of lists containing two items each. Each list contains information for a single potential member. Information consists of an integer for the person's age and an integer for the person's handicap.
// Note for F#: The input will be of (int list list) which is a List<List>
// Example Input
// [[18, 20],[45, 2],[61, 12],[37, 6],[21, 21],[78, 9]]
// Output
// Output will consist of a list of string values (in Haskell: Open or Senior) stating whether the respective member is to be placed in the senior or open category.
// Example Output
// ["Open", "Open", "Senior", "Open", "Open", "Senior"]

function openOrSenior(data) {
  //destructure the elements in the array passed as a param and compare their values with the ones stated above
  return data.map(([age, handicap]) =>
    age > 54 && handicap > 7 ? "Senior" : "Open"
  );
}

// Write a function named sumDigits which takes a number as input and returns the sum of the absolute value of each of the number's decimal digits. For example:
//   sumDigits(10);  // Returns 1
//   sumDigits(99);  // Returns 18
//   sumDigits(-32); // Returns 5
// Let's assume that all numbers in the input will be integer values.

function sumDigits(number) {
  // Turn number into absolute value, turn the number into a string and make an array which elements are the characters in the string
  const values = String(Math.abs(number)).split("");
  //collector to hold math result
  let product = null;
  //for each value, add the value to the product and turn it into a number
  for (let i = 0; i < values.length; i++) {
    product = product + Number(values[i]);
  }
  //return the product
  return product;
}

// Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering.
// Write a function which takes a list of strings and returns each line prepended by the correct number.
// The numbering starts at 1. The format is n: string. Notice the colon and space in between.
// Examples:
// number([]) // => []
// number(["a", "b", "c"]) // => ["1: a", "2: b", "3: c"]

function number(array) {
  return array.map((item, i) => `${i + 1}: ${item}`);
}

// Task:
// Given a list of integers, determine whether the sum of its elements is odd or even.
// Give your answer as a string matching "odd" or "even".
// If the input array is empty consider it as: [0] (array with a zero).
// Examples:
// Input: [0]
// Output: "even"
// Input: [0, 1, 4]
// Output: "odd"
// Input: [0, -1, -5]
// Output: "even"
// Have fun!

function oddOrEven(array) {
  //a is the accumulator and b, the current value. the first 0 is the value at which the reducing starts
  return array.reduce((a, b) => a + b, 0) % 2 === 0 ? "even" : "odd";
}

// Welcome. In this kata, you are asked to square every digit of a number and concatenate them.
// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.
// Note: The function accepts an integer and returns an integer

function squareDigits(num) {
  const array = num
    .toString() //turn number into a string
    .split("") //split string
    .map((int) => {
      const i = parseInt(int); //turn every string into an integer
      return i * i;
    });

  return parseInt(array.join("")); //turn the elements in the array to a string and that string to an integer
}

// Count the number of divisors of a positive integer n.
// Random tests go up to n = 500000.
// Examples
// divisors(4)  = 3  // 1, 2, 4
// divisors(5)  = 2  // 1, 5
// divisors(12) = 6  // 1, 2, 3, 4, 6, 12
// divisors(30) = 8  // 1, 2, 3, 5, 6, 10, 15, 30

function getDivisorsCnt(n) {
  //collector to see how many divisors n has
  let totalDivisors = 0;

  for (let i = 1; i <= n; i++) {
    if (n % i == 0) {
      //if n is divisible by i, add the total number of divisors by 1
      totalDivisors++;
    }
  }

  return totalDivisors;
}

// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).
// Examples:
// solution('abc', 'bc') // returns true
// solution('abc', 'd') // returns false

function solution(str, ending) {
  return str.endsWith(ending);
}

// Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.

// The binary number returned should be a string.

// Examples:

// add_binary(1, 1) == "10" (1 + 1 = 2 in decimal or 10 in binary)
// add_binary(5, 9) == "1110" (5 + 9 = 14 in decimal or 1110 in binary)

function addBinary(a, b) {
  return (a + b).toString(2);
}

// Instructions
// Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.
// Example
// Test.assertSimilar( capitals('CodEWaRs'), [0,3,4,6] );

const capitals = (word) =>
  // split word into an array
  word
    .split("")
    //make a new array that gets the index of the capital letter
    .map((char, i) => (char === char.toUpperCase() ? i : false))
    // filter through each item in the new array and return a new array of just the index values
    .filter((num) => Number.isInteger(num));

//Return the number (count) of vowels in the given string.
// We will consider a, e, i, o, u as vowels for this Kata (but not y).
// The input string will only consist of lower case letters and/or spaces.

const countVowels = (str) =>
  //Convert the string to an array
  Array.from(str)
    //filter the array to contain only vowels and get how many of them are there
    .filter((char) => "aeiou".includes(char)).length;

//Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.
// Examples input/output:
// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

function XO(str) {
  //collectors
  let x = 0;
  let o = 0;

  for (let i = 0; i < str.length; i++) {
    //if a character in the string passed as a param is an x or an o, increase the counters declared before by 1
    if (str[i].toLowerCase() === "x") {
      x++;
    } else if (str[i].toLowerCase() === "o") {
      o++;
    }
  }
  //if x = o, return true
  return x === o;
}

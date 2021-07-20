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

// Write a function called repeatStr which repeats the given string string exactly n times.
// repeatStr(6, "I") // "IIIIII"
// repeatStr(5, "Hello") // "HelloHelloHelloHelloHello"

function repeatStr(n, s) {
  return s.repeat(n);
}

// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.
// The output should be two capital letters with a dot separating them.
// It should look like this:
// Sam Harris => S.H
// Patrick Feeney => P.F

function abbrevName(name) {
  return name
    .split(" ") //make an array which elements are the characters in the string not separated by an empty space
    .map((str) => str.charAt(0).toUpperCase()) //make a new array which elements are the first character of each string and turn them to upper case
    .join("."); //join each string in the array with a period between them and stringify them
}

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

// Make a program that filters a list of strings and returns a list with only your friends name in it.
// If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...
// Ex: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"]
// i.e.
// friend ["Ryan", "Kieran", "Mark"] `shouldBe` ["Ryan", "Mark"]
// Note: keep the original order of the names in the output.

function friend(friends) {
  return friends.filter((friend) => friend.length === 4);
}

// Take an integer n (n >= 0) and a digit d (0 <= d <= 9) as an integer.
// Square all numbers k (0 <= k <= n) between 0 and n.
// Count the numbers of digits d used in the writing of all the k**2.
// Call nb_dig (or nbDig or ...) the function taking n and d as parameters and returning this count.
// Examples:
// n = 10, d = 1
// the k*k are 0, 1, 4, 9, 16, 25, 36, 49, 64, 81, 100
// We are using the digit 1 in: 1, 16, 81, 100. The total count is then 4.
// nb_dig(25, 1) returns 11 since
// the k*k that contain the digit 1 are:
// 1, 16, 81, 100, 121, 144, 169, 196, 361, 441.
// So there are 11 digits 1 for the squares of numbers between 0 and 25.
// Note that 121 has twice the digit 1.

function nbDig(n, d) {
  //collector number
  let num = 0;

  for (let i = 0; i <= n; i++) {
    num += (i * i) //square i and assign its value to the collector number
      .toString() //convert num to a string
      .split("") //make an array which elements are the digits in num
      .filter((number) => number == d).length; //make an array which elements are the numbers equal to d and return how many of them there are
  }

  return num;
}

// Task:
// Your task is to write a function which returns the sum of following series upto nth term(parameter).
// Series: 1 + 1/4 + 1/7 + 1/10 + 1/13 + 1/16 +...
// Rules:
// You need to round the answer to 2 decimal places and return it as String.
// If the given value is 0 then it should return 0.00
// You will only be given Natural Numbers as arguments.
// Examples:
// SeriesSum(1) => 1 = "1.00"
// SeriesSum(2) => 1 + 1/4 = "1.25"
// SeriesSum(5) => 1 + 1/4 + 1/7 + 1/10 + 1/13 = "1.57"
// NOTE: In PHP the function is called series_sum().

function SeriesSum(n) {
  //collector number
  let sum = 0;
  //loop through denominators and add the fractions to the collector number
  for (let i = 0; i < n; i++) {
    sum += 1 / (3 * i + 1);
  }
  //round answer to two decimals
  return sum.toFixed(2);
}
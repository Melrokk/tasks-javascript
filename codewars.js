// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.

//#1
function findShort(s){
    var wordsArr = s.split(' ');
    var shortestWord = 100;
    for (var i = 0; i < wordsArr.length; i++){
        if(wordsArr[i].length < shortestWord){
            shortestWord = wordsArr[i].length;
        }
    }

    return shortestWord;
}
findShort("bitcoin take over the world maybe who knows perhaps");

//#2
function findShortWord(s) {
    var shortestWord = s.split(' ')
        .sort(function(a, b) {
            return a.length - b.length;
        });
    return shortestWord[0].length;
}
findShortWord("bitcoin take over the world maybe who knows perhaps");


//#3
function findShortW(s){
    return Math.min.apply(
        null,
        s.split(' ')
            .map(
                w => w.length
            )
    );
}

var x = 10, y = -20;
var z = Math.min(x, y);

findShortW("bitcoin take over the world maybe who knows perhaps");


function JadenCase(str) {
    str.split(' ').map(w => w[0].toUpperCase() + w.substring(1)).join(' ');
}
JadenCase("bitcoin take over the world maybe who knows perhaps");



// In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?
function makeNegative(num) {
    return 0-Math.abs(num);
}
makeNegative(0);


//Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.
var summation = function (num) {
    return num*(num+1)/2
};

summation(9);


//There is a bus moving in the city, and it takes and drop some people in each bus stop.
//
// You are provided with a list (or array) of integer arrays (or tuples). Each integer array has two items which represent number of people get into bus (The first item) and number of people get off the bus (The second item) in a bus stop.
//
// Your task is to return number of people who are still in the bus after the last bus station (after the last array). Even though it is the last bus stop, the bus is not empty and some people are still in the bus, and they are probably sleeping there :D
//
// Take a look on the test cases.
//
// Please keep in mind that the test cases ensure that the number of people in the bus is always >= 0. So the return integer can't be negative.
//
// The second value in the first integer array is 0, since the bus is empty in the first bus stop.

var number = function(busStops){
    return busStops.reduce((sum, cur) => sum + (cur[0] - cur[1]), 0);
    // return busStops.reduce((rem, [on, off]) => rem + on - off, 0); Best solution !!!!!
};

number([[3,0],[9,1],[4,8],[12,2],[6,1],[7,8]]);


//Complete the square sum method so that it squares each number passed into it and then sums the results together.
//
// For example: squareSum([1, 2, 2]) should return 9 because 1^2 + 2^2 + 2^2 = 9.
function squareSum(numbers){
    return numbers.reduce((sum, cur) => sum + Math.pow(cur, 2), 0);
}

squareSum([0, 3, 4, 5]);


//You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.
//
// Implement a function likes :: [String] -> String, which must take in input array, containing the names of people who like an item. It must return the display text as shown in the examples:
//
// likes [] // must be "no one likes this"
// likes ["Peter"] // must be "Peter likes this"
// likes ["Jacob", "Alex"] // must be "Jacob and Alex like this"
// likes ["Max", "John", "Mark"] // must be "Max, John and Mark like this"
// likes ["Alex", "Jacob", "Mark", "Max"] // must be "Alex, Jacob and 2 others like this"
// For 4 or more names, the number in and 2 others simply increases.

let sum = function likes(names) {
    let message = 'no one likes this';
    let likeThis = ' like this';
    let and = ' and ';
    if(names.length > 0) {
        if (names.length === 1) {
            return names[0] + ' likes this';
        }
        if (names.length === 2) {
            return names[0] + and + names[1] + likeThis;
        }
        if (names.length === 3) {
            return names[0] + ', ' + names[1] + and + names[2] + likeThis;
        }
        if (names.length > 3) {
            return (names[0] + ', ' + names[1] + and + (names.length - 2) + ' others' + likeThis);
        }
    } else {return message}
};

function likes(names) {
    return {
        0: 'no one likes this',
        1: `${names[0]} likes this`,
        2: `${names[0]} and ${names[1]} like this`,
        3: `${names[0]}, ${names[1]} and ${names[2]} like this`,
        4: `${names[0]}, ${names[1]} and ${names.length - 2} others like this`,
    }[Math.min(4, names.length)]
}

likes(["Alex", "Jacob", "Mark", "Max"]);
sum(["Alex", "Jacob", "Mark", "Max"]);


//Convert number to reversed array of digits
// Given a random number:
//
// C#: long;
// C++: unsigned long;
// You have to return the digits of this number within an array in reverse order.
//
// Example:
// 348597 => [7,9,5,8,4,3]

function digitize(n) {
    return String(n).split('').map(Number).reverse();
}
digitize("4784587365");


//Mr. Scrooge has a sum of money 'P' that wants to invest, and he wants to know how many years 'Y' this sum has to be kept in the bank in order for this sum of money to amount to 'D'.
//
// The sum is kept for 'Y' years in the bank where interest 'I' is paid yearly, and the new sum is re-invested yearly after paying tax 'T'
//
// Note that the principal is not taxed but only the year's accrued interest
//
// Example:
//
//   Let P be the Principal = 1000.00
//   Let I be the Interest Rate = 0.05
//   Let T be the Tax Rate = 0.18
//   Let D be the Desired Sum = 1100.00
//
//
// After 1st Year -->
//   P = 1041.00
// After 2nd Year -->
//   P = 1083.86
// After 3rd Year -->
//   P = 1128.30
// Thus Mr. Scrooge has to wait for 3 years for the initial pricipal to ammount to the desired sum.
//
// Your task is to complete the method provided and return the number of years 'Y' as a whole in order for Mr. Scrooge to get the desired sum.
//
// Assumptions : Assume that Desired Principal 'D' is always greater than the initial principal, however it is best to take into consideration that if the Desired Principal 'D' is equal to Principal 'P' this should return 0 Years.

function calculateYears(principal, interest, tax, desired) {
    let i = 0;
    while (principal < desired) {
        let posPerc = principal*interest;
        let negPerc = posPerc*tax;
        let sumPerc = posPerc - negPerc;
        principal = principal+sumPerc;
        i = i+1;
    }
    return i;
}
calculateYears(1000,0.01625,0.18,1200);


//Trolls are attacking your comment section!
//
// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.
//
// Your task is to write a function that takes a string and return a new string with all vowels removed.
//
// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".
//
// Note: for this kata y isn't considered a vowel.

function disemvowel(str) {
    str.replace(/[aeiou]/gi, "");
}
disemvowel("This website What are y is for losers LOL!");


//As a part of this Kata, you need to create a function that when provided with a triplet, returns the index of the numerical element that lies between the other two elements.
//
// The input to the function will be an array of three distinct numbers (Haskell: a tuple).
//
// For example:
//
// gimme([2, 3, 1]) => 0
// 2 is the number that fits between 1 and 3 and the index of 2 in the input array is 0.
//
// Another example (just to make sure it is clear):
//
// gimme([5, 10, 14]) => 1
// 10 is the number that fits between 5 and 14 and the index of 10 in the input array is 1.

var gimme = function (a) {
     if (a[0] > a[1] && a[0] < a[2] || a[0] < a[1] && a[0] > a[2]) {
        return 0;
    } else {
        if(a[1] > a[1] && a[1] < a[2] || a[12] < a[0] && a[1] > a[2]) {
            return 1;
        } else {
            return 2;
        }
    }
};
// function gimme(a) {
//     return a.indexOf(
//         a.concat()
//             .sort(function(a, b) { return a - b })[1]
//     )
// }
// var gimme = function ([a,b,c]) {
//     return (a > b && a < c || a < b && a > c)?0:(b > a && b < c || b < a && b > c)?1:2
// };
gimme([2, 3, 1]);


//A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).
//
// Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

function isPangram(string){
    return (string.match(/([a-z])(?!.*\1)/gi) || []).length === 26;
}
var string = "The quick brown fox jumps over the lazy dog.";
isPangram(string);

//Welcome.
//
// In this kata you are required to, given a string, replace every letter with its position in the alphabet.
//
// If anything in the text isn't a letter, ignore it and don't return it.
//
// "a" = 1, "b" = 2, etc.
//
// Example
// alphabet_position("The sunset sets at twelve o' clock.")
// Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" (as a string)

function alphabetPosition1(text) {
    text=text.toUpperCase();
    let result = "";
    for (let i = 0; i<text.length; i++) {
        let num = text.charCodeAt(i)-64;
        if (num <= 0){
            continue;
        }
        if(result){
            result += " ";
        }
        result += num;
    }
}

function alphabetPosition2(text) {
    text.toUpperCase()
        .match(/[a-z]/gi)
        .map( (c) => c.charCodeAt() - 64)
        .join(' ');
}

alphabetPosition1("Among the, I have never been clear. I am quite sure she never made the slightest effort to make my acquaintance.");
alphabetPosition2("Among the, I have never been clear. I am quite sure she never made the slightest effort to make my acquaintance.");


//The Western Suburbs Croquet Club has two categories of membership, Senior and Open. They would like your help with an application form that will tell prospective members which category they will be placed.
//
// To be a senior, a member must be at least 55 years old and have a handicap greater than 7. In this croquet club, handicaps range from -2 to +26; the better the player the lower the handicap.
//
// Input
// Input will consist of a list of lists containing two items each. Each list contains information for a single potential member. Information consists of an integer for the person's age and an integer for the person's handicap.
//
// Note for F#: The input will be of (int list list) which is a List<List>
//
// Example Input
// [[18, 20],[45, 2],[61, 12],[37, 6],[21, 21],[78, 9]]
// Output
// Output will consist of a list of string values (in Haskell: Open or Senior) stating whether the respective member is to be placed in the senior or open category.
//
// Example Output
// ["Open", "Open", "Senior", "Open", "Open", "Senior"]

function openOrSenior(data){
  return  data.map(item => {return (item[0] > 55 && item[1] > 7) ?  'Senior' : 'Open';})
}

openOrSenior([[59, 12],[55,-1],[12, -2],[12, 12]]);


// Sum of Pairs
// Given a list of integers and a single sum value, return the first two values (parse from the left please) in order of appearance that add up to form the sum.
//
// sum_pairs([11, 3, 7, 5],         10)
// #              ^--^      3 + 7 = 10
// == [3, 7]
//
// sum_pairs([4, 3, 2, 3, 4],         6)
// #          ^-----^         4 + 2 = 6, indices: 0, 2 *
// #             ^-----^      3 + 3 = 6, indices: 1, 3
// #                ^-----^   2 + 4 = 6, indices: 2, 4
// #  * entire pair is earlier, and therefore is the correct answer
// == [4, 2]
//
// sum_pairs([0, 0, -2, 3], 2)
// #  there are no pairs of values that can be added to produce 2.
// == None/nil/undefined (Based on the language)
//
// sum_pairs([10, 5, 2, 3, 7, 5],         10)
// #              ^-----------^   5 + 5 = 10, indices: 1, 5
// #                    ^--^      3 + 7 = 10, indices: 3, 4 *
// #  * entire pair is earlier, and therefore is the correct answer
// == [3, 7]
// Negative numbers and duplicate numbers can and will appear.
//
// NOTE: There will also be lists tested of lengths upwards of 10,000,000 elements. Be sure your code doesn't time out.

//
// var sum_pairs=function(ints, s){
//     for (let i = 0; i < ints.length; i++) {
//         for (let j=i-1; j >= 0; j--){
//             if(ints[i]+ints[j] === s) {
//                 return [ints[j], ints[i]];
//             }
//             if(ints[i] === ints[j]) {
//                 break;
//             }
//         }
//     }
// };

var sum_pairs=function(ints, s){
    var seen = {};
    for (var i = 0; i < ints.length; ++i) {
        if (seen[s - ints[i]]) return [s - ints[i], ints[i]];
        seen[ints[i]] = true
    }
};

sum_pairs([1,4,8,7,3,15], 8);

//Story
// Your online store likes to give out coupons for special occasions. Some customers try to cheat the system by entering invalid codes or using expired coupons.
//
// Task
// Your mission:
// Write a function called which verifies that a coupon code is valid, the coupon is not expired.
//
// A coupon is no more valid on the day AFTER the expiration date. All dates will be passed as strings in this format: "MONTH DATE, YEAR".
//
// Examples:
// checkCoupon("123", "123", "July 9, 2015", "July 9, 2015")  ===  true
// checkCoupon("123", "123", "July 9, 2015", "July 2, 2015")  ===  false

function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
    // let current = new Date(currentDate);
    // let expiration = new Date(expirationDate);
    return new Date(expirationDate) >= new Date(currentDate) && correctCode === enteredCode;
}

checkCoupon('123','123','September 5, 2014','October 1, 2014');


//Prior to having fancy iPhones, teenagers would wear out their thumbs sending SMS messages on candybar-shaped feature phones with 3x4 numeric keypads.
//
// ------- ------- -------
// |     | | ABC | | DEF |
// |  1  | |  2  | |  3  |
// ------- ------- -------
// ------- ------- -------
// | GHI | | JKL | | MNO |
// |  4  | |  5  | |  6  |
// ------- ------- -------
// ------- ------- -------
// |PQRS | | TUV | | WXYZ|
// |  7  | |  8  | |  9  |
// ------- ------- -------
// ------- ------- -------
// |     | |space| |     |
// |  *  | |  0  | |  #  |
// ------- ------- -------
// Prior to the development of T9 (predictive text entry) systems, the method to type words was called "multi-tap" and involved pressing a button repeatedly to cycle through the possible values.
//
// For example, to type a letter "R" you would press the 7 key three times (as the screen display for the current character cycles through P->Q->R->S->7). A character is "locked in" once the user presses a different key or pauses for a short period of time (thus, no extra button presses are required beyond what is needed for each letter individually). The zero key handles spaces, with one press of the key producing a space and two presses producing a zero.
//
// In order to send the message "WHERE DO U WANT 2 MEET L8R" a teen would have to actually do 47 button presses. No wonder they abbreviated.
//
// For this assignment, write a module that can calculate the amount of button presses required for any phrase. Punctuation can be ignored for this exercise. Likewise, you can assume the phone doesn't distinguish between upper/lowercase characters (but you should allow your module to accept input in either for convenience).
//
// Hint: While it wouldn't take too long to hard code the amount of keypresses for all 26 letters by hand, try to avoid doing so! (Imagine you work at a phone manufacturer who might be testing out different keyboard layouts, and you want to be able to test new ones rapidly.)


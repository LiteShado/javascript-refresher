//find longest word. write a function that takes a string. return the longest word the string contains.

// function longest_word(str) {
//     let arr = str.split(" ");
//     return arr.sort((a, b) => {
//         return b.length - a.length;
//     })[0];
// }
// console.log(longest_word(('The quick brown fox jumped over the lazy elephant')));





//Summing array items. given an array, write a function name sumArrItems that akes an array an return the sum of the array items.

//create an array of integers

//method 1

// let integers = [1, 2, 3, 4];

// function sumArrayItems(arr) {

//     let sum = 0;

//     for(let i=0; i<arr.length; i++) {
//         sum += arr[i];
//     }
//     return sum;
// }

// console.log(sumArrayItems(integers));


//method 2

// let integers = [1, 2, 3, 4];

// function sumArrayItems(arr) {
//     let sum = 0;
//     arr.forEach((integer) => {
//         sum += integer;
//     })
//     return sum
// }
// console.log(sumArrayItems(integers));

//method 3
// let integers = [5, 6, 1];

// function sumArrayItems(arr) {
//     return arr.reduce((sum, current) => {
//         return sum + current;
//     }, 0)
// }
// console.log(sumArrayItems(integers));



//word counter
// write a function that takes one string and return the nummber of word that contains in the strings.


// let str = "The quick brown fox jump over the lazy dog";

// function wordCounter(str) {
//     let arr = str.split(" ");
//     return arr.length;
// }
// console.log(wordCounter(str));



//sum numbers in a range. write a function that takes range of a number "9-11". return the sum of number in between of the range.

// function sumInRange(range) {
//     let sum = 0;
//     let arr = range.split("-");
//     for(let i=arr[0]; i<=arr[1]; i++) {
//         sum += parseInt(i);
//     }
//     return sum
// }
// console.log(sumInRange("10-20"));

// let max = 3
// for(let i=arr[0]; i<=arr[1]; i++) {
//  console.log


//Summ all digits in a number. Given a number, write a function takes the number and return the sum of all the digits of the number.

// function adder(num) {
//     let sum = 0;
//     let arr = num.toString().split("");
//     // for(let i=0; i<arr.length; i++) {
//     //     sum += parseInt(arr[i]);
//     // }

//     for(let el of arr) {
//         sum += parseInt(el);
//     }
//     return sum;
// }

// console.log(adder(1234));

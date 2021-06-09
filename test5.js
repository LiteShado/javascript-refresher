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

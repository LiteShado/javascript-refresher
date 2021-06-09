//write a function that takes an array, removee all the falsy elements from the array. return the array.

// function bouncer(arr) {
//     let result = [];
//     for(let el of arr) {
//         if(el) {
//             result.push(el);

//         }
//     }
//     return result;
// }
// console.log(bouncer([1, 2, 3, 4, false, null]))


// function bouncer(arr) {
//     return arr.filter((el) => {
//         return el;
//     })
// }

// console.log(bouncer([1, 2, 3, 4, false, null, undefined]));


//write a function that takes a strings and a character. if the strings end with the character then return true, else return false.

// function confirm_ending(str, ch) {
//     let reversed = str.split("").reverse();
//     return reversed[0] === ch;
// }
// console.log(confirm_ending('hello', 'o'));


//write a function that takes range of a number "9-11", return the sum of number in between of the range.

// function sumInRange(range) {
//     let arr = range.split('-');
//     console.log(arr);
// }
// sumInRange('1-4');

// function sumInRange(range) {
//     let arr = range.split("-");
//     let result = 0;
//     for(let i=arr[0]; i<arr[1]; i++) {
//         result += parseInt(i);
//     }
//     return result;
// }
// console.log(sumInRange("10-20"));




//Sorting Array
// write a function that takes an array, return ascending of the array.

// function asc(arr) {
//     return arr.sort((a, b) => {
//         return a - b;
//     })
// }
// console.log(asc([1, 4, 2, 3]));


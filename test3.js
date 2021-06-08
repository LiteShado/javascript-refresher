/*
    Title: Anagrams
    >> Write down a program that will check two provided string anagrams of
    >> each other or not
    // One string is anagram of another if it uses the same characters in the
    // Same quantity only consider characters(letter+number) not spaces and
    // punctuations. It's case insensitive.
    ## Test ##
    input: str1='rail safety'    str2='fairy tales'  output: true
    input: str1='Rail! Safety!'  str2='fairy tales'  output: true
    input: str1='hello there'    str2="hey there"    output: false
*/

// function build_obj(str) {

// let obj={};
// for(let ch of str) {
//     if(obj[ch]) {
//             obj[ch] += 1;
//         }else {
//             obj[ch] = 1;
//         }
//     }
//     return obj;
// }

//     function is_anagrams(str1, str2) {

//     let s1 = str1.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
//     let s2 = str1.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
//     let o1 = build_obj(s1);
//     let o2 = build_obj(s2);

//     if (Object.keys(o1).length != Object.keys(o2).length) {
//         return false;
//     }

//     for(let p in o1) {
//         if(o1[p] != o2[p]) {
//             return false;
//         }

//     }
//     return true;
// }

// console.log(is_anagrams("rail safety", "fairy tales"))






// write a function that takes an array and return sum of all elements//

// function sumArray(arr) {
//     let result = 0;
//     for(let i=0; i<arr.length; i++) {
//         result = result + arr[i];
//     }
//     return result;
// }
// let arr = [2, 4, 5, 6]
// console.log(sumArray([2, 4, 5, 6]));

// function sumArray(arr) {
//     let result = 0;
//     arr.forEach((el) => {
//         result += el;
//     });
//     return result;
// }
// console.log(sumArray)

// function sumArray(arr) {
//     return arr.reduce((sum, curr) => {
//         return sum + curr;
//     }, 0)
// }
// console.log(sumArray([1, 2, 3, 4]));


//writing a function that takes a strings, return the number of word exists in the strings

// function count(str) {
//     let arr = str.split(" ");
//     let result = [];
//     for(let el of arr) {
//         if(/[a-zA-Z0-9]+/.test(el)) {
//             result.push(el);
//         }
//     }
//     return result.length;
// }
// console.log(count("hey there buddy"));

//write a function that takes a number(must be positive), and return the sum of all number




// function confirm_ending(str, ch) {
//     let reversed = str.split("").reverse();
//     return reversed[0] === ch;
//     console.log(reversed);
// }

// console.log(confirm_ending('hello', 'x'));

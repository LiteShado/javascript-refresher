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

function confirm_ending(str, ch) {
    let reversed = str.split("").reverse();
    return reversed[0] === ch;
}
console.log(confirm_ending('hello', 'o'));



// const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2]

// const squareList = (arr) => {
//     const squaredInt = arr.filter(num => Number.isInteger(num) && num > 0).map(x => x * x);
//     return squaredInt;
// };

// const squaredInt = squareList(realNumberArray);
// console.log(squaredInt);


//DESTRUCTURING
// const AVG_TEMPERATURES = {
//     today: 77.5,
//     tomorrow: 79
// };

// function getTempOfTmrw(avgTemperatures) {
//     "use strict";

//     const { tomorrow : tempOfTomorrow } = avgTemperatures;

//     return tempOfTomorrow;
// }

// console.log(getTempOfTmrw(AVG_TEMPERATURES));

/*

    Title: Sort values of three variables in ASC order

    >> Write down a program that will takes three number as input and

    >> will sort them in ASC order

    ## Test ##

    input: n1=5 n2=8 n3=3 output: n1=3 n2=5 n3=8

    input: n1=5 n2=2 n3=9 output: n1=2 n2=5 n3=9

*/


// let n1 = 5;
// let n2 = 8;
// let n3 = 9;

// let min = n1<n2&&n1<n3 ? n1: n2<n1&&n2<n3 ? n2: n3;
// let max = n1>n2&&n1>n3 ? n1: n2>n1&&n2>n3 ? n2 : n3;

// let sc = n1>n2&&n1>n3 ? n2>n2?n2:n3 : n2>n1&&n2>n3 ? n1>n3?n1:n3 : n1>n2?n1:n2;

// n1 = min;
// n2 = sc;
// n3 = max;

// console.log("n1", n1, "n2", n2, "n3", n3)


/*

Title: Factorial of a number

>> Write down a program that will find factorial of a number

## Test ##

input: 3  output: 6

input: 4  output: 24 // 1*2*3*4 = 24

*/

//iterative approach

// function factorial(number) {
// let fact = 1;
// for(let i =1; i<=number; i++) {
//     fact *= i;
// }
// return fact;
// }
// console.log(factorial(4));


//recursive approach

// function factorial(number) {
//     if(number ==1 ) {
//         return 1;

//     } else {
//         return number * factorial(number - 1);
//     }
// }
// console.log(factorial(4));

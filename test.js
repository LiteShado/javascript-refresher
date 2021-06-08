/*
Title" Area of Circle
*/

// const { QueryInterface } = require("sequelize/types");

// function area(radius) {
//     let area = 3.1416 * radius * radius;
//     return area;
// }

// console.log(area(5))

// function check(num) {
//     if(num%2==0){
//         return "Even";
//     }
//     if(num%2==1) {
//         return "Odd"
//     }
// }

// console.log(check(5))

// let n1 = 1;
// let n2 = 2;

// let tmp = n1;
// n1 = tmp;
// console.log("n1", n1, "n2", n2);

// let n1 = 1;
// let n2 = 2;

// n1 = n1 * n2;
// n2 = n1 / n2;
// n1= n1 / n2;
// console.log("n1", n1, "n2", n2)

// function min_max(n1, n2) {
//     let min = n1 > n2 ? n2 : n1;
//     let max = n1 > n2 ? n1: n2;
//     console.log("min=", min, "max=", max)
// }

// min_max(1, 2)

/*

    Title: Find min, max of three numbers

    >> Write down a program that will find minimum and maximum of three

    >> numbers using ternary operator

    ## Test ##

    input: 1 2 3 output: min=1 max=3

    input: 5 2 8 output: min=2 max=8

*/

// function min_max(n1, n2, n3) {
//     let min = n1<n2&&n1<n3 ? n1: n2<n1<n3 ? n2 : n3;
//     let max = n1>n2&&n1>n3 ? n1: n2>n1&&n2>n3 ? n2 : n3;
//     console.log("min=", min, "max=", max)
// }
// min_max(1, 2, 3)



// function caseInSwitch(val) {
//     var answer = "";

//     switch(val) {
//         case 1:
//             answer = "alpha"
//             break;
//         case 2:
//             answer = "omega"
//             break;
//         case 3:
//             answer = "theta"
//             break;
//         case 4:
//             answer = "gamma"
//             break;

//     }
//     return answer;
// }
// console.log (caseInSwitch(4))

// function caseInSwitch(val) {
//     var answer = "";

//     switch(val) {
//         case 1:
//             answer = "apple"
//             break;
//         case 2:
//             answer = "bird"
//             break;
//         case 3:
//             answer = "car"
//             break;
//         default:
//             answer = "hey"
//             break;

//     }
//     return answer;
// }
// console.log (caseInSwitch(3))


// function seqSizes(val) {
//     var answer = "";
//     switch(val) {
//         case 1:
//         case 2:
//         case 3:
//             answer = "Low";
//             break;
//         case 4:
//         case 5:
//         case 6:
//             answer = "Mid";
//             break;
//         case 7:
//         case 8:
//         case 9:
//             answer = "High";
//             break;
//     }
//     return answer;
// }
//  console.log(seqSizes(5));


// function abTest(a, b) {

//     if (a < 0 || b < 0) {
//         return undefined;
//     }

//     return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
// }
// console.log(abTest(-2, 2))


// var count = 0;
// function cc(card) {
//     switch(card) {
//         case 2:
//         case 3:
//         case 4:
//         case 5:
//         case 6:
//                 count++;
//                 break;
//         case 10:
//         case "J":
//         case "Q":
//         case "K":
//         case "A":
//                 count--;
//                 break;
//     }
//     var holdbet = "Hold";

//     if (count > 0) {
//         holdbet = "Bet"
//     }
//     return count + " " + holdbet;
// }

// cc(2); cc(3); cc(7); cc(10); cc('A');
// console.log(cc(4));


// function phnoeLookup(val) {
//     var result = "";

//     var lookup = {
//         "alpha" : "Adams",
//         "bravo" : "Boston",
//         "charlie" : "Chicago",
//         "delta" : "Denver",
//         "echo" : "Easy",
//         "foxtraot" : "Frank",
//     };
//     result = lookup[val];
//     return result;
// }
// console.log(phnoeLookup("alpha"));

// function checkEqual(a, b) {
//     if(a === b) {
//         return true;
//     }
//     else {
//         return false;
//     }
// }
// console.log(checkEqual(1, 2))


// function checkSign(num) {
//     return num > 0 ? "positive" : num < 0 ? "negative" : "zero"
// }

// console.log(checkSign(0));


// var catName = "Quicy";
// var quote;

// catName = "Beau";

// function catTalk() {
//     "use strict";

//     catName = "Oliver";
//     quote = catName + "says Meow";
// }

// console.log(catTalk())


// function checkScope() {
//     "use strict"

//         var i = "function scope";
//         if (true) {
//             i = "block scope";
//             console.log("Block scope i is: ", i)

//         }
//         console.log("Function scope i is: ", i);
//         return i;
// }

// checkScope();


// function printMany(str) {
//     "use strict";

//     const sentence = str + " is cool";

//     for(var i = 0; i < str.length; i+=2) {
//         console.log(sentence)
//     }
// }
// printMany("This");


// const s = [5,7,2];
// function editPlace() {
//     "use strict";

//     s[0] = 2;
//     s[1] = 5;
//     s[2] = 7;
// }
// editPlace();
// console.log(s);


// function freeze() {
//     "use strict";
//     const MATH_CONSTANTS = {
//         PI: 3.14
//     };

//     Object.freeze(MATH_CONSTANTS);
//     try {
//         MATH_CONSTANTS.PI = 99;
//     } catch( ex ) {
//         console.log(ex);
//     }
//     return MATH_CONSTANTS.PI;
// }

// const PI = freeze();

// console.log(PI);


// const magic = () => new Date();



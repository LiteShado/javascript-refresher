/*
Title" Area of Circle
*/

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

function min_max(n1, n2, n3) {
    let min = n1<n2&&n1<n3 ? n1: n2<n1<n3 ? n2 : n3;
    let max = n1>n2&&n1>n3 ? n1: n2>n1&&n2>n3 ? n2 : n3;
    console.log("min=", min, "max=", max)
}
min_max(1, 2, 3)

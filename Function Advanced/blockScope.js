// if(true){
//     let car = "tesla";
//     console.log(car);
// }
// console.log(car);//OUTPUT:car is not defined

//this is how let and const behave regarding block scope

//tells us that car is scope inside this conditional/is scope to this block of code

//same thing like we had a while loop, for loop, for of loop, for in loop, etc.

// {
//     //blocks in JS are denoted by curley braces {...}
// }




//Object literal is not the same with block of scope
// this is an object 
// {
//     a: 1,
//     b: 2,
// }
//----------------------------------------------------------------

//this how var behaves in block scope
// there is no block scope rules in var for conditional statement
// if(true){
//     var car = "tesla";
//     console.log(car);
// }
// console.log(car);//OUTPUT:car is printed inside and outside of the block

// it will become problematic if we have a lot of variables x outside and inside of the block scope.

// let plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];
// var x = 100;
// for(var x = 0; x  < plants.length; x++) {
//     console.log(x, plants[x]);
// }
// console.log(x);


//instead use let to declare inside the block scope conditional statement if you want the loops work to read the variable outside the block scope.
// let plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];
// var x = 100;
// for(let x = 0; x  < plants.length; x++) {
//     console.log(x, plants[x]);
// }
// console.log(x);

//----------------------------------------------------------------
//const does not allow reassignment, and not works in for loop because it will break and incremented not possible for it.

//----------------------------------------------------------------
// let and const variables cannot be declared with the same scope, either var can be declared with the same scope.
// we cannot  use the same identifier twice in the same scope for let and const.
// ----------------------------------------------------------------

//OUTPUT: it will double the array and return the result.
// function doubleArr(arr){
//     const result  = [];
//     for(let num of arr){
//         let double = num * 2;
//         result.push(double)
//     }
//     return result;
// }
//----------------------------------------------------------------

//OUTPUT: it will not defined because it is not declared with the same scope.
// function doubleArr(arr){
//     const result  = [];
//     for(let num of arr){
//         let double = num * 2;
//         result.push(double)
//     }
//     console.log(double);
//     return result;
// }

//OUTPUT: it will  defined because it is not declared with the same scope.
// function doubleArr(arr){
//     const result  = [];
//     for(let num of arr){
//         var double = num * 2;
//         result.push(double)
//     }
//     console.log(double)
//     return result;
// }



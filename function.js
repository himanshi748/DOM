// ques 1 function
// function one(){
//     console.log('first question');
// }
// one();

// QUES 2 print sum
// function sum(a,b){
//     let result = a + b;
//     console.log(result)
// }
// sum(4,3);

//OUTPUT : 7

// ques 3

// let a = 'Aman';
// let b = 'Shukla';
// let c = 99;
// function age(){
//     console.log(a,b,'is',c,'year old');
// }
// age(a,b,c);

// OUTPUT : Aman Shukla is 99 year old

// ques 4 arrow function

// let result=(a,b)=>{
//     console.log(a*b)
// }
// result(3,4); 

// let hello=()=>{
//     console.log('Hello')
// }
// hello();
 

// // QUES 5 "Print output: 
// var x = 21;
// var girl = function () {
//     console.log(x);
//     var x = 20;
// };
// girl ();

// OUTPUT : x is not defined(undefined)


// // QUES 6 "Print output: 
// var x = 21;
// girl ();
// console.log(x)
// function girl() {
//     console.log(x);
//     var x = 20;
// };

// OUTPUT : 21, x is not defined


// //QUES 7 "Print output

// var x = 21;
// a();
// b();
// console.log(a);
// function a () {
    
//     var x = 20;
// console.log(x);
// };

// function b () {
    
//     var x = 40;
// console.log(x);
// };

// OUTPUT : function defination of a ,20 ,40


// // QUES 8 "Print output

// var x = 21;
// a();
// b();
// console.log(a);
// function a () {
    
//    x = 20;
//   console.log(x);
// };
// function b () {
    
//     x = 40;
//    console.log(x);
// };

// OUTPUT : function defination of a ,20 ,40



// // QUES 9 "Print output

// var x = 21;
// a();
// b();
// console.log(a);
// a = function() {
    
//    x = 20;
//   console.log(x);
// };
// b = function() {
    
//     x = 40;
//    console.log(x);
// };

// OUTPUT : a is not defined.



// // QUES 10Write a function that accepts parameter n and returns factorial of nfunction factorial(n){
  function factorial(n)
  {
    if(n == 0 || n == 1){
        return 1;
    }else{
        return n * factorial(n-1);
    }
}
let n = 4;
answer = factorial(n)
console.log("The factorial of " + n + " is " + answer);
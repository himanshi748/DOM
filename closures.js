// print output
//     function counter(){
//     var counter = 0;

//     function IncreaseCounter() {
//         return counter += 1;
//     };

//     return IncreaseCounter;
// }

// var counter = Counter();
// alert(counter());
// alert(counter());
// alert(counter());
// alert(counter());

// output  : counter not defined

// 2 ques 
// let count = 0;
// (function immediate() {
//   if (count === 0) {
//     let count = 1;
//     console.log(count); // What is logged?
//   }
//   console.log(count); // What is logged?
// })();
// output : 1,0

// ques 3 
// for (var i = 0; i < 3; i++) {
//   setTimeout(function log() {
//     console.log(i); // What is logged?
//   }, 1000);
// }
// output: 1,2,3


// 4 Write a code to explain closure

// function add(x){
//     return function(y){
//         return x+y;
//     };
// }
// var adder = add(5);
// var adder1 = add(10);

// console.log(adder(2));
// console.log((adder1(2)))
// output 7,12;

// function outer(){
//     var num = 5;
//     function inner(){
//         console.log(num);
//     }
//     return inner;
// }
// var result = outer();
// result();
// output 5;


// 5 Write a code to calculate area of a rectangle using inner function. In this case outer function should accept parameter length and inner function should accept parameter breadth.

// function areaofRectangle(){
//     var num = 30;
//     function getBreath(){
//         var num1 = 2;
//         var mul = num * num1
//         console.log(mul);
//     }
//     return getBreath;
// }
// var result = areaofRectangle();
// result();




// 6 Take a variable in outer function and create an inner function to increase the counter every time it is called
//     function counter(){
//     var counter = 0;

//     function IncreaseCounter() {
//         return counter += 1;
//     };

//     return IncreaseCounter;
// }

// var counter = counter();
// alert(counter());
// alert(counter());
// alert(counter());
// alert(counter());
// 1,2,3,4




// 7 "Print Output

// var a = 12;
// (function () {
//   alert(a);
// })();

// // 6 
// var a = 10;
// var x = (function () {
//   var a = 12;
//   return function () {
//     alert(a);
//   };
// })();
// x();
 
 // output : alert 12 

// // 8
// var globalVar = ""xyz"";

// (function outerFunc(outerArg) {
//     var outerVar = 'a';
    
//     (function innerFunc(innerArg) {
//     var innerVar = 'b';
    
//     console.log(
//         ""outerArg = "" + outerArg + ""\n"" +
//         ""innerArg = "" + innerArg + ""\n"" +
//         ""outerVar = "" + outerVar + ""\n"" +
//         ""innerVar = "" + innerVar + ""\n"" +
//         ""globalVar = "" + globalVar);
    
//     })(456);
// })(123);



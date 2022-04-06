																									
//ques 1:  Write one example explaining how you can write a callback function ?	
// Ans 1 :	
// function greet(name,callback) {
// 	console.log('Hi,'+""+name);
// 	callback()
// }
// function call(){
// 	console.log('I am waiting for you')
// }
// greet("Meenu",call);


// ques 2: "Write callback function to print numbers from 1 to 7, in which 1 should be printed after 1 sec , 2 should be printed after 2 sec, 3 should be printed after 3 sec and so on. 
// Explain callback hell.
// Numbers
// 1
// 2
// 3
// 4
// 5
// 6
// 7"	
// Ans 2 :
// const animate =(animate) =>{
// 	setTimeout(() =>{
// 		console.log(1);
// 		setTimeout(() =>{
//          console.log(2);
//          setTimeout(() => {
//          	console.log(3);
//          	setTimeout(() => {
//               console.log(4);
//               setTimeout(() => {
//               	console.log(5);
//               	setTimeout(() => {
//               		console.log(6);
//               		setTimeout(() =>{
//               			console.log(7);
//               		},1000)
//               	},1000)
//               },1000)
//          	},1000)
//          },1000);
// 		},1000);
// 	},1000);
// }
// animate(animate);


//ques 3 : "Write promise function to print numbers from 1 to 7, in which 1 should be printed after 1 sec , 2 should be printed after 2 sec, 3 should be printed after 3 sec and so on. 
// Ans 3 :
// Numbers
// 1
// 2
// 3
// 4
// 5
// 6
// 7"
// ans 3 :
// function print(num, delay) {
//     setTimeout(() => {
//         console.log(num)
//     }, delay)
// }

// print(1, 1000)
// print(2, 2000) 
// print(3, 3000)
// print(4, 4000)
// print(5, 5000)
// print(6, 6000)
// print(7, 7000)


// (b) // function num1(){
// 	console.log('1');
// }
// function num2(){
// 	console.log('2');
// }
// function num3(){
// 	console.log('3');
// }
// function num4(){
// 	console.log('4');
// }
// function num5(){
// 	console.log('5');
// }
// function num6(){
// 	console.log('6');
// }
// function num7(){
// 	console.log('7');
// }

// setTimeout(num1,1000);
// setTimeout(num2,2000);
// setTimeout(num3,3000);
// setTimeout(num4,4000);
// setTimeout(num5,5000);
// setTimeout(num6,6000);
// setTimeout(num7,7000);

// ques 4:  Create a promise function accepting a argument, if yes is passed to the function then it should go to resolved state and print Promise Resolved, and if nothing is passed then it should go to reject state and catch the error and print Promise Rejected 																									
ams //Ans 4 : 
// let promise = new Promise(function(resolve, reject) {
//   resolve("Promise Resolved!");
//   // reject("Promise reject!");
// })
// promise.then(
// 	function successValue(result){
// 		console.log(result);
// 	},)
// .catch(
// 	function errorValue(result){
// 		console.log(result);
// 	},);

//ques 5 : Create examples to explain callback function	
// Ans 5 : 																								// 
// function greet(name,callback) {
// 	console.log('Hi,'+""+name);
// 	callback()
// }
// function call(){
// 	console.log('I am waiting for you')
// }
// greet("Meenu",call);	



// ques 6 :Create examples to explain callback hell function	
// ans 6 :																								// 
// const animate =(animate) =>{
// 	setTimeout(() =>{
// 		console.log(A);
// 		setTimeout(() =>{
//          console.log(B);
//          setTimeout(() => {
//          	console.log(C);
//          	setTimeout(() => {
//               console.log(D);
//               setTimeout(() => {
//               	console.log(E);
//               	setTimeout(() => {
//               		console.log(F);
//               		setTimeout(() =>{
//               			console.log(G);
//               		},1000)
//               	},1000)
//               },1000)
//          	},1000)
//          },1000);
// 		},1000);
// 	},1000);
// }
// animate(animate);	


// ques 7: Create examples to explain promises function	
// Ans 7 :																								
	// let mypromise =new Promise(function(resolve,reject){
	// 	resolve();
	// 	reject();
		
	// });
	// mypromise.then(function success(data){
	// 	console.log('my promise is resolved');
	// })
	// .catch(function error(data){
	// 	console.log('reject');
	// })

//ques 8 : Create examples to explain async await function																									
// ans 8 :
//  function myfunc(letter) {
// 	let pro =new Promise((resolve,reject) => {
// 		setTimeout(() => {
// 			console.log(letter);
// 			resolve(letter)
// 		},1000)
// 	})
// }
// async function print(){
// 	await myfunc("A")
// 	console.log('Capital');
// 	await myfunc("B");
// 	await myfunc("C");
// 	console.log('letters')
// 	await myfunc("D");
// }
// print();


																									
// ques 9 : Create examples to explain promise.all function	
// ans 9 :																								
// function number1(){
// 	return new Promise((resolve,reject) => {
// 		setTimeout(() =>{
// 			resolve(1)
// 		},1000);
// 	})
// }
// function number2(){
// 	return new Promise((resolve,reject) => {
// 		setTimeout(() =>{
// 			resolve(2)
// 		},1000);
// 	})
// }

// function number3(){
// 	return new Promise((resolve,reject) => {
// 		setTimeout(() =>{
// 			resolve(3)
// 		},1000);
// 	})
// }

// function number4(){
// 	return new Promise((resolve,reject) => {
// 		setTimeout(() =>{
// 			resolve(4)
// 		},1000);
// 	})
// }

// function number5(){
// 	return new Promise((resolve,reject) => {
// 		setTimeout(() =>{
// 			resolve(5)
// 		},1000);
// 	})
// }

// function number6(){
// 	return new Promise((resolve,reject) => {
// 		setTimeout(() =>{
// 			resolve(6)
// 		},1000);
// 	})
// }

// function number7(){
// 	return new Promise((resolve,reject) => {
// 		setTimeout(() =>{
// 			resolve(7)
// 		},1000);
// 	})
// }
// async function result (){
// 	const [a,b,c,d,e,f,g] = await Promise.all([number1(),number2(),number3(),number4(),number5(),number6(),number7()]);
// 	console.log(a);
// 	console.log(b);
// 	console.log(c);
// 	console.log(d);
// 	console.log(e);
//     console.log(f);
// 	console.log(g);
// }
// result()
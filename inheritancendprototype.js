// 1: Create 2 objects - parent and child. Attach methods to parent and use those methods in child object using parents prototype
// let fruit = {
// 	name : "apple",
// 	color : "red"
   
// }
// let pineApple ={
// 	color: "yellow"
// }
// pineApple.__proto__ = fruit;
// console.log(pineApple);
// console.log(pineApple.name);  
// console.log(pineApple.hasOwnProperty('name'));
// console.log(pineApple.hasOwnProperty('color'));


// 2 : Write code to explain prototype chaining
// let mother = {
// 	cook : "yes",
// 	cares : "yes",
// 	eat : "yes"
// }
// let father = {
// 	sleep : "yes",
// 	walk : "yes",
// }
// let daughter = {
// 	dance : "yes",
// 	play : "yes"
// }
// let son = {
// 	sing : "yes"
// }
// mother.__proto__ = father;
// daughter.__proto__ = mother;
// son.__proto__ = daughter;
// console.log(son.eat);
// console.log(son.walk);
// console.log(son.dance);
// console.log(son.sing);

// 3 : Write a JavaScript function to retrieve all the names of object's own and inherited properties.
// let parent = {
// 	name:"Rahul",
// 	lastname : "singh",
// 	id : 24,
// }
// let child = {
// 	name1 : "shami",
// 	class : "2nd"
// }
// child.__proto__=parent;
// for(let key in child){
// 	if(child.hasOwnProperty(key)){
// 		console.log(child[key])
// 	}
// 	else{
// 		console.log(child[key])
// 	}
// }



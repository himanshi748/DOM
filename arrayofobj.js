// ques 1 =
let studentRecords = [
          {name: 'John', id: 123, marks : 98 },
          {name: 'Baba', id: 101, marks : 23 },
          {name: 'yaga', id: 200, marks : 45 },
          {name: 'Wick', id: 115, marks : 75 } 
          ]
// let  newrecord = [];
// for(let i=0;i<studentRecords.length;i++){
//     newrecord.push(studentRecords[i].name.toUpperCase());
// }
// console.log(newrecord);
//                                      _______or__________
// let names = studentRecords.map( stu => stu.name.toUpperCase());
// console.log(names);;


// ques 2 =
// let score = studentRecords.filter(sty => sty.marks>50);
// console.log(score);


// ques 3 =
// let id=studentRecords.filter(str => str.marks>50 && str.id>120);
// console.log(id);


// ques 4 =
// let sum = studentRecords.reduce(((acc,curr)=>acc + curr.marks),0);
// console.log(sum);


// ques 5 =
// let name1 = studentRecords.filter(str => str.marks>50);
// let name2 = name1.map(stry => stry.name);
// console.log(name2);


// ques 6 =
// let acc = 0 ;
// let sumid = studentRecords.filter(stc => stc.id > 120).map(str => str.marks).reduce(((acc,curr)=>acc+curr),0);
// console.log(sumid);


// ques 7 =
let score = studentRecords.filter(stz => stz.marks <50);
let sum ;
for(let i=0;i<=score.length;i++){
sum = 15 + score.marks[i]; 
}
console.log(sum);
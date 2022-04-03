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
//  let total = studentRecords
//        .map(function (str) {
//               if (str.marks < 50) {
//                 str.marks += 15;
//              }
//             return str;
//           })
//            .filter((str) => str.marks > 50)
//            .reduce((acc, curr) => acc + curr.marks, 0);
//          console.log(total);


 //Question 8:Create 6 objects , each object will have name, class, roll no as properties. Store these objects in an array of objects.
//   let obj1 = { name: "tin", class: "1st", rollno: "1" };
//   let obj2 = { name: "pin", class: "2nd", rollno: "2" };
//   let obj3 = { name: "kiin", class: "3rd", rollno: "3" };
//   let obj4 = { name: "singr", class: "6th", rollno: "4" };
//   let obj5 = { name: "Sonu", class: "8th", rollno: "5" };
//   let obj6 = { name: "Riyaa", class: "2nd", rollno: "6" };
  
//   let stud = [
//          { name: "tin", class: "1st", rollno: "1" },
//          { name: "pin", class: "2nd", rollno: "2" },
//          { name: "kiin", class: "3rd", rollno: "3" },         
//          { name: "singr", class: "6th", rollno: "4"},          
//          { name: "Sonu", class: "8th", rollno: "5" },         
//          { name: "Riyaa", class: "2nd", rollno: "6" },         
//   ];
//   console.log(stud);

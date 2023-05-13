/** @format */

let arr = [
  { id: 1, name: "john", age: "18", marks: 80 },
  { id: 2, name: "jack", age: "20", marks: 85 },
  { id: 3, name: "karen", age: "19", marks: 35 },
];

function PrintStudentswithMap() {
  //Write your code here , just console.log
  arr.map((ele) => {
    if (ele.marks > 50) {
      console.log(ele);
    }
  });
}

function PrintStudentsbyForEach() {
  //Write your code here , just console.log
  arr.forEach((ele) => {
    if (ele.marks > 50) {
      console.log(ele);
    }
  });
}

function addData() {
  //Write your code here, just console.log
  let student = { id: 4, name: "susan", age: "20", marks: 45 };
  arr.push(student);
  console.log(arr);
}

function removeFailedStudent() {
  //Write your code here, just console.log
  arr = arr.filter((ele) => {
    if (ele.marks >= 50) return true;
  });
  console.log(arr);
}

function concatenateArray() {
  //Write your code here, just console.log
  let list = [
    { id: 4, name: "Sid", age: 23, marks: 95 },
    { id: 5, name: "Kishan", age: 22, marks: 90 },
    { id: 6, name: "Anand", age: 20, marks: 96 },
  ];
  arr = arr.concat(list);
  console.log(arr);
}

//Testing Methods
//PrintStudentswithMap();
//PrintStudentsbyForEach();
//addData();
//removeFailedStudent();
//concatenateArray();

let student={
    name:"Aman",
    age:21,
    subjects:["FEE","Python","FAA"]
};
let copy=JSON.parse(JSON.stringify(student));
copy.subjects[1]="Fundamentals of C";
console.log(student);
console.log(copy);
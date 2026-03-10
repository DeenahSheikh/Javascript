//Property 1:skip values

/*const student={
    firstName:"John",
    lastName:"Doe",
    Department:"CSE",
    rollno:987,
    Jee:9876543,
    age:50,
    Gender:"male",
    tenth:96,
    twetlth:90
};
const{firstName,lastName,Department,rollno}=student;
console.log(firstName);
console.log(lastName);
console.log(Department);
console.log(rollno);*/


//Property 2: default values

/*let student={
    name:"Riya",
    age:20,
    Course:"CSE"
};
let{name,age=30,Course="BCA",city="Delhi"}=student;
console.log(name);
console.log(age);
console.log(Course);
console.log(city);
*/


//Property 3:Rest parameter
/*let student={
    name:"Riya",
    age:20,
    Course:"CSE",
    city:"CHD",
};
let{name,...others}=student;
console.log(name);
console.log(others);*/

/*let student={
    firstName:"John",
    lastName:"Doe",
    Department:"CSE",
    rollno:987,
    Jee:9876543,
    age:50,
    Gender:"male",
    tenth:96,
    twetlth:90
};
let{firstName,lastName,Department,rollno,...others}=student;
console.log(firstName);
console.log(lastName);
console.log(Department);
console.log(rollno);
console.log(others);*/

//Property 4:Nested object
let student={
    name:"Aman",
    age:21,
    address:{
        city:"Delhi",
        state:"Delhi"}
    };

let{name,age,address:{city,state}}=student;
console.log(name)

//stringify method
/*const user={name:"John",
    age:30,
    city:"New York"
};
const jsonString =JSON.stringify(user);

console.log(jsonString);
*/


//parse method
const jsonString='{"name":"John", "age":30,"city":"New York"}';
const userObject= JSON.parse(jsonString);
console.log(userObject.name);

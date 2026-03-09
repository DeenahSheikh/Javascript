//Array Destructring
/*const fruits =["Mango","Orange","Apple"];
const[fruit1, fruit2, fruit3, fruit4]=fruits;
console.log(fruit1);
console.log(fruit2);
console.log(fruit3);
console.log(fruit4);
*/


//property 1:Skip Values
/*const colors=["red","green","blue","yellow"];
const [firstColor, ,thirdColor]=colors;

console.log(firstColor);
console.log(thirdColor);
*/


//Property2:Undefined or missing values
/*const[name,age=30]=["John"];
console.log(name);
console.log(age);
*/


//Property 3:rest parameter
/*const numbers=[1,2,3,4,5];
const[first,second,...rest]=numbers;
console.log(first);
console.log(second);
console.log(rest);
*/

/*const name=["abc","def","drishti","deenah","z","c","v","rgf","gfd","gfuh"];
const[first,second,third,...rest]=name;

console.log(first);
console.log(second);
console.log(third);
console.log(rest);
*/



//Property4: swap without variable
/*let a=1;
let b=2;
let c=3;
let d=4;
[a,b,c,d]=[d,c,b,a];
console.log(a);
console.log(b);
console.log(c);
console.log(d);
*/

//Nested Array
const nestedArray=[1,[2, 3],4];
const[one,[two,three],four]=nestedArray;
console.log(two);
console.log(three);
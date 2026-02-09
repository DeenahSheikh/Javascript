let arr=[10,45, 22, 89];
//let max=arr[0];
//let min=arr[0];

/*for(let val of arr){
    if (val>max) max=val;
}
console.log("Max=", max);
*/

/*
for(let val of arr){
    if (val<min) min=val;
}
console.log("Min=", min);
*/

let sum=0;
let i=0;

while(i<arr.length){
    sum+=arr[i];
    i++;

}
console.log("Sum =", sum);
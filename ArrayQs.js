//Find min and max of the array
/*let arr1=[5,15,10,6];
arr1.sort((a,b)=>a-b);
let[min, , ,max]=arr1;
console.log(min);
console.log(max);
*/

//Combining two arrays
/*let arr1=[1,2];
let arr2=[3,4];
let combined=[...arr1,...arr2];
console.log(combined);
*/


//Combining nested arrays
/*let arr1=[1,[2,3],4];
let arr2=[7,8,[9,10]];
let combined=[...arr1,...arr2];
let[a,[b,c],d,e,f,[g,h]]=combined;
console.log(combined);
console.log(a,b,c,d,e,f,g,h);
*/

//New array is the multiplicatioin of first 2 arrays
let arr1=[1,2,3,4];
let arr2=[5,6,7,8];
let arr3= arr1.map((i,j)=> i*arr2[j]);
console.log(arr3);
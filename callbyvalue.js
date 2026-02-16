function changeValue(x){
    x=x+10;
    console.log("Inside function:",x);
}
let num=5;
changeValue(num);
console.log("Outside function:", num);
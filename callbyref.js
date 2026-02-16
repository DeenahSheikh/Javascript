let arr=[10,20,30];
console.log("Before:",arr);
function doubleValues(a){
    for(let i=0;i<a.length;i++){
        a[i] *=2;
        console.log(a);
    }
}
doubleValues(arr);
console.log("After:", arr);
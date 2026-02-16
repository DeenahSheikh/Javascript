function sum(n){
    if(n==1) return 1;//base class

    return n + sum(n-1);

}
let num= 12;
console.log("Sum=", sum(num));
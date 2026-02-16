function fact(n){
    if (n==1) return 1;
    return n*fact(n-1);
}
let num = 5;
console.log("Fact=", fact(num));
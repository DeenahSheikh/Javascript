let n=6789
let r=0;

while(n>0){
    let digit=n%10;
    r=r*10 + digit;
    n=Math.floor(n/10);
}

console.log(r);
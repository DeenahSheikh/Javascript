let n=1365;
let r=0;
let p= n;

while(n>0){
    let digit=n%10;
    r=r*10 + digit;
    n=Math.floor(n/10);
}

if (p==r){
    console.log("Palindrome");
}
else{
    console.log("Not Palindrome");
}
function reverse(num,r=0){
    if(num==0) return r;
    return reverse(Math.floor(num/10),r*10+ num%10);
}
console.log(reverse(1234));
//for loop pattern print

for(let i=1;i<=5; i++){
    let row="";
    let num=1;

    for(let j=1; j<=i; j++){
        row +=num + " ";
        num +=2;
    }
    console.log(row)
}

//while loop sum of even & odd no

let n=10;
let i=1;
let evensum=0;
let oddsum=0;
while(i<=n){
    if (i%2==0){
        evensum +=i;
    }
    else{
        oddsum +=i;
    }
    i++;
}
console.log("Sum of even number:", evensum);
console.log("Sum of odd numbers:", oddsum);



//for-in loop average of 5 subjects

let marks={A:90,B:70,C:60,D:80,E:90}
let sum=0;
let count=0;

for(let i in marks){
    sum+= marks[i];
    count++;
}

let average =sum/count;
let percentage= average

if (percentage>90){
    console.log("Excellent");
}
else if(percentage>70){
    console.log("V.good");
}
else if(percentage>50){
    console.log("Good");
}
else if(percentage>30){
    console.log("Poor");
}
else{
    console.log("Fail");
}



//for of print sum of all arr elts print max and min

let arr=[2,8,6,4,3,9];
let sum=0;
let max=arr[0];
let min=arr[0];
for(let i of arr){
    sum+=i;

    if (i>max){
        max=i;
    }
    if (i<min){
        min=i;
    }
}
console.log("Sum=",sum);
console.log("MAX=", max);
console.log("Min=",min);
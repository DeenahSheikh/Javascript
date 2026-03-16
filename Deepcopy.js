const original={a:1,b:{c:2}};
const deepCopy=JSON.parse(JSON.stringify(original));

deepCopy.a=3;
deepCopy.b.c=5;

console.log(original.a);
console.log(original.b.c);
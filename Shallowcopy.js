const original={a:1,b:{c:2}};
const shallowcopy={...original};
shallowcopy.a=3;//not affected because only works on nested
shallowcopy.b.c=5;
console.log(original.a);
console.log(original.b.c);
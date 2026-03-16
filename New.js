let product={
    id:201,
    name:"Mobile",
    price:25000,
    details:{
        brand:"Samsung",
        warranty:"1 year"
    }
};
let result=JSON.stringify(product, null, 4);
console.log(result);
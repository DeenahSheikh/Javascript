let numbers=[12,45,7,89,23];
let max= numbers.reduce(function(acc, curr){
    return curr> acc ? curr: acc;
});

console.log(max);
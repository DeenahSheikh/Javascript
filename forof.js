let numbers = [12, 7, 5, 20, 33, 18];

let sum = 0;
let max = numbers[0];
let min = numbers[0];

for (let num of numbers) {
    sum += num;

    if (num > max) {
        max = num;
    }

    if (num < min) {
        min = num;
    }
}

console.log("Numbers entered:", numbers);
console.log("Sum:", sum);
console.log("Maximum:", max);
console.log("Minimum:", min);

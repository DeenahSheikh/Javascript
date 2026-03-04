function findMax(arr, n) {
    // Base case
    if (n === 1) {
        return arr[0];
    }

    // Recursive call
    let maxOfRest = findMax(arr, n - 1);

    // Compare last element with max of rest
    if (arr[n - 1] > maxOfRest) {
        return arr[n - 1];
    } else {
        return maxOfRest;
    }
}

let numbers = [3, 8, 2, 10, 5];

console.log("Largest number:", findMax(numbers, numbers.length));
let arr = [1, 2, 3, 5];

let p = arr.length + 1;

let total = (p * (p + 1)) / 2;
let adds = arr.reduce((a, b) => a + b, 0);

console.log("Missing Number =", total - adds);
"use strict";
let t = 17;
let isPrime = true;
if (t <= 1) {
    isPrime = false;
}
for (let i = 2; i <= Math.sqrt(t); i++) {
    if (t % i === 0) {
        isPrime = false;
        break;
    }
}
console.log(isPrime ? "Prime Number" : "Not a Prime Number");

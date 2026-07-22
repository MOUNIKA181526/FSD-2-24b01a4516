let arr_1 = [1, 2, 3, 4, 5];
let r = 2;

let rotated = arr_1.slice(r).concat(arr_1.slice(0, r));

console.log(rotated);
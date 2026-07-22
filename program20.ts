let arr_ = [1, 2, 2, 3, 3, 3];
let count: any = {};

for (let num of arr_) {
    count[num] = (count[num] || 0) + 1;
}

console.log(count);
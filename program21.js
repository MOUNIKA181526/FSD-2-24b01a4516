"use strict";
let ar = [1, 2, 3, 2, 4, 5, 3];
let duplicates = [];
for (let i = 0; i < ar.length; i++) {
    if (ar.indexOf(ar[i]) !== i && !duplicates.includes(ar[i])) {
        duplicates.push(ar[i]);
    }
}
console.log(duplicates);

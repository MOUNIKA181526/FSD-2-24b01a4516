"use strict";
let s = "programming";
let result = "";
for (let ch of s) {
    if (!result.includes(ch)) {
        result += ch;
    }
}
console.log(result);

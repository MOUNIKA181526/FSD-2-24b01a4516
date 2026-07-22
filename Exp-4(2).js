"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Calculator;
(function (Calculator) {
    function add(a, b) {
        return a + b;
    }
    Calculator.add = add;
    function sub(a, b) {
        return a - b;
    }
    Calculator.sub = sub;
})(Calculator || (Calculator = {}));
console.log(Calculator.add(10, 20));
console.log(Calculator.sub(20, 10));
//# sourceMappingURL=Exp-4(2).js.map
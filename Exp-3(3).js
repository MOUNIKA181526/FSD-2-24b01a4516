"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class College {
    collegeName = "ABC College";
    static city = "Hyderabad";
    display() {
        console.log(this.collegeName);
        console.log(College.city);
    }
}
const c1 = new College();
c1.display();
//# sourceMappingURL=Exp-3(3).js.map
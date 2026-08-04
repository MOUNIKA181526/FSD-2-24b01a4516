"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const app = express();
app.use(express.json());
app.post('/student', (req, res) => {
    const student = req.body;
    res.json({
        message: 'Student Added Successfully',
        data: student
    });
});
app.listen(3000, () => {
    console.log('Server running on port 3000');
});
//# sourceMappingURL=Exp-6(2.1).js.map
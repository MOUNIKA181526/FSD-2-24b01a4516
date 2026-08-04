"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const app = express();
app.get('/student', (req, res) => {
    res.json({
        id: 101,
        name: 'Mounika',
        branch: 'AI & DS'
    });
});
app.listen(3000, () => {
    console.log('Server running on port 3000');
});
//# sourceMappingURL=Exp-5(3).js.map
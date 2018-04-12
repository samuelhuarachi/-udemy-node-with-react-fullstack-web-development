const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send({
        hi: 'samuel is there',
        "variable": "abc",
        age: 30,
        height: 1.79
    });
})

const PORT = process.env.PORT || 5000;

app.listen(PORT);

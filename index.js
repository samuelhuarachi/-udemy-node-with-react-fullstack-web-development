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

console.log(PORT);

app.listen(PORT);

const user = {
    age: 20,
    height: 1
}

Object.freeze(user);

var user2 = Object.assign({
    ... user,
    age: 30,
    height: 1.79
}, user);

console.log(user);

console.log(user2.height);
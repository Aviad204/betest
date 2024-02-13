const app = require('express')();

app.get('/hello', (req, res) => {
    res.send(`Hello`);
});

module.exports = app
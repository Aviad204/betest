const app = require('express')();

app.get('/hello', (req, res) => {
    res.send(`Hello`);
});

app.listen(process.env.PORT, () => {
    console.log("Server is running")
})
const express = require('express');
const sum = require('./sum');

const app = express();

const VERSION = process.env.VERSION || "v1";

// URL /sum?a=1&b=2
app.get('/sum', (req, res) => {
// get the parameters
const firstValue = Number(req.query.firstValue);
const secondValue = Number(req.query.secondValue);
//run the sum() function
const result = sum(firstValue, secondValue);
// return the output
res.json({ output: result });
});

app.get("/version", (req, res) => {
    res.json({ version: VERSION });
});

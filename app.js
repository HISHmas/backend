// app.js
const express = require("express");

const app = express();


app.use(express.json());

// 라우트 test
app.get("/ping", (req, res) => {
    res.send("pong");
});



module.exports = app;

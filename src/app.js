// app.js
const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors({
    origin: "http://localhost:3000",
    credentials: true
}));

// 기본 라우트
app.get("/", (req, res) => {
    res.send("Hello World!");
});

// ping 유지
app.get("/ping", (req, res) => {
    res.send("pong");
});

module.exports = app;

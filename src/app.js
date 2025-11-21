
const express = require('express');
const db = require('./config/db');

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
    res.send("Server is running");
});

app.get('/db-check', async (req, res) => {
    try {
        const result = await db.query("SELECT NOW()");
        res.json({
            ok: true,
            message: "DB connection OK",
            now: result.rows[0].now
        });
    } catch (err) {
        res.status(500).json({
            ok: false,
            message: "DB connection failed",
            error: err.message
        });
    }
});

module.exports = app;
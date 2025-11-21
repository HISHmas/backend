require('dotenv').config();
const express = require('express');
const app = express();

const db = require('./config/db');   // 경로는 너 프로젝트에 맞게

app.use(express.json());

app.get('/', (req, res) => {
    res.send("Server is running");
});


app.get('/db-check', async (req, res) => {
    let client;
    try {
        client = await db.getConnection();
        const result = await client.query('SELECT NOW()');
        res.status(200).json({
            ok: true,
            message: "DB connection OK",
            now: result.rows[0].now
        });

    } catch (err) {
        res.status(500).json({ ok: false, message: 'DB connection failed', error: err.message });

    } finally {
        if (client) db.closeConnection(client);
    }
});

module.exports = app;

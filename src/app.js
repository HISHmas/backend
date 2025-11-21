require('dotenv').config();

app.get('/db-check', async (req, res) => {
    let client;
    try {
        client = await db.getConnection();   // ← 너 파일의 getConnection()
        const result = await client.query('SELECT NOW()'); // 심플 체크

        return res.status(200).json({
            ok: true,
            message: 'DB connection OK',
            now: result.rows[0].now,
        });
    } catch (err) {
        console.error('DB Check Error:', err);
        return res.status(500).json({
            ok: false,
            message: 'DB connection failed',
            error: err.message,
        });
    } finally {
        if (client) db.closeConnection(client);
    }
});

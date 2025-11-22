const express = require("express");
const app = express();

const { swaggerUi, swaggerSpec } = require("./config/swagger");
const pool = require("./config/db");

app.use(express.json());

// swagger
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

/**
 * @swagger
 * /:
 *   get:
 *     summary: 기본 라우트
 *     responses:
 *       200:
 *         description: 서버 정상 동작 메시지
 */
app.get("/", (req, res) => {
    res.send("Hello from Express!");
});

module.exports = app;

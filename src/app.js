const express = require("express");
const app = express();

const { swaggerUi, swaggerSpec } = require("./config/swagger");

// 미들웨어
app.use(express.json());

// Swagger
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// ✨ 여기 라우터 import 추가!!!
const authRoutes = require("./routes/authRoutes");

// ✨ 라우터 등록 추가!!!
app.use("/api/auth", authRoutes);

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

const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();
const tokenRoutes = require("./routes/tokenRoutes");
const { swaggerUi, swaggerSpec } = require("./config/swagger");

// 미들웨어
app.use(express.json());
app.use(cookieParser());

// Swagger
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

const authRoutes = require("./routes/authRoutes");
app.use("/api/auth", authRoutes);

const userRoutes = require("./routes/userRoutes");
app.use("/api/user", userRoutes);

app.use("/api/token", tokenRoutes);

// ⭐ Letter Routes 추가!
const letterRoutes = require("./routes/letterRoutes");
app.use("/api/letters", letterRoutes);

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
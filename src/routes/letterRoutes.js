const express = require('express');
const router = express.Router();
const letterController = require('../controllers/letterController');

/**
 * @swagger
 * tags:
 *   name: Letter
 *   description: 편지 관련 API
 */

/**
 * @swagger
 * /api/letters:
 *   post:
 *     summary: 편지 생성
 *     description: 프론트에서 user_id, sender_name, content를 받아 편지를 저장합니다.
 *     tags: [Letter]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - user_id
 *               - sender_name
 *               - content
 *             properties:
 *               user_id:
 *                 type: integer
 *                 description: 편지를 받는 유저의 ID
 *                 example: 2
 *               sender_name:
 *                 type: string
 *                 description: 편지를 보낸 사람 이름
 *                 example: "산타클로스"
 *               content:
 *                 type: string
 *                 description: 편지 내용
 *                 example: "행복한 연말 보내!"
 *     responses:
 *       201:
 *         description: 편지가 성공적으로 저장됨
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "편지가 정상적으로 저장되었습니다."
 *                 letter:
 *                   type: object
 *                   properties:
 *                     letter_id:
 *                       type: integer
 *                       example: 1
 *                     user_id:
 *                       type: integer
 *                       example: 2
 *                     sender_name:
 *                       type: string
 *                       example: "산타"
 *                     content:
 *                       type: string
 *                       example: "고생 많았어!"
 *                     created_at:
 *                       type: string
 *                       example: "2025-11-22T15:30:00.000Z"
 */

router.post('/', letterController.createLetter);

module.exports = router;

const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/authMiddleware');
const objectController = require('../controllers/objectController');

/**
 * @swagger
 * tags:
 *   name: Object
 *   description: 오브젝트 관련 API
 */

/**
 * @swagger
 * /api/objects:
 *   post:
 *     summary: 오브젝트 추가
 *     tags: [Object]
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: star
 *               position_x:
 *                 type: number
 *                 example: 120.5
 *               position_y:
 *                 type: number
 *                 example: 200.3
 *     responses:
 *       201:
 *         description: 오브젝트 생성
 */
router.post('/', authMiddleware, objectController.createObject);

module.exports = router;

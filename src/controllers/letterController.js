const LetterService = require('../services/letterService');

exports.createLetter = async (req, res) => {
    try {
        const { user_id, sender_name, content } = req.body;

        // 필수 값 검증
        if (!user_id || !sender_name || !content) {
            return res.status(400).json({ message: "user_id, sender_name, content는 필수입니다." });
        }

        const newLetter = await LetterService.createLetter({
            user_id,
            sender_name,
            content
        });

        res.status(201).json({
            message: "편지가 정상적으로 저장되었습니다.",
            letter: newLetter
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "서버 오류가 발생했습니다." });
    }
};
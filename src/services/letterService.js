const LetterModel = require('../models/letterModel');

const LetterService = {
    // ✅ (기존 정답) 편지 작성 - 절대 변경 X
    async createLetter({ user_id, sender_name, content }) {
        return await LetterModel.createLetter({ user_id, sender_name, content });
    },

    // ✅ (추가) 편지 목록 조회
    async getLetters(user_id) {
        return await LetterModel.findLettersByUserId(user_id);
    },

    // ✅ (추가) 편지 단건 조회
    async getLetterDetail(letter_id, user_id) {
        return await LetterModel.findLetterById(letter_id, user_id);
    }
};

module.exports = LetterService;

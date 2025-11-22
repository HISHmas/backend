const LetterModel = require('../models/letterModel');

const LetterService = {
    async createLetter({ user_id, sender_name, content }) {
        return await LetterModel.createLetter({ user_id, sender_name, content });
    }
};

module.exports = LetterService;
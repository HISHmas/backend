const pool = require('../config/db');

const LetterModel = {
    async createLetter({ user_id, sender_name, content }) {
        const query = `
        INSERT INTO letter (user_id, sender_name, content)
        VALUES ($1, $2, $3)
        RETURNING letter_id, user_id, sender_name, content, created_at;
        `;
        const values = [user_id, sender_name, content];

        const result = await pool.query(query, values);
        return result.rows[0];
    }
};

module.exports = LetterModel;
const pool = require('../config/db');

const UserModel = {
    async createUser({ login_id, name, password, hashed_user_id, tree_url }) {
        const query = `
            INSERT INTO "user" 
                (login_id, name, password, hashed_user_id, tree_url)
            VALUES ($1, $2, $3, $4, $5)
            RETURNING user_id, login_id, name, tree_url, created_at;
        `;

        const values = [login_id, name, password, hashed_user_id, tree_url];
        const result = await pool.query(query, values);
        return result.rows[0];
    },

    async findByLoginId(login_id) {
        const result = await pool.query(
            `SELECT * FROM "user" WHERE login_id = $1`,
            [login_id]
        );
        return result.rows[0];
    },
};

module.exports = UserModel;
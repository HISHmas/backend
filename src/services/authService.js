const bcrypt = require('bcrypt');
const crypto = require('crypto');
const UserModel = require('../models/userModel');

const AuthService = {
    async signup({ login_id, name, password }) {
        // 중복 확인
        const exists = await UserModel.findByLoginId(login_id);
        if (exists) {
            throw new Error("이미 존재하는 로그인 아이디입니다.");
        }

        // 비밀번호 해싱
        const hashedPassword = await bcrypt.hash(password, 10);

        // hashed_user_id 생성 (UUID or sha256)
        const hashed_user_id = crypto.randomBytes(16).toString("hex");

        // tree_url 자동 생성
        const tree_url = `/tree/${hashed_user_id}`;

        // DB 저장
        const user = await UserModel.createUser({
            login_id,
            name,
            password: hashedPassword,
            hashed_user_id,
            tree_url
        });

        return user;
    }
};

module.exports = AuthService;
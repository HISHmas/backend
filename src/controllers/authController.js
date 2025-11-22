const AuthService = require('../services/authService');

exports.signup = async (req, res) => {
    try {
        const { login_id, name, password } = req.body;

        if (!login_id || !name || !password) {
            return res.status(400).json({
                message: "login_id, name, password는 필수입니다."
            });
        }

        const user = await AuthService.signup({ login_id, name, password });

        res.status(201).json({
            message: "회원가입 성공",
            user
        });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};
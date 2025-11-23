const ObjectService = require('../services/objectService');

exports.createObject = async (req, res) => {
    try {
        const { name, position_x, position_y } = req.body;

        if (!name || position_x === undefined || position_y === undefined) {
            return res.status(400).json({
                message: "name, position_x, position_y는 필수입니다."
            });
        }

        // JWT에서 user 정보 가져오기
        const user_id = req.user.user_id;

        const object = await ObjectService.create({
            name,
            user_id,
            position_x,
            position_y
        });

        return res.status(201).json({
            message: "object created",
            object
        });

    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

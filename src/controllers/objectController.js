const ObjectService = require('../services/objectService');

exports.createObject = async (req, res) => {
    try {
        const { name, position_x, position_y } = req.body;

        if (!name || position_x === undefined || position_y === undefined) {
            return res.status(400).json({
                message: "name, position_x, position_y는 필수입니다."
            });
        }

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
        return res.status(500).json({ message: err.message });
    }
};

// ⭐ 로그인한 사용자의 오브젝트 목록 조회
exports.getObjectsForUser = async (req, res) => {
    try {
        const user_id = req.user.user_id;

        const objects = await ObjectService.findAllByUserId(user_id);

        return res.status(200).json({
            message: "objects fetched",
            objects
        });

    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
};

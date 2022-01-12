const jwt = require('jsonwebtoken');

const createToken = (user) => {
    const token = jwt.sign({ userId: user.id, role: user.id }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_LIFETIME });
    return token;
};

module.exports = {
    createToken,
};
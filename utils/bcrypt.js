const bcrypt = require('bcryptjs');

const encryptPassword = async (password) => {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    return hashedPassword;
};

const comparePassword = async (password, userPassword) => {
    const isMatch = await bcrypt.compare(password, userPassword);
    return isMatch;
};

module.exports = {
    encryptPassword,
    comparePassword
};
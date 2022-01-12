const { ForbiddenError } = require('../errors');

const adminAuth = (req, res, next) => {
    if (req.user.role !== 'admin') {
        throw new ForbiddenError('Forbidden endpoint');
    }
    next();
};

module.exports = adminAuth;
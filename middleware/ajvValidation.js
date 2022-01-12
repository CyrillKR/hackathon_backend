const Ajv = require('ajv');
const ajv = new Ajv();
const addFormats = require('ajv-formats');
addFormats(ajv);
const { StatusCodes } = require('http-status-codes');

const validateBody = (schema) => {
    return (req, res, next) => {
        const valid = ajv.validate(schema, req.body);
        if (!valid) {
            res.status(StatusCodes.BAD_REQUEST).send(ajv.errors[0]['message']);
            return;
        }
        next();
    };
};

module.exports = {
    validateBody
};
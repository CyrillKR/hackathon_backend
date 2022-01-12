const S = require('fluent-json-schema');

const signUpSchema = S.object()
    .prop('name', S.string().required())
    .prop('email', S.string().required())
    .prop('password', S.string().minLength(3).required())
    .prop('verifyPassword', S.string().minLength(3).required())
    .valueOf();

const loginSchema = S.object()
    .prop('email', S.string().required())
    .prop('password', S.string().minLength(3).required())
    .valueOf();

module.exports = {
    signUpSchema,
    loginSchema
};
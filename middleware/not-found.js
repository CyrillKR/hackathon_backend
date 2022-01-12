const { StatusCodes } = require("http-status-codes");

const notFound = (req, res) => res.status(StatusCodes.NOT_FOUND).send('Endpoint not found');

module.exports = notFound;

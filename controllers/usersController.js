const { v4: uuidv4 } = require("uuid");
const { StatusCodes } = require("http-status-codes");
const { BadRequestError, NotFoundError } = require("../errors");
const { encryptPassword, comparePassword } = require("../utils/bcrypt");
const { signUpUserQuery } = require("../queries/userQueries");

const login = (req, res) => {
  const token = req.token;
  res.status(StatusCodes.OK).json({
    token,
    userInfo: req.body.user,
    message: "Login Success!",
  });
};

const signUpUser = async (req, res) => {
  const { email, password, firstName, lastName, verifyPassword } = req.body;

  if (password !== verifyPassword) {
    throw new BadRequestError("Passwords don't match");
  }

  const userId = uuidv4();
  const hashedPassword = encryptPassword(password);
  const user = await signUpUserQuery({
    userId,
    firstName,
    lastName,
    email,
    password: hashedPassword,
  });

  if (!user) {
    throw new NotFoundError("User not found");
  }

  res.status(StatusCodes.CREATED).json({ user });
};

const updateUserPassword = async (req, res) => {
  const { newPassword, newVerifyPassword } = req.body;

  if (newPassword !== newVerifyPassword) {
    throw new BadRequestError("Passwords don't match");
  }

  const { userId } = req.user;
  await userQueries.updateUserPasswordQuery(
    newPassword,
    newVerifyPassword,
    userId
  );
  res.status(StatusCodes.OK).send("Updated Password Successfully!");
};

const updateUserProfile = async (req, res) => {
  const { email, firstName, lastName, phoneNumber, bio } = req.body;
  await userQueries.updateUserProfileQuery(
    email,
    firstName,
    lastName,
    phoneNumber,
    bio
  );
  res.status(StatusCodes.OK).send("Updated Profile Successfully!");
};

const makeAdmin = async (req, res) => {
  const { id } = req.params;
  await userQueries.makeAdminQuery(id);
  res.status(StatusCodes.OK).send("Updated Admin Successfully!");
};

const getUser = async (req, res) => {
  const { id } = req.params;
  console.log(`Get a user with id: ${id}`);
};

const deleteUser = async (req, res) => {
  const { id } = req.params;
  console.log(`Delete user with id: ${id}`);
};

const reportUser = async (req, res) => {
  const { id } = req.params;
  console.log(`Report a user with id: ${id}`);
};

module.exports = {
  getUser,
  deleteUser,
  reportUser,
  makeAdmin,
  updateUserPassword,
  updateUserProfile,
  login,
  signUpUser,
};

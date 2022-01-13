const { v4: uuidv4 } = require("uuid");
const { StatusCodes } = require("http-status-codes");
const { BadRequestError, NotFoundError } = require("../errors");
const { encryptPassword } = require("../utils/bcrypt");
const User = require("../models/UserSchema");

const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    throw new NotFoundError("User not found");
  }
  const isMatch = await user.comparePassword(password);
  if (!isMatch) {
    throw new BadRequestError("Please proved correct password");
  }
  const token = user.createJWT();
  res.status(StatusCodes.OK).json({ user, token });
};

const signUpUser = async (req, res) => {
  const { email, password, first_name, last_name, verifyPassword } = req.body;
  console.log(password);
  console.log(verifyPassword);

  if (password !== verifyPassword) {
    throw new BadRequestError("Passwords don't match");
  }

  const userId = uuidv4();
  const hashedPassword = await encryptPassword(password);
  const user = await User.create({
    userId,
    first_name,
    last_name,
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
  const user = await User.findById(id);
  if (!user) {
    throw new NotFoundError("User not found");
  }
  res.status(StatusCodes.OK).json({ user });
};

const deleteUser = async (req, res) => {
  const { id } = req.params;
  const user = await User.deleteOne({ _id: id });
  if (!user) {
    throw new NotFoundError("User not found");
  }
  res.status(StatusCodes.OK).json({ user });
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

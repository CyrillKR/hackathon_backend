const express = require('express');
const router = express.Router();

const auth = require('../middleware/authentication');
const adminAuth = require('../middleware/adminAuthentication');
const { uploadUserImage } = require('../controllers/uploads');
const { login,
    signUpUser,
    makeAdmin,
    updateUserProfile,
    updateUserPassword,
    getUser,
    deleteUser,
    reportUser
} = require('../controllers/usersController');

router.route('/:id').get(getUser);
router.route('/deleteuser/:id').delete(auth, adminAuth, deleteUser);
router.route('/reportuser/:id').post(auth, reportUser);
router.route('/editprofile').put(auth, updateUserProfile);
router.route('/changepassword').put(auth, updateUserPassword);
router.route('/signup').post(signUpUser);
router.route('/login').post(login);
router.route('/uploads/image').post(uploadUserImage);
router.route('/makeadmin/:id').put(auth, adminAuth, makeAdmin);

module.exports = router;
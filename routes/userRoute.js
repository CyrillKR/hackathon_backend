const express = require('express');
const router = express.Router();

const auth = require('../middleware/authentication');
const adminAuth = require('../middleware/adminAuthentication');

router.route('/:id').get((req, res) => {
    const { id } = req.params;
    console.log(`Get user with id: ${id}`);
});
router.route('/editprofile').put(auth, (req, res) => {
    console.log(`Edit user with`);
});
router.route('/changepassword').put(auth, (req, res) => {
    console.log('Change user password');
});
router.route('/deleteuser/:id').delete(auth, adminAuth, (req, res) => {
    const { id } = req.params;
    console.log(`Delete user with id: ${id}`);
});
router.route('/reportuser/:id').post(auth, (req, res) => {
    const { id } = req.params;
    console.log(`Report user with id: ${id}`);
});
router.route('/makeadmin/:id').put(auth, adminAuth, (req, res) => {
    const { id } = req.params;
    console.log(`Make user with id: ${id} into admin`);
});
router.route('/signup').post(() => {
    console.log('signup');
});
router.route('/login').post(() => {
    console.log('login');
});

module.exports = router;
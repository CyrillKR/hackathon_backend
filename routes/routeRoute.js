const express = require('express');
const router = express.Router();

router.route('/match').get((req, res) => {
    console.log('Match route');
});
router.route('/reviews').post((req, res) => {
    console.log(`Post review by user`);
});
router.route('/reviews/:id').get((req, res) => {
    const { id } = req.params;
    console.log(`Get reviews of user with id: ${id}`);
});
router.route('/history').get((req, res) => {
    console.log('Personal trip history route');
});

module.exports = router;
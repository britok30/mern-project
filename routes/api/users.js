const express = require('express');
const router = express.Router();

// @route POST api/users
// @desc Register User
// @access Public

router.post('/', (res, req) => {
    console.log(req.body);
    res.send('User Route');
});

module.exports = router;

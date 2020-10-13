const express = require('express');
const router = express.Router();

// @route GET api/posts
// @desc Test Route
// @access Public

router.get('/', (res, req) => {
    res.send('Posts Route');
});

module.exports = router;

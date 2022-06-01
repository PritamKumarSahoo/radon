const express = require('express');
const externalModule = require('./logger')

const router = express.Router();

router.get('/test-me', function (req, res) {
    console.log (welcome)
    res.send('My second ever api!')
});

module.exports = router;
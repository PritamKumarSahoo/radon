const express = require('express');
const myHelper = require('../util/helper')
const mylogger = require ('../logger/logger')
const format = require ('../validatr/formatter')
const router = express.Router();

router.get('/test-me', function (req, res) {

    myHelper.printDate()
    myHelper.printMonth()
    mylogger.welcome()
    format.trim()
    format.lowerCase()
    format.upperCase()
    
    res.send('My first ever api!')
});


module.exports = router;

// adding this comment for no reason
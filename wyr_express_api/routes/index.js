const express = require('express')
const router = express.Router()
const randomWYRQuestion = require('../model/wyr_questions')


router.get('/wyr', function(req, res, next) {
    const wyr = randomWYRQuestion()
    res.json(wyr)
})

module.exports = router
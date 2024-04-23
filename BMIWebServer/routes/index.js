// create a function to create a webpage in reponse to different URLs
// each URL will ghave it's own function that creates the web page that's sent to the browser

const express = require('express')
const router = express.Router()

router.get('/', function(req, res) {
    console.log(req.query)
    const height = req.query.height
    res.render('index.hbs')
})


// add new routes, restart server

router.get('/cat', function(req, res) {
    res.send('Meow')
})

router.get('/lamb', function(req, res) {
    res.send('Baaa')
})

module.exports = router
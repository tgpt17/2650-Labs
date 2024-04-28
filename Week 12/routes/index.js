const express = require('express')
const router = express.Router()  // figures out what code top run in response top a rewuest
// typically based on the url, the method, get, post

// responds to get request to home page /
router.get('/', function(req, res, next) {
    // name of handlebars file - name of a template, optional object wuith data for the template
    res.render('index', { 
        title: 'Feedback Application',
        author: 'Travis',
        timePageLoadedAt: new Date()
     })
}) // get request to the homepage // function called when request to get homepage


router.get('/feedback-form', function(req, res, next) {
    res.render('student_feedback_form')
})


router.post('/submit-feedback', function(req, res, next) {
    // access form data
    // const formData = req.query // for a get request
    const formData = req.body // for a post request

    //todo - save to a database
    //automatically email someone when feedback is submitted

    res.render('thank_you', {
        name: formData.name,
        email: formData.email,
        comments: formData.comments,
        currentStudent: formData['current-student']
    })
})

module.exports = router // return router object to whatever else requires this file // last line


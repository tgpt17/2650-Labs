// create a function to create a webpage in reponse to different URLs
// each URL will have it's own function that creates the web page that's sent to the browser

const express = require('express')
const router = express.Router()

router.get('/', function(req, res, next) {

    res.render('index.hbs')
})


// POST request to calculate BMI
router.post('/submit-bmi', function(req, res, next) {
    const formData = req.body // for a post request
    // Calculating BMI here
    const height = parseFloat(req.body.height)
    const weight = parseFloat(req.body.weight)
    const bmi = calculateBMI(height, weight).toFixed(2)

    // Rendering the result page with calculated BMI
    res.render('calculate', {
        bmi: bmi
    })
})

// Function to calculate BMI
function calculateBMI(height, weight) {
    // BMI calculation logic
    return weight / (height * height)
}

module.exports = router

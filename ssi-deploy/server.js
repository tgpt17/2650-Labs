const express = require('express') // Express.js framework
const apiRoutes = require('./routes/api.js') // API routes module
const path = require('path') // Path module for file paths

// Initialize the Express application
const app = express()

app.use(express.json())

// Define the path to static files (e.g., HTML, CSS, JS) for serving client-side content
const staticFilePath = path.join(__dirname, 'client', 'dist')
const staticFiles = express.static(staticFilePath)
app.use('/', staticFiles)

// Mount API routes
app.use('/api', apiRoutes)

// Middleware to handle 404 errors (route not found)
app.use(function(req, res, next) {
    res.status(404).send('Not found')
})

// Middleware to handle server errors
app.use(function(err, req, res, next) {
    console.error(err.stack) // Log the error for server developers
    res.status(500).send('Server error') // Send a generic error message to the client
})

// Start the Express server and listen on the specified port
const server = app.listen(process.env.PORT || 3000, function() {
    console.log('Express app running on port', server.address().port)
})

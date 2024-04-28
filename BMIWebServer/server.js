// this os the main file for the web server
// a web server creates web pages in response to a req
// the browser can display that page to the user
const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')

//routing is figuring out what page the user wants
// typically based on a URL (browser address bar)
const indexRouter = require('./routes/index')

const app = express()

// enable parsing of POST request form body
app.use(bodyParser.urlencoded({ extended: false }))

// serve static files, such as CSS
const staticFileLocation = path.join(__dirname, 'public')
app.use(express.static(staticFileLocation))

// configure it to use the Handlebars template engine and 
// work with template files in the views directory 
app.set('views', path.join(__dirname, 'views'))
// views are web pages, hbs is handlebars
app.set('view engine', 'hbs')

app.use('/', indexRouter)

let server = app.listen(process.env.PORT || 3000, function() {
    console.log('Express server running on port', server.address().port)
})
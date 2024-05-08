const express = require('express')
const database = require('../models') // Will require the index.js file from this directory
const Student = database.Student // The student model

// Create an Express router
const router = express.Router()

// Route to get all students
router.get('/students', function(req, res, next) {
    // Query the database to get all rows from the Student table
    // Convert the result to JSON format
    // Return the result as a JSON response
    Student.findAll({ order: ['present', 'name'] }).then(students => {
        return res.json(students)
    }).catch(err => {
        return next(err)
    })
})

// Route to create a new student
router.post('/students', function(req, res, next){
    const newStudent = req.body // Get the new student data from the request body
    // Create a new student record in the database
    Student.create(newStudent).then(result => {
        // If successful, return a success response
        return res.status(201).send('New student created!')
    }).catch(err => {
        // If there are validation errors, return them as a response
        if (err instanceof database.Sequelize.ValidationError) {
            const messages = err.errors.map(e => e.message)
            return res.status(400).json(messages)
        } else {
            // Otherwise, pass the error to the error handling middleware
            return next(err)
        }
    })
})

// Route to update a student
router.patch('/students/:id', function(req, res, next) {
    const studentID = req.params.id // Get the student ID from the request parameters
    const updatedStudent = req.body // Get the updated student data from the request body
    // Update the student record in the database based on the student ID
    Student.update(updatedStudent, { where: { id: studentID } })
        .then((result) => {
            const rowsModified = result[0] // Get the number of rows modified
            // If a row was modified, return a success response
            if (rowsModified == 1) {
                return res.send('Student updated')
            } else {
                // If no row was modified, return a not found response
                return res.status(404).send('Student not found')
            }
        })
        .catch(err => {
            // If there are validation errors, return them as a response
            if (err instanceof database.Sequelize.ValidationError) {
                const messages = err.errors.map(e => e.message)
                return res.status(400).json(messages)
            } else {
                // Otherwise, pass the error to the error handling middleware
                return next(err)
            }
        })
})

// Route to delete a student
router.delete('/students/:id', function(req, res, next) {
    const studentID = req.params.id // Get the student ID from the request parameters
    // Delete the student record from the database based on the student ID
    Student.destroy({ where: { id: studentID } })
        .then((rowsDeleted) => {
            // If a row was deleted, return a success response
            if (rowsDeleted === 1) {
                return res.send('Student deleted')
            } else {
                // If no row was deleted, return a not found response
                return res.status(404).send('Student not found')
            }
        }).catch(err => {
            // If there's an error, pass it to the error handling middleware
            return next(err)
        })
})

// Export the router to use it in other parts of the application
module.exports = router

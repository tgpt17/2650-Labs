const express = require('express')
const database = require('../models') // will require the index,js file from this directory
const Student = database.Student // the student model

const router = express.Router()

router.get('/students', function(req, res, next) {
    // query database, get all ros from DB
    // convert to JSON form
    // available in the then function
    Student.findAll( {order: ['present', 'name']} ).then( students => {
        return res.json(students)
    }).catch( err => {
        return next(err)
    })
})

router.post('/students', function(req, res, next){
    const newStudent = req.body
    Student.create(newStudent).then( result => {
        return res.status(201).send('New student created!')
    }).catch( err => {
        if (err instanceof database.Sequelize.ValidationError) {
            const messages = err.errors.map( e => e.message )
            return res.status(400).json(messages)
        } else {
            return next(err)
        }
    })
})


router.patch('/students/:id', function(req, res, next) {
    const studentID = req.params.id
    const updatedStudent = req.body 
    console.log(studentID, updatedStudent)
    Student.update( updatedStudent, { where: { id: studentID} })
        .then( (result) => {
            const rowsModified = result[0]
            if (rowsModified == 1) {
                return res.send('Student updated')
            } else {
                return res.status(404).send('Student not found')
            }
        })
        .catch( err => {
            if (err instanceof database.Sequelize.ValidationError) {
                const messages = err.errors.map( e => e.message )
                return res.status(400).json(messages)
            } else {
                return next(err)
            }
        })
})

router.delete('/students/:id', function(req, res, next) {
    const studentID = req.params.id
    Student.destroy({where: { id: studentID}})
        .then( (rowsDeleted) => {
            if (rowsDeleted === 1) {
                return res.send('Student deleted')
            } else {
                return res.status(404).send('Student not found')
            }
        }).catch( err => {
            return next(err)
        })
})


module.exports = router

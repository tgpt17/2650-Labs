const { Sequelize, DataTypes } = require('sequelize')
const configJson = require('../config.json')
const createStudentModel = require('./student.js')

// Look for an environment variable will be called NODE_ENV and read its value
// Environment variables are set for your whole computer (or for a server)
// An application running on this computer (or server) can read these environment variable
// At Zzure, we'll create an environment variable for your server  called NODE_ENV and set it to "production"
// If there is no NODE_ENV set, like on your computer, we'll use the value 'development'
const env = process.env.NODE_ENV || 'development'

const config = configJson[env] // read the configuration object for 'development' or 'production'

const sequelize = new Sequelize(config)

const database = {
    sequelize: sequelize,
    Sequelize: Sequelize
}

const studentModel = createStudentModel(sequelize, DataTypes)
const studentModelName = studentModel.name // 'Student'
database[studentModelName] = studentModel

module.exports = database 
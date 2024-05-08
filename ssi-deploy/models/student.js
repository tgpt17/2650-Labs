module.exports = (sequelize, DataTypes) => {
    // define the model
    const Student = sequelize.define('Student', {
        // define the colums in the database - give them a name and a type
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        starID: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                notEmpty: true
            }
        },
        present: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        }
    })

    // create or update table in the database
    Student.sync( { force: false } ).then ( () => {
        console.log('Synced student table')
    })

    return Student

}
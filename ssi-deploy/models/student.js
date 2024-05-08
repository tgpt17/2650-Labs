// Exporting a function that defines the Student model
module.exports = (sequelize, DataTypes) => {
    
    const Student = sequelize.define('Student', {
        // Define the columns in the database - give them a name and a type
        name: {
            type: DataTypes.STRING, // Define the name column as a string
            allowNull: false, // Name cannot be null
            validate: {
                notEmpty: true // Name cannot be empty
            }
        },
        starID: {
            type: DataTypes.STRING, // Define the starID column as a string
            allowNull: false, // StarID cannot be null
            unique: true, // StarID must be unique
            validate: {
                notEmpty: true // StarID cannot be empty
            }
        },
        present: {
            type: DataTypes.BOOLEAN, // Define the present column as a boolean
            allowNull: false, // Present status cannot be null
            defaultValue: false // Default value for present status is false
        }
    })

    // Create or update table in the database
    // Sync() method synchronizes the model definition with the database schema
    // If force is set to true, it will drop the table before creating it, if it already exists
    // If force is set to false, it will only create the table if it doesn't already exist
    Student.sync({ force: false }).then(() => {
        console.log('Synced student table') // Log a message indicating successful synchronization
    })

    // Return the Student model
    return Student
}

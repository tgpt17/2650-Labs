import { defineStore } from 'pinia' // Importing defineStore function from pinia library
import { ref, computed } from 'vue' // Importing ref and computed from Vue
import { mande } from 'mande'

const studentAPI = mande('api/students')

// Defining and exporting a student store
export const useStudentStore = defineStore('students', () => {

    // Reactive reference for the list of students
    const studentList = ref([])

    // Reactive reference for the most recent student
    const mostRecentStudent = ref( {} )

    const addNewStudentErrors = ref( [] )

    function getAllStudents() {
        // make an APi request to get all students and save in store = studentList
        studentAPI.get().then( students => { // students is the JSON response from the API 
            studentList.value = students
        })
    }

    // Function to add a new student to the list
    function addNewStudent(student) {
        studentAPI.post(student).then( () => {
            getAllStudents()
        }).catch( err => {
            addNewStudentErrors.value = err.body
        })
    }

    // Function to delete a student from the list
    function deleteStudent(studentToDelete) {
        const deleteStudentAPI = mande(`/api/students/${studentToDelete.id}`)
        deleteStudentAPI.delete().then( () => {
            getAllStudents()
        })
    }

    // Function to handle a student arriving or leaving
    function arrivedOrLeft(student) {
        const editStudentAPI = mande(`/api/students/${student.id}`)
        editStudentAPI.patch(student).then( () => {
            getAllStudents()
        })
    }

    // Computed property to sort the students alphabetically by name
    const sortedStudents = computed( () => {
        return studentList.value.toSorted( (s1, s2) => {
            return s1.name.localeCompare(s2.name)
        })
    })

    // Computed property to calculate the number of students in the list
    const studentCount = computed( () => {
        return studentList.value.length
    })

    return { 
        // Reactive data
        studentList, 
        mostRecentStudent, 
        addNewStudentErrors,

        // Functions
        getAllStudents,
        addNewStudent, 
        arrivedOrLeft,
        deleteStudent, 
         

        // Computed properties
        sortedStudents,
        studentCount
    }

})

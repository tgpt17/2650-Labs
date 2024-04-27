import { defineStore } from 'pinia' // Importing defineStore function from pinia library
import { ref, computed } from 'vue' // Importing ref and computed from Vue

// Defining and exporting a student store
export const useStudentStore = defineStore('students', () => {

    // Reactive reference for the list of students
    const studentList = ref([
        { name: "A. Student", starID: "aa1234aa", present: false },
        { name: "B. Student", starID: "bb1234bb", present: false }
    ])

    // Reactive reference for the most recent student
    const mostRecentStudent = ref( {} )

    // Function to add a new student to the list
    function addNewStudent(student) {
        studentList.value.push(student)
    }

    // Function to delete a student from the list
    function deleteStudent(studentToDelete) {
        // Filtering out the student to delete from the list
        studentList.value = studentList.value.filter( (student) => {
            return studentToDelete != student
        })
    }

    // Function to handle a student arriving or leaving
    function arrivedOrLeft(student) {
        // Finding the index of the student to modify in the list
        const studentToModifyIndex = studentList.value.findIndex(s => s.starID == student.starID)
        // If the student is found in the list
        if (studentToModifyIndex != -1) {
            // Updating the most recent student
            mostRecentStudent.value = student
            // Updating the student in the list
            studentList.value[studentToModifyIndex] = student
        }
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

        // Functions
        addNewStudent, 
        arrivedOrLeft,
        deleteStudent, 
         

        // Computed properties
        sortedStudents,
        studentCount
    }

})

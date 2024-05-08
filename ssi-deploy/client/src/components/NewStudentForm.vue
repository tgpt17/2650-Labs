<script setup>
import { ref, watch } from 'vue'

// Import the student store and pinia
import { useStudentStore } from '../stores/StudentStore'
import { storeToRefs } from 'pinia'

// Initialize the student store
const studentStore = useStudentStore()

// Define reactive variables to store input values and form errors
const newStudentName = ref('') // Student name input
const newStarID = ref('')      // Star ID input
const formErrors = ref([])     // Array to store form validation errors

// Extract the 'addNewStudentErrors' property from the student store
const { addNewStudentErrors } = storeToRefs(studentStore)

// Watch for changes in 'addNewStudentErrors' and display alerts for any errors
watch(addNewStudentErrors, () => {
    if (addNewStudentErrors.value) {
        alert(addNewStudentErrors.value.join('\n'))
    }
})

// Function to add a new student
const addStudent = () => {
    formErrors.value = [] // Clear any previous errors

    // Check if the student name is empty
    if (!newStudentName.value) {
        formErrors.value.push('Student name must be entered')
    }

    // Check if the Star ID is empty
    if (!newStarID.value) {
        formErrors.value.push('StarID must be entered')
    }

    // If there are no errors in the form
    if (formErrors.value.length === 0) {
        // Construct a new student object
        const student = { 
            name: newStudentName.value, // Assign the name
            starID: newStarID.value,    // Assign the Star ID
            present: false              // Initialize 'present' status
        }

        // Add the new student to the student store
        studentStore.addNewStudent(student)

        // Clear the input fields
        newStudentName.value = ''
        newStarID.value = ''
    }
}
</script>

<template>
<!-- Display form errors if there are any -->
<div id="new-student-form-errors" class="m-2">
    <div class="alert alert-danger" v-if="formErrors.length > 0">
        <!-- List each error in the formErrors array -->
        <li v-for="error in formErrors" v-bind:key="error">
            {{ error }}
        </li>
    </div>
</div>

<!-- New student form -->
<div id="new-student-form" class="card add-student m-2 p-2">
    <h4 class="card-title">Add new student</h4>

    <!-- Input field for student name -->
    <div class="form-group mb-3">
        <label for="name">Name</label>
        <input id="name" class="form-control" v-model.trim="newStudentName">
    </div>
    
    <!-- Input field for Star ID -->
    <div class="form-group mb-3">
        <label for="starID">Star ID</label>
        <input id="starID" class="form-control" v-model.trim="newStarID">
    </div>

    <!-- Button to trigger adding a new student -->
    <button class="btn btn-primary" v-on:click="addStudent">Add</button>
</div>
</template>

<style scoped>

</style>

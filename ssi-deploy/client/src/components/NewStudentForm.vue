<script setup>
// Importing ref from Vue 3's Composition API
import { ref } from 'vue'

// Importing the useStudentStore function from the custom StudentStore.js file
import { useStudentStore } from '../stores/StudentStore'

// Accessing the student store using the custom hook
const studentStore = useStudentStore()

// Creating reactive references for new student name and StarID
const newStudentName = ref('')
const newStarID = ref('')

// Creating a reactive reference for form errors
const formErrors = ref([])

// Function to add a new student
const addStudent = () => {
    // Clearing previous form errors
    formErrors.value = []

    // Checking if the new student name is entered
    if (!newStudentName.value) {
        formErrors.value.push('Student name must be entered')
    }

    // Checking if the new StarID is entered
    if (!newStarID.value) {
        formErrors.value.push('StarID must be entered')
    }

    // If there are no form errors, adding the new student
    if (formErrors.value.length == 0) {
        let student = { name: newStudentName.value, starID: newStarID.value, present: false}

        // Calling the addNewStudent method from the student store
        studentStore.addNewStudent(student)

        // Clearing the input fields after adding the student
        newStudentName.value = ''
        newStarID.value = ''
    }
}

</script>



<template>

<div id="new-student-form-errors" class="m-2">
    <!-- Displaying form errors if there are any -->
    <div class="alert alert-danger" v-if="formErrors.length > 0">
        <li v-for="error in formErrors" v-bind:key="error">
            {{ error }}
        </li>
    </div>
</div>

<div id="new-student-form" class="card add-student m-2 p-2">
    <h4 class="card-title">Add new student</h4>

    <!-- Form inputs for new student name and StarID -->
    <div class="form-group mb-3">
        <label for="name">Name</label>
        <input id="name" class="form-control" v-model.trim="newStudentName">
    </div>
    <div class="form-group mb-3">
        <label for="starID">Star ID</label>
        <input id="starID" class="form-control" v-model.trim="newStarID">
    </div>

    <!-- Button to add the new student -->
    <button class="btn btn-primary" v-on:click="addStudent">Add</button>
</div>


</template>

<style scoped>

</style>
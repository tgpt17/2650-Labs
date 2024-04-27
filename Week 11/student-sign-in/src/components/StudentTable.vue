<script setup>
// Importing the StudentRow component
import StudentRow from './StudentRow.vue'

// Importing computed from Vue 3's Composition API
import { computed } from 'vue'

// Importing storeToRefs function from the pinia library for reactive access to store state
import { storeToRefs } from 'pinia'

// Importing the custom hook to access the student store
import { useStudentStore } from '../stores/StudentStore.js'

// Initializing the student store
const studentStore = useStudentStore()

// Extracting reactive references to sortedStudents and studentCount from the student store
const { sortedStudents, studentCount } = storeToRefs(studentStore)

// Function to update student's presence status and notify the store
const arrivedOrLeft = (student, isStudentPresent) => {
    student.present = isStudentPresent
    studentStore.arrivedOrLeft(student)
}

// Function to delete a student from the store
const deleteStudent = (student) => {
    studentStore.deleteStudent(student)
}

// Computed property to generate a message about the number of students in class
const pluralStudentMessage = computed (() => {
    if (studentCount.value == 1) {
        return 'There is 1 student in class.'
    } else {
        // Using string interpolation to include the number of students
        return 'There are ${studentCount.value} students in class'
    }
})
</script>


<template>

<div id="student-list-table" class="card m-2 p-2">
    <!-- Card title for the student list -->
    <h4 class="card-title">Student List</h4>
    <!-- Subtitle showing the plural student message -->
    <h5 class="card-subtitle text-muted"> {{ pluralStudentMessage }}</h5>
    <div id="student-table">
        <!-- Table to display the list of students -->
        <table class="table">
            <!-- Table header -->
            <thead>
                <tr class="align-middle">
                    <!-- Column headers -->
                    <th>Name</th>
                    <th>StarID</th>
                    <th>Present?</th>
                    <th>Delete</th>
                </tr> 
            </thead>

            <tbody>
                <!-- Looping through each student and rendering StudentRow component -->
                <StudentRow
                    v-for="student in sortedStudents"
                    v-bind:key="student.starID" 
                    v-bind:student="student"
                    v-on:delete-student="deleteStudent"
                    v-on:arrived-or-left="arrivedOrLeft">
                </StudentRow>
            </tbody>
        </table>
    </div>
</div>



</template>

<style scoped>

#student-table {
    max-height: 500px;
    overflow: scroll;
}

th, td {
    width: 25%;
    text-align: center;
}

</style>
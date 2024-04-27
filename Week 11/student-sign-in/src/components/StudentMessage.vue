<script setup>
// Importing the useStudentStore function from the custom StudentStore.js file
import { useStudentStore } from '../stores/StudentStore.js'

// Importing the storeToRefs function from the pinia library
import { storeToRefs } from 'pinia'

// Accessing the student store using the custom hook
const studentStore = useStudentStore()

// Extracting a reactive reference to the mostRecentStudent from the student store
const { mostRecentStudent } = storeToRefs(studentStore)

</script>


<template>

<div id="welcome-or-goodbye-message" class="m-2">
    <!-- Checking if there is a most recent student -->
    <div v-if="mostRecentStudent.name">
        <!-- Displaying a welcome message if the most recent student is present -->
        <div v-if="mostRecentStudent.present" class="alert alert-success">
            Welcome, {{ mostRecentStudent.name }}!
        </div>
        <!-- Displaying a goodbye message if the most recent student is not present -->
        <div v-else class="alert alert-info">
            Goodbyeeek 11 {{ mostRecentStudent.name }}. See you later!
        </div>
    </div>
</div>


</template>

<style scoped>

</style>
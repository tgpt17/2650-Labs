<script setup>
// Import necessary utilities and components
import { ref } from 'vue'
import { useBmiStore } from "../stores/BMIstore.js"
import { storeToRefs } from 'pinia'

// Access the BMI store
const BMIstore = useBmiStore()

// Define reactive variables for height and weight
const height = ref(0)
const weight = ref(0)

// Function to emit the 'stats-entered' event with user's height and weight
const emitStatsEntered = () => {
  // Check if both height and weight are not null
  if (height.value !== null && weight.value !== null) {
    // Create an object with user's height and weight
    const userData = { height: height.value, weight: weight.value }
    // Emit the 'stats-entered' event with the user's data
    emit('stats-entered', userData)
  }
}
</script>

<template>
  <div>
    <!-- Display the form title -->
    <h2>Form to Enter your data</h2>
    <!-- Form to enter height and weight -->
    <div id="questions">
      <label>Enter your height in meters</label>
      <!-- Input field for height with v-model connected to reactive height variable -->
      <input v-model="height">

      <label>Enter your weight in kilograms</label>
      <!-- Input field for weight with v-model connected to reactive weight variable -->
      <input v-model="weight">
    </div>
    <!-- Button to trigger calculation -->
    <button @click="emitStatsEntered">Calculate</button>
  </div>
</template>

<style scoped>
#questions {
  background-color: lightgreen;
}
</style>

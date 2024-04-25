<script setup>

import { ref } from 'vue'
import { useBmiStore } from "../stores/BMIstore.js"
import { storeToRefs } from 'pinia'

// Access the BMI store
const BMIstore = useBMIStore()

// Define reactive variables for height and weight
const { height, weight } = storeToRefs(BMIStore)



</script>

<template>


    <h2>Form to Enter your data</h2>
    <!-- Form to enter height and weight -->
 
      <label>Enter your height in meters</label>
      <!-- Input field for height with v-model connected to reactive height variable -->
      <input v-model="height">

      <label>Enter your weight in kilograms</label>
      <!-- Input field for weight with v-model connected to reactive weight variable -->
      <input v-model="weight">

      <button @click="Calculate"></button>

</template>

<style scoped>

</style>

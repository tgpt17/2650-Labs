<script setup>

  import BodyMassIndexForm from './components/BodyMassIndexForm.vue'
  
  // Define reactive variables for height, weight, and BMI
  let height = 0
  let weight = 0
  let bmi = 0

  // Function to calculate BMI based on height and weight
  const calculateBMI = () => {
    // Check if both height and weight are not null
    if (height && weight) {
      // Calculate BMI using the formula and round to 2 decimal places
      bmi = (weight / (height * height)).toFixed(2)
    }
  }

  // Function to handle the 'stats-entered' event emitted by BodyMassIndexForm
  const handleStatsEntered = (data) => {
    // Update height and weight with the data received
    height = data.height
    weight = data.weight
    // Recalculate BMI
    calculateBMI()
  }
</script>

<template>
  <div>

    <h1>Body Mass Index Calculator</h1>
    
    <!-- Render the BodyMassIndexForm component and listen for 'stats-entered' event -->
    <BodyMassIndexForm @stats-entered="handleStatsEntered"/>
    
    <!-- Display BMI if calculated -->
    <div v-if="bmi !== null">
      <p>Your Body Mass Index (BMI) is: {{ bmi }}</p>
    </div>
  </div>
</template>

<style scoped>

</style>

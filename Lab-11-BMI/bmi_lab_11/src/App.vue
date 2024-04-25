<script setup>

  import BodyMassIndexForm from './components/BodyMassIndexForm.vue'
  import { useBmiStore } from "../stores/BMIstore.js"
  import { storeToRefs } from 'pinia'

  const BMIStore = useBMIStore()

  const { calculatedBMI } = storeToRefs(BMIStore)

</script>

<template>


    <h1>Body Mass Index Calculator</h1>


      <div>Your Body Mass Index (BMI) is: {{ calculatedBMI }}</div>
      
      <BodyMassIndexForm/>

</template>

<style scoped>

</style>

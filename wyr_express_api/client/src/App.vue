<script setup>
   import { ref, onMounted } from 'vue'
 
 // Importing the WouldYouRather component from its file
  import WouldYouRather from './components/WouldYouRather.vue'
  import wyrService from './services/wyrService';

  // Creating reactive variables to store the question and answers
  const wyrQuestion = ref('')
  const wyrAnswer1 = ref('')
  const wyrAnswer2 = ref('')

onMounted( () => {
  wyrService.getRandomWYR().then( (wyrData) => {
    wyrQuestion.value = wyrData.question
    wyrAnswer1.value = wyrData.answer1
    wyrAnswer2.value = wyrData.answer2
  })
})

  // This will store the user's answer once they've made a choice
  const userSelection = ref('')

  // Function to update the user's selection
  function updateUserSelection(userChoice) {
    userSelection.value = `Thanks! You chose ${userChoice}`
  }
</script>

<template>

<div id="app-component">
  <h1>Hello! Would You Rather?</h1>

  <!-- Using the WouldYouRather component -->
  <WouldYouRather 
    v-bind:question="wyrQuestion" 
    v-bind:answer1="wyrAnswer1"
    v-bind:answer2="wyrAnswer2"
    v-on:answer-selected="updateUserSelection">
  </WouldYouRather>

  <!-- Displaying the user's selection -->
  <p>{{ userSelection }}</p>
</div>

</template>


<style scoped>

#app-component {
  font-size: larger;
  background-color: darkblue;
  padding: 40px;
}

p {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

</style>


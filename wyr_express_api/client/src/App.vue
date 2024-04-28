<script setup>
  // Importing the WouldYouRather component from its file
  import WouldYouRather from './components/WouldYouRather.vue'

  // Importing the ref function from Vue
  import { ref } from 'vue'

  // Creating reactive variables to store the question and answers
  const wyrQuestion = ref('Live in a house shaped like a triangle or a house shaped like a circle?')
  const wyrAnswer1 = ref('Triangle House')
  const wyrAnswer2 = ref('Circle House')

  // This will store the user's answer once they've made a choice
  const userSelection = ref('')

  // Function to update the user's selection
  function updateUserSelection(userChoice) {
    userSelection.value = userChoice
  }
</script>

<template>

<div id="app-component">
  <h1>Would You Rather?</h1>

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
  background-color: aqua;
  padding: 40px;
}

p {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

</style>


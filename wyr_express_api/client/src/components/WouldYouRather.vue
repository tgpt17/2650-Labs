<script setup>

  import { ref } from 'vue'

  // Defining props for the component
  defineProps({
    question: String, // Prop for the question text
    answer1: String, // Prop for the first answer text
    answer2: String // Prop for the second answer text
  })

  // Defining emits for the component
  const emit = defineEmits([
    'answer-selected' // Emit event for when an answer is selected
  ])

  // Creating a reactive variable to store the user's choice
  const choice = ref('')

  // Function to handle when a choice is made
  function choiceMade() {
    // Emitting an event to tell the parent component that the user has made a choice
    emit('answer-selected', choice.value)
  }
</script>

<template>
  <div id="wyr">

    <h2>Make Your Choice!</h2>

    <p>{{ question }}</p>

    <!-- Radio buttons for the two answers -->
    <div>
      <input v-model="choice" v-bind:value="answer1" v-on:change="choiceMade" type="radio" id="answer-1">
      <label for="answer-1">{{ answer1 }}</label>

      <input v-model="choice" v-bind:value="answer2" v-on:change="choiceMade" type="radio" id="answer-2">
      <label for="answer-2">{{ answer2 }}</label>
    </div>
  </div>
</template>


<style scoped>

#wyr {
  background-color: hotpink;
}

p {
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}

</style>


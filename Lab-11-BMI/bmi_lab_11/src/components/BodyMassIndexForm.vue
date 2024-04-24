<script setup>
import { ref } from 'vue'
// needs to use the store

import { useBmiStore } from "../stores/BMIstore.js";
import { storeToRefs } from 'pinia';

const BMIstore = useBmiStore()

const { height } = storeToRefs(BMIstore)

</script>

<template>

<h2>Form to Enter your data</h2>

<div id="questions">
    <label>Enter your height in meters</label>
    <input v-model="height">

    <label>Enter your weight in kilograms</label>
    <input v-model="weight">
</div>

</template>

<style scoped>
#questions {
    background-color: lightgreen;
}
</style>

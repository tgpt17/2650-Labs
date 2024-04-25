import { defineStore } from "pinia"

import { ref, computed } from 'vue'

export const useBMIStore = defineStore('bmiDataStore', () => {

    const height = ref(0)
    const weight = ref(0)
   

const calculatedBMI = computed ( () => {
    const bmi = weight.value / (height.value * height.value)
    return bmi
})

    return {
        height,
        weight,
        calculatedBMI
    }
})
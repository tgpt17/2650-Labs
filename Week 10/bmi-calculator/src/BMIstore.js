import { defineStore } from "pinia"

import { ref, computed } from 'vue'

export const useBMIStore = defineStore('bmi', () => {
    const height = ref(0)
    const weight = ref(0)

    return {
        height,
        weight
    }
})
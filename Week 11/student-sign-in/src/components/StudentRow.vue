<script setup>
// Importing ref from Vue 3's Composition API
import { ref } from 'vue'

// Defining props for the component
const props = defineProps({
    student: Object
})

// Defining emits for custom events
const emit = defineEmits(['arrived-or-left', 'delete-student'])

// Creating a reactive reference to track whether the student is present
const isStudentPresent = ref(props.student.present)

// Function to emit the 'delete-student' event when the user confirms deletion
const notifyArrivedOrLeft = () => {
    if (confirm(`Delete ${props.student.name}?`)) {
        emit('delete-student', props.student)
    }
}
</script>


<template>

<tr class="align-middle" v-bind:class="{ present: student.present, absent: !student.present }">
    <!-- Displaying student's name -->
    <td>{{ student.name }}</td>
    <!-- Displaying student's StarID -->
    <td>{{ student.starID }}</td>
    <td>
        <!-- Checkbox to toggle student's presence -->
        <input type="checkbox" v-model="isStudentPresent" v-on:change="notifyArrivedOrLeft">
        <!-- Displaying "Here!" if the student is present -->
        <span class="mx-3" v-if="student.present">Here!</span>
        <!-- Displaying "Not Present" if the student is not present -->
        <span class="mx-3" v-else>Not Present</span>
    </td>
    <td>
        <!-- Button to delete the student -->
        <button class="btn btn-danger" v-on:click="confirmThenDeleteStudent">
            <i class="bi bi-trash-fill"></i> Delete
        </button>
    </td>
</tr>


</template>

<style scoped>

.present {
    color: gray;
    font-style: italic;
}

.absent {
    color: black;
    font-weight: bold;
}

</style>
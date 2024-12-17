<template>
    <div>
        <h1>Список задач</h1>
        <ul>
            <li v-for="task in tasks" :key="task.id">
                <router-link :to="`/task/${task.id}`">{{ task.name }}</router-link>
            </li>
        </ul>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const tasks = ref([
    { id: 1, name: 'Задача 1' },
    { id: 2, name: 'Задача 2' },
]);
</script>

<style scoped></style>
<script setup>
</script>

<template>
  <div>
    <nav>
      <!-- Навигационные ссылки -->
      <router-link to="/">Список задач</router-link>
      <router-link to="/task/1">Редактор задачи</router-link>
    </nav>
    <router-view />
  </div>
</template>

<style scoped></style>

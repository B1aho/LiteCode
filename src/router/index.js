// src/router/index.ts
import { createRouter, createWebHistory } from 'vue-router'
import TaskList from '@/components/TaskList.vue'
import TaskEditor from '@/components/TaskEditor.vue'

// Определяем маршруты
const routes = [
  { 
    path: '/', 
    name: 'TaskList', 
    component: TaskList 
  },
  { 
    path: '/task/:id', 
    name: 'TaskEditor', 
    component: TaskEditor 
  }
];

// Создаем экземпляр маршрутизатора
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router

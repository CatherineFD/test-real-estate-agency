import { createRouter, createWebHistory } from 'vue-router';
import PageSearchUsers from "@/pages/PageSearchUsers.vue";

const routes = [
  {
    path: '/',
    name: 'SearchUsers',
    component: PageSearchUsers
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

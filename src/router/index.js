import { createRouter, createWebHistory } from 'vue-router';

const CustomerRegistration = () => import('@/views/CustomerRegistration.vue');

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/cadastro-cliente',
      name: 'customer-registration',
      component: CustomerRegistration
    }
  ]
});

export default router;

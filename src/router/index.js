import { createRouter, createWebHistory } from 'vue-router';

const CustomersList = () => import('@/views/CustomersList.vue');
const ProductsList = () => import('@/views/ProductsList.vue');
const CustomerRegistration = () => import('@/views/CustomerRegistration.vue');
const ProductRegistration = () => import('@/views/ProductRegistration.vue');

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'customers-list',
      component: CustomersList,
      meta: {
        friendlyName: 'Lista de clientes'
      }
    },
    {
      path: '/lista-produtos',
      name: 'products-list',
      component: ProductsList,
      meta: {
        friendlyName: 'Lista de produtos'
      }
    },
    {
      path: '/cadastro-cliente',
      name: 'customer-registration',
      component: CustomerRegistration,
      meta: {
        friendlyName: 'Cadastro de cliente'
      }
    },
    {
      path: '/cadastro-produto',
      name: 'product-registration',
      component: ProductRegistration,
      meta: {
        friendlyName: 'Cadastro de produto'
      }
    }
  ]
});

export default router;

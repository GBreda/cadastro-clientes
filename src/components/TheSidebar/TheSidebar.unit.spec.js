import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import { RouterLink, createRouter, createMemoryHistory } from 'vue-router';
import { nextTick } from 'vue';

import TheSidebar from './TheSidebar.vue';

const mockRouter = createRouter({
  history: createMemoryHistory(),
  routes: [
    {
      path: '/',
      name: 'customers-list',
      meta: {
        friendlyName: 'Lista de clientes'
      }
    },
    {
      path: '/lista-produtos',
      name: 'products-list',
      meta: {
        friendlyName: 'Lista de produtos'
      }
    },
    {
      path: '/cadastro-cliente',
      name: 'customer-registration',
      meta: {
        friendlyName: 'Cadastro de cliente'
      }
    },
    {
      path: '/cadastro-produto',
      name: 'product-registration',
      meta: {
        friendlyName: 'Cadastro de produto'
      }
    }
  ]
});

const mountTheSidebar = () => {
  return mount(TheSidebar, {
    global: {
      plugins: [mockRouter]
    },
    components: {
      RouterLink
    }
  });
};

describe('TheSidebar', () => {
  let wrapper;

  it('should mount the component', () => {
    wrapper = mountTheSidebar();

    expect(wrapper.vm).toBeDefined();
  });

  it('should match the snapshot', () => {
    wrapper = mountTheSidebar();

    expect(wrapper.element).toMatchSnapshot();
  });

  it('should have router-link-active class for active link', async () => {
    await mockRouter.push('/');

    await nextTick();

    const link = wrapper.findAll('.sidebar__link[href="/"]')[0];

    expect(link.classes()).toContain('router-link-active');
  });
});

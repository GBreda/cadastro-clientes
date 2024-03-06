import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';

import TextField from './TextField.vue';

const mountTextField = () => {
  return mount(TextField, {
    props: {
      label: 'Input label'
    }
  });
};

describe('TextField', () => {
  let wrapper;

  it('should mount the component', () => {
    wrapper = mountTextField();

    expect(wrapper.vm).toBeDefined();
  });

  it('should match the snapshot', () => {
    wrapper = mountTextField();

    expect(wrapper.element).toMatchSnapshot();
  });

  it('should render text label', async () => {
    wrapper = mountTextField();

    await wrapper.setProps({ label: 'Custom label' });

    const label = wrapper.find('[data-test-id="label"]');

    expect(label.html()).toContain('Custom label');
  });

  it('should have the prop type with the value text as default', () => {
    wrapper = mountTextField();

    const input = wrapper.find('[data-test-id="input"]');

    expect(input.attributes('type')).toBe('text');
  });
});

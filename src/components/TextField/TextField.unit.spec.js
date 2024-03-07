import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';

import TextField from './TextField.vue';

const mountTextField = () => {
  return mount(TextField, {
    props: {
      label: 'Input label',
      value: 'produto'
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

  it('should have proper type attribute according to prop', async () => {
    wrapper = mountTextField();

    const input = wrapper.find('[data-test-id="input"]');
    expect(input.attributes('type')).toBe('text');

    await wrapper.setProps({ type: 'email' });
    expect(input.attributes('type')).toBe('email');

    await wrapper.setProps({ type: 'number' });
    expect(input.attributes('type')).toBe('number');

    await wrapper.setProps({ type: 'tel' });
    expect(input.attributes('type')).toBe('tel');
  });

  it('should update value when input changes', async () => {
    wrapper = mountTextField();

    const input = wrapper.find('[data-test-id="input"]');
    await input.setValue('New value');

    expect(wrapper.emitted('update:value')).toBeTruthy();
    expect(wrapper.emitted('update:value')[0]).toEqual(['New value']);
  });
});

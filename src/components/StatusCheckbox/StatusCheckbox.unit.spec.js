import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';

import StatusCheckbox from './StatusCheckbox.vue';

const mountStatusCheckbox = () => {
  return mount(StatusCheckbox);
};

describe('StatusCheckbox', () => {
  let wrapper;

  it('should mount the component', () => {
    wrapper = mountStatusCheckbox();

    expect(wrapper.vm).toBeDefined();
  });

  it('should match the snapshot', () => {
    wrapper = mountStatusCheckbox();

    expect(wrapper.element).toMatchSnapshot();
  });
});

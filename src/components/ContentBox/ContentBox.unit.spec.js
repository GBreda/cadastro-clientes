import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';

import ContentBox from './ContentBox.vue';

const mountContentBox = ({ slots } = {}) => {
  return mount(ContentBox, {
    props: {
      title: 'título'
    },
    slots: {
      ...slots
    }
  });
};

describe('ContentBox', () => {
  let wrapper;
  it('should mount the component', () => {
    wrapper = mountContentBox();

    expect(wrapper.vm).toBeDefined();
  });

  it('should match the snapshot', () => {
    wrapper = mountContentBox();

    expect(wrapper.element).toMatchSnapshot();
  });

  it('should render default slot content', () => {
    const wrapper = mountContentBox({
      slots: {
        default: '<div data-test-id="default">Custom Default Content</div>'
      }
    });

    expect(wrapper.find('[data-test-id="default"]').text()).toBe('Custom Default Content');
  });
});

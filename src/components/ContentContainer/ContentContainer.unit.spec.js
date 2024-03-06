import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';

import ContentContainer from './ContentContainer.vue';

const mountContentContainer = ({ slots } = {}) => {
  return mount(ContentContainer, {
    props: {
      title: 'título'
    },
    slots: {
      ...slots
    }
  });
};

describe('ContentContainer', () => {
  let wrapper;
  it('should mount the component', () => {
    wrapper = mountContentContainer();

    expect(wrapper.vm).toBeDefined();
  });

  it('should match the snapshot', () => {
    wrapper = mountContentContainer();

    expect(wrapper.element).toMatchSnapshot();
  });

  it('should render default slot content', () => {
    const wrapper = mountContentContainer({
      slots: {
        default: '<div data-test-id="default">Custom Default Content</div>'
      }
    });

    expect(wrapper.find('[data-test-id="default"]').text()).toBe('Custom Default Content');
  });
});

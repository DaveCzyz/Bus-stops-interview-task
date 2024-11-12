import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import CardSubheader from '@/components/card/CardSubheader.vue';

describe('CardSubheader.vue', () => {
  it('renders properly with given title', () => {
    const title = 'Test Title';
    const wrapper = mount(CardSubheader, {
      props: {
        title,
      },
    });

    expect(wrapper.exists()).toBe(true);
    expect(wrapper.find('h3').text()).toBe(title);
  });

  it('renders slot content after title', () => {
    const wrapper = mount(CardSubheader, {
      props: {
        title: 'Test Title',
      },
      slots: {
        default: '<span class="additional-content">Extra Content</span>',
      },
    });

    expect(wrapper.find('h3').text()).toBe('Test Title');

    expect(wrapper.find('.additional-content').exists()).toBe(true);
    expect(wrapper.find('.additional-content').text()).toBe('Extra Content');
  });

  it('maintains correct structure when slot is empty', () => {
    const wrapper = mount(CardSubheader, {
      props: {
        title: 'Test Title',
      },
    });

    const divElement = wrapper.find('div');
    expect(divElement.exists()).toBe(true);
    expect(wrapper.find('h3').exists()).toBe(true);
    expect(wrapper.find('h3').text()).toBe('Test Title');
  });
});

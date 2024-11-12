import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import CardHeader from '@/components/card/CardHeader.vue';

describe('CardHeader.vue', () => {
  it('renders properly with title prop', () => {
    const title = 'Test Title';
    const wrapper = mount(CardHeader, {
      props: {
        title,
      },
    });

    expect(wrapper.exists()).toBe(true);
    expect(wrapper.find('h2').text()).toBe(title);
  });

  it('renders without title prop', () => {
    const wrapper = mount(CardHeader)
    expect(wrapper.exists()).toBe(true);
    expect(wrapper.find('h2').exists()).toBe(true);
    expect(wrapper.find('h2').text()).toBe('');
  });

  it('renders default slot content instead of title', () => {
    const slotContent = '<span class="custom-title">Custom Title</span>';
    const wrapper = mount(CardHeader, {
      slots: {
        default: slotContent,
      },
      props: {
        title: 'This should not show',
      },
    });

    expect(wrapper.find('h2').exists()).toBe(false);
    expect(wrapper.find('.custom-title').exists()).toBe(true);
    expect(wrapper.find('.custom-title').text()).toBe('Custom Title');
  });

  it('renders close slot content', () => {
    const closeSlotContent = '<button class="close-btn">Close</button>';
    const wrapper = mount(CardHeader, {
      slots: {
        close: closeSlotContent,
      },
      props: {
        title: 'Test',
      },
    });

    expect(wrapper.find('.close-btn').exists()).toBe(true);
    expect(wrapper.find('.close-btn').text()).toBe('Close');
  })

  it('renders both default and close slots together', () => {
    const wrapper = mount(CardHeader, {
      slots: {
        default: '<h3 class="custom-title">Custom Title</h3>',
        close: '<button class="close-btn">Close</button>',
      },
    });

    expect(wrapper.find('.custom-title').exists()).toBe(true);
    expect(wrapper.find('.close-btn').exists()).toBe(true);
    expect(wrapper.find('h2').exists()).toBe(false);
  });
});

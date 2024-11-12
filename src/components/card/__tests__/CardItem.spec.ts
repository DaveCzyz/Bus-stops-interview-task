import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import CardItem from '@/components/card/CardItem.vue';

describe('CardItem.vue', () => {
  it('renders properly with given value', () => {
    const value = 'Test Value';
    const wrapper = mount(CardItem, {
      props: {
        value,
      },
    });

    expect(wrapper.exists()).toBe(true);
    expect(wrapper.text()).toBe(value);
  });

  it('adds active class when active prop is true', () => {
    const wrapper = mount(CardItem, {
      props: {
        value: 'Test',
        active: true,
      },
    });

    expect(wrapper.classes()).toContain('active');
  });

  it('removes active class when active prop is false', () => {
    const wrapper = mount(CardItem, {
      props: {
        value: 'Test',
        active: false,
      },
    });

    expect(wrapper.classes()).not.toContain('active');
  });

  it('uses default value for active prop', () => {
    const wrapper = mount(CardItem, {
      props: {
        value: 'Test',
      },
    });

    expect(wrapper.classes()).not.toContain('active');
  });

  it('updates active class when prop changes', async () => {
    const wrapper = mount(CardItem, {
      props: {
        value: 'Test',
        active: false,
      },
    });

    expect(wrapper.classes()).not.toContain('active');

    await wrapper.setProps({ active: true });
    expect(wrapper.classes()).toContain('active');

    await wrapper.setProps({ active: false });
    expect(wrapper.classes()).not.toContain('active');
  });
});

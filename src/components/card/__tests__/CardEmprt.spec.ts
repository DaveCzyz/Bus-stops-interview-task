import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import CardEmpty from '@/components/card/CardEmpty.vue';

describe('CardEmpty.vue', () => {
  it('renders properly with given placeholder', () => {
    const placeholder = 'Test placeholder';
    const wrapper = mount(CardEmpty, {
      props: {
        placeholder,
      },
    });

    expect(wrapper.exists()).toBe(true);
    expect(wrapper.text()).toContain(placeholder);
  });
});

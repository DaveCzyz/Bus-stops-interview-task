import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import Card from '@/components/card/CardWrapper.vue';

describe('Card.vue', () => {
  it('renders slot content', () => {
    const wrapper = mount(Card, {
      slots: {
        default: '<div class="test-content">Test Content</div>',
      },
    });

    expect(wrapper.find('.test-content').exists()).toBe(true);
    expect(wrapper.find('.test-content').text()).toBe('Test Content');
  });

  it('renders empty when no slot content provided', () => {
    const wrapper = mount(Card);
    expect(wrapper.element.children).toHaveLength(0);
  });
});

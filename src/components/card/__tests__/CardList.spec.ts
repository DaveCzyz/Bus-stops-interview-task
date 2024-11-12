import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import CardList from '@/components/card/CardList.vue';

describe('CardList.vue', () => {
  it('renders properly with default structure', () => {
    const wrapper = mount(CardList);

    expect(wrapper.exists()).toBe(true);
    expect(wrapper.classes()).toContain('card-list');
  });

  it('renders slot content', () => {
    const wrapper = mount(CardList, {
      slots: {
        default: '<div class="test-item">Test Content</div>',
      },
    });

    expect(wrapper.find('.test-item').exists()).toBe(true);
    expect(wrapper.find('.test-item').text()).toBe('Test Content');
  });

  it('renders multiple slot items', () => {
    const wrapper = mount(CardList, {
      slots: {
        default: `
          <div class="item-1">First Item</div>
          <div class="item-2">Second Item</div>
          <div class="item-3">Third Item</div>
        `
      },
    });

    expect(wrapper.findAll('div[class^="item-"]')).toHaveLength(3);
    expect(wrapper.find('.item-1').text()).toBe('First Item');
    expect(wrapper.find('.item-2').text()).toBe('Second Item');
    expect(wrapper.find('.item-3').text()).toBe('Third Item');
  });
});

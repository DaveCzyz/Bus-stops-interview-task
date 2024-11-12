import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import ResourceLoader from '@/components/ResourceLoader.vue';
import { createStore } from 'vuex';

const createVuexStore = (isLoading = false, error = null) => {
  return createStore({
    modules: {
      stops: {
        namespaced: true,
        getters: {
          isLoading: () => isLoading,
          getError: () => error
        }
      }
    }
  })
}

describe('ResourceLoader.vue', () => {
  it('shows loading spinner when isLoading is true', () => {
    const store = createVuexStore(true, null);
    const wrapper = mount(ResourceLoader, {
      global: {
        plugins: [store],
      },
    });

    expect(wrapper.find('.spinner-border').exists()).toBe(true);
  });

  it('has correct error message structure', () => {
    // @ts-ignore
    const store = createVuexStore(false, 'Error')
    const wrapper = mount(ResourceLoader, {
      global: {
        plugins: [store],
      },
    });

    const errorContainer = wrapper.find('.text-danger');
    expect(errorContainer.exists()).toBe(true);
  })
})

import { describe, it, expect, vi } from 'vitest';
import { createStore } from 'vuex';
import App from '@/App.vue';
import ListNavigation from '../components/NavigationComponent.vue';
import { createRouter, createWebHistory } from 'vue-router';
// @ts-ignore
import { mount } from '@vue/test-utils';

// Mock store
const store = createStore({
    modules: {
        stops: {
            namespaced: true,
            actions: {
                fetchStops: vi.fn().mockResolvedValue(undefined)
            },
        },
    },
});

// Mock router
const router = createRouter({
    history: createWebHistory(),
    routes: [],
});

describe('App.vue', () => {
    it('contains ListNavigation component', () => {
        const wrapper = mount(App, {
            global: {
                plugins: [store, router],
                components: {
                    ListNavigation
                },
            },
        });

        expect(wrapper.findComponent(ListNavigation).exists()).toBe(true);
    });

    it('fetches stops on mount', async () => {
        const fetchStops = vi.spyOn(store, 'dispatch');

        mount(App, {
            global: {
                plugins: [store, router],
                components: {
                    ListNavigation,
                },
            },
        });

        expect(fetchStops).toHaveBeenCalledWith('stops/fetchStops');
    });
});

import type { ActionTree } from 'vuex';
import type { StopsState } from 'types/store/modules/stops';
import type { RootState } from 'types/store';
import { stopsService } from '@/api';
import { ApiError } from 'types/api/client';

export const actions: ActionTree<StopsState, RootState> = {
  async fetchStops({ commit }) {
    commit('SET_LOADING', true);
    commit('SET_ERROR', null);

    try {
      const stops = await stopsService.getAll();
      commit('SET_STOPS', stops);
      return stops;

    } catch (error: unknown) {
      if ((error as ApiError).status) {
        const apiError = error as ApiError;
        commit('SET_ERROR', apiError.message);

      } else {
        commit('SET_ERROR', 'An unexpected error occurred');
      }

      throw error;

    } finally {
      commit('SET_LOADING', false);
    }
  },
  resetSelection({ commit }) {
    commit('RESET_LINE');
    commit('RESET_STOP');
  },
};

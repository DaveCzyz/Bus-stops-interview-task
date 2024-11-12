import type { Module } from 'vuex';
import type { StopsState } from 'types/store/modules/stops';
import type { RootState } from 'types/store';
import { state } from './state';
import { mutations } from './mutations';
import { actions } from './actions';
import { getters } from './getters';

const stops: Module<StopsState, RootState> = {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};

export default stops;

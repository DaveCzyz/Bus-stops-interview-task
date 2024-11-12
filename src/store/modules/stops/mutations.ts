import type { MutationTree } from 'vuex';
import type { SetOrderPayload, StopsState } from 'types/store/modules/stops';
import type { Stop } from 'types/models/Stop';

export const mutations: MutationTree<StopsState> = {
  SET_STOPS(state, stops: Stop[]) {
    state.items = stops;
  },
  SET_LOADING(state, loading: boolean) {
    state.loading = loading;
  },
  SET_ERROR(state, error: string | null) {
    state.error = error;
  },
  SET_SELECTED_LINE(state, line: Pick<Stop, 'line'>) {
    state.selectedLine = line.line;
  },
  SET_SELECTED_STOP(state, stop: Pick<Stop, 'stop'>) {
    state.selectedStop = stop.stop;
  },
  SET_ORDER(state, { key, value }: SetOrderPayload) {
    state.order[key] = value;
  },
  RESET_LINE(state) {
    state.selectedLine = null;
  },
  RESET_STOP(state) {
    state.selectedStop = null;
  },
};

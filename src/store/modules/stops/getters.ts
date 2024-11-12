import type { GetterTree } from 'vuex';
import type { StopsState } from 'types/store/modules/stops';
import type { RootState } from 'types/store';
import { ORDER } from '@/enums';

export const getters: GetterTree<StopsState, RootState> = {
  getStops: (state) => state.items,

  getStopsByLine: (state) => (line: number): string[] => {
    const filteredStops = state.items
      .filter(stop => stop.line === line)
      .map(stop => stop.stop);

    if (state.order.line === ORDER.asc) {
      filteredStops.sort((a, b) => a.localeCompare(b, 'pl'));
    } else {
      filteredStops.sort((a, b) => b.localeCompare(a, 'pl'));
    }

    return [...new Set(filteredStops)];
  },

  isLoading: (state) => state.loading,

  getError: (state) => state.error,

  getBuses: (state) =>
    [...new Set(state.items?.map(stop => stop.line))].sort((a, b) => a - b),

  getSelectedLine: (state) => state.selectedLine,

  getSelectedStop: (state) => state.selectedStop,

  getOrder: (state) => state.order,

  getUniqueStops: (state) => (query: string) => {
    const stops = [...new Set(state.items.map(item => item.stop))];

    if (state.order.stops === ORDER.asc) {
      stops.sort((a, b) => a.localeCompare(b, 'pl'));
    } else {
      stops.sort((a, b) => b.localeCompare(a, 'pl'));
    }

    if (query) {
      return stops.filter((stop: string) => stop.toLowerCase().includes(query.toLowerCase().trim()));
    }

    return stops;
  },
};

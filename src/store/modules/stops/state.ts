import type { StopsState } from 'types/store/modules/stops';
import { ORDER } from '@/enums';

export const state: StopsState = {
  items: [],
  loading: false,
  error: null,
  selectedLine: null,
  selectedStop: null,
  order: {
    line: ORDER.asc,
    stops: ORDER.asc,
  },
};

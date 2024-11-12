import { Stop } from 'types/models/Stop';

export type OrderDirection = 'asc' | 'desc';

export interface OrderState {
  [key: string]: OrderDirection;
}

export interface StopsState {
  items: Stop[];
  loading: boolean;
  error: string | null;
  selectedLine: number | null;
  selectedStop: string | null;
  order: OrderState;
}

export interface StopsMutations {
  'stops/SET_STOPS': Stop[];
  'stops/SET_LOADING': boolean;
  'stops/SET_ERROR': string | null;
  'stops/SET_SELECTED_LINE': Pick<Stop, 'line'>;
  'stops/SET_SELECTED_STOP': Pick<Stop, 'stop'>;
  'stops/SET_ORDER': OrderDirection;
}

export interface SetOrderPayload {
  key: keyof OrderState;
  value: OrderDirection;
}

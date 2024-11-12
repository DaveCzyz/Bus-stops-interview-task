import { createStore } from 'vuex'
import { RootState } from 'types/store';
import stops from './modules/stops/index';

export default createStore<RootState>({
  modules: {
    stops,
  },
});

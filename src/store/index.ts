import Vue from 'vue';
import Vuex from 'vuex';
import actions from './actions';
import mutations from './mutations';
import * as getters from './getters';

import { GeoLocation } from '@/models/location.interface';

Vue.use(Vuex);

// Plugin does not support FillColor declaration, too long for 4h to make from scratch :(
export const ageColors = {
  40: '#00cb09',
  42: '#a4cb00',
  43: '#cb8a00',
  45: '#cb4f00',
  50: '#cb0026',
};

export const initialLocation: GeoLocation = {
  lat: 52.520008,
  lng: 13.404954,
};

export default new Vuex.Store({
  state: {
    current: {
      loc: initialLocation,
      info: undefined,
    },
    polygons: [],
  },
  mutations,
  actions,
  getters,
});

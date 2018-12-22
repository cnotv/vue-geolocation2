import Vue from 'vue';
import Vuex from 'vuex';
import * as getters from './getters';
import { GeoLocation } from '@/models/location.interface';

Vue.use(Vuex);

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
  mutations: {

  },
  actions: {

  },
  getters,
});

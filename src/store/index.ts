import Vue from 'vue';
import Vuex from 'vuex';
import * as getters from './getters';

Vue.use(Vuex);

export const AgeColors = {
  40: '#00cb09',
  42: '#a4cb00',
  43: '#cb8a00',
  45: '#cb4f00',
  50: '#cb0026',
};

export default new Vuex.Store({
  state: {
    current: {
      loc: {
        lat: 52.520008,
        lng: 13.404954,
      },
    },
  },
  mutations: {

  },
  actions: {

  },
  getters,
});

import api from '@/services/geoApi';

export default {
  // unique api query after defining arguments (states)
  // @ts-ignore:disable-next-line
  loadPolygons: ({ commit }) => {
    return new Promise((resolve, reject) => {
      api.fetchData()
        .then(
          (response) => {
            // @ts-ignore:disable-next-line
            commit('LOAD_POLYGONS', response.data);
            resolve(response);
          },
          (error) => reject(error),
        );
    });
  },

  // @ts-ignore:disable-next-line
  setCurrentPolygon: ({ commit }, info) => {
    commit('SET_CURRENT_POLYGON', info);
  },
};

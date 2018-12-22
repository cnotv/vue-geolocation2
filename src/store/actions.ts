import api from '@/services/geoApi';

export default {
  // unique api query after defining arguments (states)
  // @ts-ignore:disable-next-line
  loadPolygons: ({ commit }) => {
    return new Promise((resolve, reject) => {
      api.fetchData()
        .then(
          (response) => {
            commit('LOAD_POLYGONS', response);
            resolve(response);
          },
          (error) => reject(error),
        );
    });
  },
};

import axios from 'axios';

export default {
  url: '/frontend-geo.json',

  /**
   * Fetch the polygons
   */
  fetchData() {
    return new Promise((resolve, reject) => {
      return axios
        .get(this.url)
        .then(
          (response) => {
            resolve(response);
          },
          (response) => {
            reject(response);
          },
      );
    });
  },
};

import Vue from 'vue';

const ApiService = {

  put(resourcePath, params) {
    return new Promise((resolve) => {
      Vue.axios
        .put(resourcePath, params).then((response) => {
          resolve(response.data);
        })
        .catch(() => {
          // Just to error dont show in console, axios handle the error;
          // console.log('Error in Put', error.response.status);
        });
    });
  },

  post(resourcePath, params) {
    return new Promise((resolve) => {
      Vue.axios
        .post(`${resourcePath}`, params).then((response) => {
          resolve(response.data);
        }).catch(() => {
          // Just to error dont show in console, axios handle the error;
          // console.log('Error in Post', error.response.status);
        });
    });
  },

  delete(resourcePath, params) {
    return new Promise((resolve) => {
      Vue.axios
        .delete(`${resourcePath}`, { data: params }).then((response) => {
          resolve(response.data);
        })
        .catch(() => {
          // Just to error dont show in console, axios handle the error;
          // console.log('Error in Delete', error.response.status);
        });
    });
  },

  get(resourcePath, params) {
    return new Promise((resolve) => {
      Vue.axios
        .get(`${resourcePath}`, { params }).then((response) => {
          resolve(response.data);
        })
        .catch(() => {
          // Just to error dont show in console, axios handle the error;
          // console.log('Error in Query', error.response.status);
        });
    });
  },
};

export default ApiService;

import ApiService from '../api.service';

const animalResource = {
  get: async (params) => ApiService.get(`/animals/${params.chip}`),
  post: async (params) => ApiService.post('/animals', params),
  put: async (params) => ApiService.put(`/animals/${params.chip}`, params),
  delete: async (params) => ApiService.delete(`/animals/${params.chip}`)
};

export default animalResource;

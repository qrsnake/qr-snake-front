import ApiService from '../api.service';

const animalResource = {
  get: async (params) => ApiService.get('/animals', params)
};

export default animalResource;

import axios from 'axios';

const host = 'http://localhost:3000';
const ApiService = {
  listMovies: async (page) => {
    try {
      const response = await axios.get(`${host}/movie/${page}`);
          return response.data.results;
    } catch (error) {
      console.error('Error fetching data from API:', error);
      return [];
    }
  },
  getDetail: async (movieId) => {
    try {
      const response = await axios.get(`${host}/movie/${movieId}/details`);
          return response.data;
    } catch (error) {
      console.error('Error fetching data from API:', error);
      return [];
    }
  }
};

export default ApiService;

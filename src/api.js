import axios from "axios";

const API_URL = "https://api.themoviedb.org/3";

const api = axios.create({
  baseURL: API_URL,
  params: {
    api_key: "6f4e46529695845bf36a1ce1369523a5",
    language: "en-US",
    limit: 5,
  },
});

export const moviesApi = {
  getMovies: async () => {
    try {
      const {
        data: { results: nowPlaying },
      } = await api.get("/movie/now_playing");
      console.log(nowPlaying);
      return nowPlaying;
    } catch (e) {
      console.log(e);
    }
  },
  getMovie: async (id) => {
    try {
      const { data } = await api.get(`/movie/${id}`);
      console.log(data);
      return data;
    } catch (e) {
      console.log(e);
    }
  },
  getRecommendations: async (id) => {
    try {
      const {
        data: { results },
      } = await api.get(`/movie/${id}/recommendations`);
      console.log(results);
      return results;
    } catch (e) {
      console.log(e);
    }
  },
};

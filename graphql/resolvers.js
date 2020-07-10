import { moviesApi } from "../src/api";

const resolvers = {
  Query: {
    movies: () => moviesApi.getMovies(),
    movie: (_, { id }) => moviesApi.getMovie(id),
    recommendations: (_, { id }) => moviesApi.getRecommendations(id),
  },
};

export default resolvers;

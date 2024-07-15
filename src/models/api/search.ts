import { Movie } from "../movie";

export interface ISearch {
  searchMovies: (query: string) => Promise<Movie[]>;
  searchReviews(movieId: Movie["id"]): Promise<any>;
}

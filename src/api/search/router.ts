import { SearchAPI } from "src/core/api/controllers";
import { ISearch } from "src/models/api/search";
import { Movie, MoviesResponse, ReviewsResponse } from "src/models/movie";

export class SearchRouter extends SearchAPI implements ISearch {

  static init(): ISearch {
    return new SearchRouter()
  }  

  public async searchMovies(query:string, page=1):Promise<Movie[]>{
    try {
      const res = await this.get<MoviesResponse>("/search/movie", `?api_key=${this.apiKey}&query=${query}&include_adult=false&language=en-US&page=${page}`)
      return res.data.results
    } 
    catch (error) {
      throw new Error(error)
    }
  }

  public async searchReviews(movieId: Movie["id"], page=1): Promise<unknown>{
    try{
      const res = await this.get<ReviewsResponse>(
        `/movie/${movieId}/reviews?api_key=${this.apiKey}&language=en-US&page=${page}`
      );
      return res.data.results;
    }
    catch (err) {
      throw new Error(err);
    }
  }
}
export type Movie = {
    backdrop_path: string;
    title: string;
    vote_average: number;
    vote_count: number;
    poster_path: string;
    original_title: string;
    id: string;
    overview: string;
  };
  
  export type MoviesResponse = { data: { results: Movie[] } };
  export type ReviewsResponse = { data: { results: any } };
  
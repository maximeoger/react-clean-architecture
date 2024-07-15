import { useQuery } from "@tanstack/react-query";
import { SearchRouter } from "../router";
import { Movie } from "models/movie";

export const useSearchReviews = (movieId: Movie["id"]) => {
  const router = SearchRouter.init();
  const { data, isLoading, error, isFetched } = useQuery({
    queryKey: ["movie-reviews", movieId],
    queryFn: () => router.searchReviews(movieId),
  });
  return {
    reviews: data || [],
    loading: isLoading,
    isFetched,
    error: error ? error["message"] : "",
  };
};

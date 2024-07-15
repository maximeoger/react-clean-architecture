import { useQuery } from "@tanstack/react-query";
import { SearchRouter } from "../router";


export const useSearchMovies = (query: string, rating: number)=> {
    const router = SearchRouter.init()
    const {data, error, isLoading} = useQuery({
        queryKey: ["search-movies", query],
        queryFn: () => router.searchMovies('/movies'),
        enabled: !!query
    })
    return {
        movies: data && !!query ? data.filter(movie=> movie.vote_average >= rating) : [],
        loading: isLoading,
        error: error ? error["message"] : ""
    }

}

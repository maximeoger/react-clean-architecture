import React, { useCallback, useState } from "react";
import Logo from "assets/svg/logo.svg";
import { Link } from "react-router-dom";
import { useDebounce } from "use-debounce";
import "./home.css";
import { routes } from "src/router/routes";
import { useSearchMovies } from "src/api/search";
import Header from "containers/home/header"
import Results from "containers/home/results";
import DataContainer from "components/data-container";

export default function Home() {
  const [query, setQuery] = useState("")
  const [rating, setRating] = useState(0)
  const [debouncedQuery] = useDebounce(query, 300)
  const {loading, movies, error} = useSearchMovies(debouncedQuery, rating) 

  return (
    <div>
      <Header query={query} rating={rating} onChangeQuery={setQuery} onChangeRating={setRating}/>
      <DataContainer
        loading={loading}
        noData={movies.length === 0}
        error={error}
      >
      <Results movies={movies}/>
      </DataContainer>
    </div>
  );
}


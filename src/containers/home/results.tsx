import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Card from "components/movie-card";
import { routes } from "router/routes";
import { Movie } from "models/movie";

interface IProps {
  movies: Movie[];
}

const StyledLink = styled(Link)`
  text-decoration: none;
`;

export default function MovieResults({ movies = [] }: IProps) {
  return (
    <>
      {movies.map((movie, i) => (
        <StyledLink to={routes.reviews(movie.id)} key={i}>
          <Card movie={movie} />
        </StyledLink>
      ))}
    </>
  );
}

import React from "react";
import styled from "styled-components";
import { Movie } from "../../models/movie";

interface IProps {
  movie: Movie;
}

const Root = styled.div<{ background: string }>`
  color: #fff;
  text-shadow: 1px 1px 0 #000;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 200px;
  width: 200px;
  margin: 10px;
  border-radius: 6px;
  transition: 0.3s ease;
  cursor: pointer;
  background: ${({ background }) =>
    background
      ? `url(https://image.tmdb.org/t/p/original/${background})`
      : "dimgrey"};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  &:hover {
    opacity: 0.6;
  }
  @media (max-width: 800px) {
    width: 100%;
  }
`;

const Content = styled.div`
  padding: 10px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Title = styled.h3`
  font-size: 1.2em;
  line-height: 1.2em;
  font-weight: 500;
  margin: 0;
  max-width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
const Subtitle = styled.p`
  font-size: 0.9em;
  margin: 0;
`;

export default function MovieCard({ movie }: IProps) {
  return (
    <Root background={movie.backdrop_path}>
      <Content>
        <Title>{movie.title}</Title>
        <Subtitle>
          {movie.vote_average} ({movie.vote_count} votes)
        </Subtitle>
      </Content>
    </Root>
  );
}
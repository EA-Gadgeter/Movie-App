import React from 'react';
import { useParams } from "react-router-dom";
import { useFetchMovieById } from "../hooks/useFetchMovieById";
import { MovieCard } from '../components/MovieCard';

export const Movie = () => {

  const { movieId } = useParams();

  const { movie } = useFetchMovieById(movieId);

  return (
    <div className="text-center">
      <MovieCard
        {...movie}
      />
    </div>
  )
}

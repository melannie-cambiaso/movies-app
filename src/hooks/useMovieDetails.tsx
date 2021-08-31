import React, { useEffect, useState } from 'react';
import movieDB from '../api/movieDB';
import { Cast, CreditsResponse } from '../interfaces/credits';
import { MovieFull } from '../interfaces/movie';

interface MovieDetailts {
  cast: Cast[];
  movieFull?: MovieFull;
  loading: boolean;
}

const useMovieDetails = (movieId: number) => {
  const [state, seSstate] = useState<MovieDetailts>({
    loading: true,
    cast: []
  });

  useEffect(() => {
    getMovieDetails();
  }, []);

  const getMovieDetails = async () => {
    const movieDetailPromise = await movieDB.get<MovieFull>(`/${movieId}`);
    const castPromise = await movieDB.get<CreditsResponse>(
      `/${movieId}/credits`
    );
    const [movieDetailsResponse, castResponse] = await Promise.all([
      movieDetailPromise,
      castPromise
    ]);

    const { data: movieFull = undefined } = movieDetailsResponse;

    const { data: { cast = [] } = {} } = castResponse;

    seSstate({
      loading: false,
      movieFull,
      cast
    });
  };
  return {
    ...state
  };
};

export default useMovieDetails;

import React, { useEffect, useState } from 'react';
import movieDB from '../api/movieDB';
import { MoviesResponse, Movies } from '../interfaces/movie';

interface MoviesState {
  nowPlaying: Movies[];
  popular: Movies[];
  topRated: Movies[];
  upcoming: Movies[];
}

export const useMovies = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [movieState, setMovieState] = useState<MoviesState>({
    nowPlaying: [],
    popular: [],
    topRated: [],
    upcoming: []
  });

  const getMovies = async () => {
    const nowPlaying = movieDB.get<MoviesResponse>('/now_playing');
    const popular = movieDB.get<MoviesResponse>('/popular');
    const topRated = movieDB.get<MoviesResponse>('/top_rated');
    const upcoming = movieDB.get<MoviesResponse>('/upcoming');

    const response = await Promise.all([
      nowPlaying,
      popular,
      topRated,
      upcoming
    ]);

    setMovieState({
      nowPlaying: response[0].data.results,
      popular: response[1].data.results,
      topRated: response[2].data.results,
      upcoming: response[3].data.results
    });

    setIsLoading(false);
  };

  useEffect(() => {
    getMovies();
  }, []);
  return {
    ...movieState,
    isLoading
  };
};

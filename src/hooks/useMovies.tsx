import React, { useEffect, useState } from 'react';
import movieDB from '../api/movieDB';
import { MoviesResponse, Movies } from '../interfaces/movie';

export const useMovies = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [nowPlaying, setNowPlaying] = useState<Movies[]>([]);
  const [popularMovies, setPopularMovies] = useState<Movies[]>([]);

  const getMovies = async () => {
    const nowPlayingResponse = await movieDB.get<MoviesResponse>(
      '/now_playing'
    );
    const popularResponse = await movieDB.get<MoviesResponse>('/popular');
    await movieDB.get<MoviesResponse>('/top_rated');
    await movieDB.get<MoviesResponse>('/upcoming');
    setNowPlaying(nowPlayingResponse.data.results);
    setPopularMovies(popularResponse.data.results);
    setIsLoading(false);
  };

  useEffect(() => {
    getMovies();
  }, []);
  return {
    nowPlaying,
    popularMovies,
    isLoading
  };
};

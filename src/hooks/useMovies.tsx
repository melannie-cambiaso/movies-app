import React, { useEffect, useState } from 'react';
import movieDB from '../api/movieDB';
import { MovieDBNowPlaying, Movies } from '../interfaces/movie';

export const useMovies = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [nowPlaying, setNowPlaying] = useState<Movies[]>([]);

  const getMovies = async () => {
    const response = await movieDB.get<MovieDBNowPlaying>('/now_playing');
    setNowPlaying(response.data.results);
    setIsLoading(false);
  };

  useEffect(() => {
    getMovies();
  }, []);
  return {
    nowPlaying,
    isLoading
  };
};

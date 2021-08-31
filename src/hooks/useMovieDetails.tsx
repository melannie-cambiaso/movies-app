import React, { useEffect, useState } from 'react';
import movieDB from '../api/movieDB';
import { MovieFull } from '../interfaces/movie';

interface MovieDetailts {
  cast: any;
  movieFull: MovieFull;
  loading: boolean;
}

const useMovieDetails = (movieId: number) => {
  const [state, setstate] = useState<MovieDetailts>();

  useEffect(() => {
    getMovieDetails();
  }, []);

  const getMovieDetails = async () => {
    const resp = await movieDB.get<MovieFull>(`/${movieId}`);
    console.log(resp.data);
  };
  return {
    ...state
  };
};

export default useMovieDetails;

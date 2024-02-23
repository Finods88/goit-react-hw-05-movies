import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
});

const API_KEY = 'c26eca08a64a6a03a8df2e5238182fb9';
const BEARER_TOKEN =
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMjZlY2EwOGE2NGE2YTAzYThkZjJlNTIzODE4MmZiOSIsInN1YiI6IjY1ZDhjODA5YTI4NGViMDE2Mjg3ZTU5OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ts9EjcunI1qs_Yb1bgAlRZi5af6C2r92M3HBC_X1lGk';

export const getTrendingMovies = () => {
  return instance.get('/trending/movie/day', {
    headers: {
      Authorization: `Bearer ${BEARER_TOKEN}`,
    },
  });
};

export const getMovieByQuery = query => {
  const options = {
    headers: {
      Authorization: `Bearer ${BEARER_TOKEN}`,
    },
    params: {
      query: query,
    },
  };
  return instance.get('/search/movie', options);
};

export const getMovieById = movie_id => {
  return instance.get(
    `/movie/${movie_id}`,
    {
      params: {
        api_key: API_KEY,
      },
    },
    {
      headers: {
        Authorization: `Bearer ${BEARER_TOKEN}`,
      },
    }
  );
};

export const getCastById = movie_id => {
  return instance.get(
    `/movie/${movie_id}/credits`,
    {
      params: {
        api_key: API_KEY,
      },
    },
    {
      headers: {
        Authorization: `Bearer ${BEARER_TOKEN}`,
      },
    }
  );
};

export const getReviewsById = movie_id => {
  return instance.get(
    `/movie/${movie_id}/reviews`,
    {
      params: {
        api_key: API_KEY,
      },
    },
    {
      headers: {
        Authorization: `Bearer ${BEARER_TOKEN}`,
      },
    }
  );
};

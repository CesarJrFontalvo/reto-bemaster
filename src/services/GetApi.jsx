import axios from "axios";

const baseUrl = "https://api.themoviedb.org/3"
const api_key = 'be02a78eb6125519e9bd1a03ef4f29e5'

const movieByGenreBaseURL = 'https://api.themoviedb.org/3/discover/movie?api_key=be02a78eb6125519e9bd1a03ef4f29e5';

// const getTrendingVideos = axios.get(baseUrl + "/trending/all/day?api_key=" + api_key);

// categorias  series https://api.themoviedb.org/3/genre/tv/list?api_key=be02a78eb6125519e9bd1a03ef4f29e5
// categorias  movies https://api.themoviedb.org/3/genre/movie/list?api_key=be02a78eb6125519e9bd1a03ef4f29e5
const getCategoryMovies = axios.get(`${baseUrl}/genre/movie/list?api_key=${api_key}`);
const getCategorySeries = axios.get(`${baseUrl}/genre/tv/list?api_key=${api_key}`);

const getMovieByGenreId = (id) => axios.get(movieByGenreBaseURL + "&with_genres=" + id);
const getMovieId = (id) => axios.get(`${baseUrl}/movie/${id}?api_key=${api_key}`);

const getTrendingVideos = axios.get(`${baseUrl}/trending/all/day?api_key=${api_key}`);
// const getMovieByGenreId = (id) =>
//     axios.get(`${movieByGenreBaseURL}&with_genres=${id}`)

export default {
    getTrendingVideos,
    getMovieByGenreId,
    getCategoryMovies,
    getCategorySeries,
    getMovieId
}
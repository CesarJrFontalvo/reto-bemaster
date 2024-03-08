import axios from "axios";

const baseUrl = "https://api.themoviedb.org/3"
const api_key = 'be02a78eb6125519e9bd1a03ef4f29e5'

const movieByGenreBaseURL = 'https://api.themoviedb.org/3/discover/movie?api_key=be02a78eb6125519e9bd1a03ef4f29e5';

const getTrendingVideos = axios.get(baseUrl + "/trending/all/day?api_key=" + api_key);
const getMovieByGenreId = (id) =>
    axios.get(movieByGenreBaseURL + "&with_genres=" + id)

// const getTrendingVideos = axios.get(`${baseUrl}/trending/all/day?api_key=${api_key}`);
// const getMovieByGenreId = (id) =>
//     axios.get(`${movieByGenreBaseURL}&with_genres=${id}`)

export default {
    getTrendingVideos,
    getMovieByGenreId
}
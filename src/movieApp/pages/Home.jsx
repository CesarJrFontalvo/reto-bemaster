
import { LogoutOutlined, MenuBookOutlined } from "@mui/icons-material";
import { AppBar, Grid, IconButton, Toolbar, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { startLogout } from "../../store/auth/thunk";

import { useEffect } from 'react';
import axios from 'axios'
import { useState } from 'react';
import YouTube from 'react-youtube';
import { NavbarApp } from "../components/NavbarApp";
import { Carousel } from "../components/Carousel";
import { ProductionHouse } from "../components/ProductionHouse";

const Home = () => {
  // const dispatch = useDispatch();
  const { displayName, photoURL } = useSelector(state => state.auth);

  // const onLogout = () => {
  //   dispatch(startLogout())
  // }
  const API_URL = "https://api.themoviedb.org/3";
  const API_KEY = "4f5f43495afcc67e9553f6c684a82f84";
  const IMAGE_PATH = "https://image.tmdb.org/t/p/original";

  // endpoint para las imagenes
  const URL_IMAGE = "https://image.tmdb.org/t/p/original";

  // variables de estado
  const [movies, setMovies] = useState([]);
  const [searchKey, setSearchKey] = useState("");
  //const [selectedMovie, setSelectedMovie] = useState({})
  const [trailer, setTrailer] = useState(null);
  const [movie, setMovie] = useState({ title: "Loading Movies" });
  const [playing, setPlaying] = useState(false);

  // funcion para realizar la peticion get a la api
  const fetchMovies = async (searchKey, with_genres = 16) => {
    const type = searchKey ? "search" : "discover";
    const {
      data: { results },
    } = await axios.get(`${API_URL}/${type}/movie`, {
      params: {
        api_key: API_KEY,
        query: searchKey,
        with_genres
      },
    });
    // console.log('data',results);
    //setSelectedMovie(results[0])

    setMovies(results);
    setMovie(results[0]);

    if (results.length) {
      await fetchMovie(results[0].id);
    }
  };

  // funcion para la peticion de un solo objeto y mostrar en reproductor de videos
  const fetchMovie = async (id) => {
    const { data } = await axios.get(`${API_URL}/movie/${id}`, {
      params: {
        api_key: API_KEY,
        append_to_response: "videos",
      },
    });

    if (data.videos && data.videos.results) {
      const trailer = data.videos.results.find(
        (vid) => vid.name === "Official Trailer"
      );
      setTrailer(trailer ? trailer : data.videos.results[0]);
    }
    //return data
    setMovie(data);
  };

  const selectMovie = async (movie) => {
    // const data = await fetchMovie(movie.id)
    // console.log(data);
    // setSelectedMovie(movie)
    fetchMovie(movie.id);

    setMovie(movie);
    window.scrollTo(0, 0);
  };

  // funcion para buscar peliculas
  const searchMovies = (e) => {
    e.preventDefault();
    fetchMovies(searchKey);
  };

  useEffect(() => {
    fetchMovies();
  }, []);
  return (
    <>
      <Grid
        container
        spacing={0}
        direction="column"
        // alignItems="center"
        // justifyContent="center"
        sx={{ minHeight: "100vh", backgroundColor: "primary.main" }}
      >



        {/* <h1 className='text-white ' >
           <span className="mx-5"> Hola {displayName}</span>
            
            <IconButton color="error"
              onClick={onLogout} >
              <LogoutOutlined />
              Logout
            </IconButton>

          </h1> */}
        <NavbarApp displayName={displayName} />
        <Carousel />
        <ProductionHouse />
      </Grid>
    </>
  )
}

export default Home
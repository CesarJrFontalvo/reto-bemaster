

import {  Grid} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";


import { useEffect } from 'react';
import { useState } from 'react';
import { Carousel } from "../components/Carousel";
import { ProductionHouse } from "../components/ProductionHouse";
import GetApi from "../../services/GetApi";
import { listCategorySeries, listCategoryMovies } from "../../store/movieApp/movieAppSlice";
import { GenreMovieList } from "../components/GenreMovieList";

const Home = () => {
  const dispatch = useDispatch();

  const getCategory = async () => {
    await GetApi.getCategoryMovies.then(resp => {
      dispatch(listCategoryMovies(resp.data.genres))
    })
    await GetApi.getCategorySeries.then(resp => {
      dispatch(listCategorySeries(resp.data.genres))
    })
  };

  useEffect(() => {
    getCategory()
  }, []);
  return (
    <>
      <Grid
        container
        spacing={0}
        direction="column"
        sx={{ minHeight: "100vh", backgroundColor: "primary.main" }}
      >

        <Carousel />
        <ProductionHouse />
        <GenreMovieList />

      </Grid>
    </>
  )
}

export default Home
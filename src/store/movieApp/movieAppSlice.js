import { createSlice } from '@reduxjs/toolkit';

export const movieAppSlice = createSlice({
    name: 'movieApp',
    initialState: {
        status: 'checking', // checking not-authenticated, authenticated
        genresMovies: [],
        genresSeries: [],
        errorMessage: null,
    },
    reducers: {
        listCategoryMovies: (state, {payload} /* action */) => {
            state.status = "authenticated";
            state.genresMovies = payload;
            state.errorMessage = null
        },
        listCategorySeries: (state, {payload} /* action */) => {
            state.status = "authenticated";
            state.genresSeries = payload;
            state.errorMessage = null
        },
        checkingCredentials: (state ) => {
            state.status = 'checking'
        },
    }
});


// Action creators are generated for each case reducer function
export const { listCategoryMovies, listCategorySeries } = movieAppSlice.actions;
import { configureStore } from '@reduxjs/toolkit'
import { authSlice } from './auth';
import { movieAppSlice } from './movieApp/movieAppSlice';
// import { journalSlice } from './journal';


export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    movieApp: movieAppSlice.reducer,
  },
});
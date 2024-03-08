
import { checkingCredentials } from "../auth";
import { listCategoryMovies } from "./movieAppSlice";

export const getAllCategory = (list) => {

    return async (dispatch) => {
      // dispatch(checkingCredentials());
 
      if (list.length > 0) return dispatch(listCategoryMovies());
    };
    
  };
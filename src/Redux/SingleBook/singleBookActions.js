import {
  FETCH_SINGLE_BOOK_FAILURE,
  FETCH_SINGLE_BOOK_REQ,
  FETCH_SINGLE_BOOK_SUCCESS,
} from "./singleBookTypes";
import axios from "axios";

export const fetchSingleBookReq = () => {
  return {
    type: FETCH_SINGLE_BOOK_REQ,
  };
};

export const fetchSingleBookSuccess = (singleBook) => {
  return {
    type: FETCH_SINGLE_BOOK_SUCCESS,
    payload: singleBook,
  };
};

export const fetchSingleBookFailure = (error) => {
  return {
    type: FETCH_SINGLE_BOOK_FAILURE,
    payload: error,
  };
};

export const fetchSingleBook = (api) => {
  return (dispatch) => {
    dispatch(fetchSingleBookReq());
    axios
      .get(api)
      .then((response) => {
        const book = response.data.results;
        dispatch(fetchSingleBookSuccess(book));
      })
      .catch((error) => {
        const errorMessage = error.message;
        dispatch(fetchSingleBookFailure(errorMessage));
      });
  };
};

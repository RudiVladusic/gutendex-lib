import axios from "axios";
import {
  FETCH_BOOKS_FAILURE,
  FETCH_BOOKS_REQUEST,
  FETCH_BOOKS_SUCCESS,
} from "./bookTypes";

export const fetchBooksRequest = () => {
  return {
    type: FETCH_BOOKS_REQUEST,
  };
};

export const fetchBooksSuccess = (books) => {
  return {
    type: FETCH_BOOKS_SUCCESS,
    payload: books,
  };
};

export const fetchBooksFailure = (error) => {
  return {
    type: FETCH_BOOKS_FAILURE,
    payload: error,
  };
};

export const fetchBooks = (api) => {
  return (dispatch) => {
    dispatch(fetchBooksRequest());
    axios
      .get(api)
      .then((response) => {
        const books = response.data.results;
        if (books.length === 0) {
          dispatch(fetchBooksFailure("no results"));
        } else {
          dispatch(fetchBooksSuccess(books));
        }
      })
      .catch((error) => {
        const errorMessage = error.message;
        dispatch(fetchBooksFailure(errorMessage));
      });
  };
};

import {
  SEARCH_BOOKS_FAILURE,
  SEARCH_BOOKS_REQUEST,
  SEARCH_BOOKS_SUCCESS,
} from "./searchTypes";

import axios from "axios";

export const searchBooksRequest = () => {
  return {
    type: SEARCH_BOOKS_REQUEST,
  };
};

export const searchBooksFailure = (error) => {
  return {
    type: SEARCH_BOOKS_FAILURE,
    payload: error,
  };
};

export const searchBooksSuccess = (books) => {
  return {
    type: SEARCH_BOOKS_SUCCESS,
    payload: books,
  };
};

export const fetchSearchBooks = (apiString) => {
  return (dispatch) => {
    dispatch(searchBooksRequest());
    axios
      .get(apiString)
      .then((response) => {
        const searchBookPayload = response.data.results;
        if (searchBookPayload.length === 0) {
          dispatch(searchBooksFailure(`No results`));
        } else {
          dispatch(searchBooksSuccess(response.data.results));
        }
      })
      .catch((error) => {
        dispatch(searchBooksFailure(error));
        console.log(error);
      });
  };
};

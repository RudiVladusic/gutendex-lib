import { saveToLocal } from "../../Functions/saveToLocal";
import {
  FETCH_BOOKS_FAILURE,
  FETCH_BOOKS_REQUEST,
  FETCH_BOOKS_SUCCESS,
} from "./bookTypes";

const checkForBooks = JSON.parse(localStorage.getItem("book-list"));

const initialState = {
  loading: false,
  books: checkForBooks || [],
  error: "",
};

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_BOOKS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_BOOKS_SUCCESS:
      saveToLocal("book-list", action.payload);
      return {
        loading: false,
        books: action.payload,
        error: "",
      };
    case FETCH_BOOKS_FAILURE:
      return {
        loading: false,
        books: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default bookReducer;

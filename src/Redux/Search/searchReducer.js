import { getFromLocal } from "../../Functions/getFromLocal";
import { saveToLocal } from "../../Functions/saveToLocal";
import {
  GUTENDEX_SEARCH_RESULTS,
  GUTENDEX_SEARCH_TERM,
  SEARCH_BOOKS_FAILURE,
  SEARCH_BOOKS_REQUEST,
  SEARCH_BOOKS_SUCCESS,
} from "./searchTypes";

const initialState = {
  loading: false,
  error: "",
  searchResults: getFromLocal(GUTENDEX_SEARCH_RESULTS) || [],
  searchTerm: getFromLocal(GUTENDEX_SEARCH_TERM) || "",
};

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_BOOKS_REQUEST:
      return {
        ...state,
        loading: true,
        searchTerm: action.payload,
      };
    case SEARCH_BOOKS_SUCCESS:
      saveToLocal(GUTENDEX_SEARCH_RESULTS, action.payload);

      return {
        ...state,
        loading: false,
        searchResults: action.payload,
        error: "",
      };
    case SEARCH_BOOKS_FAILURE:
      return {
        ...state,
        loading: false,
        searchResults: [],
        error: action.payload,
      };

    default:
      return state;
  }
};

export default searchReducer;

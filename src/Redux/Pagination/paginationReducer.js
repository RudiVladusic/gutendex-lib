import {
  HOME_NEXT_PAGE,
  HOME_PREVIOUS_PAGE,
  PAGINATION_RESET,
  SEARCH_NEXT_PAGE,
  SEARCH_PREVIOUS_PAGE,
} from "./paginationTypes";

const initialState = {
  homeComponentPage: 1,
  searchComponentPage: 1,
};

const paginationReducer = (state = initialState, action) => {
  switch (action.type) {
    case HOME_NEXT_PAGE:
      return {
        ...state,
        homeComponentPage: state.homeComponentPage + 1,
      };
    case HOME_PREVIOUS_PAGE:
      return {
        ...state,
        homeComponentPage: state.homeComponentPage - 1,
      };
    case SEARCH_NEXT_PAGE:
      return {
        ...state,
        searchComponentPage: state.searchComponentPage + 1,
      };

    case SEARCH_PREVIOUS_PAGE:
      return {
        ...state,
        searchComponentPage: state.searchComponentPage - 1,
      };

    case PAGINATION_RESET:
      return {
        ...state,
        searchComponentPage: 1,
      };
    default:
      return state;
  }
};

export default paginationReducer;

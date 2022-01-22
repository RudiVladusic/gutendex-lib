import {
  HOME_PREVIOUS_PAGE,
  HOME_NEXT_PAGE,
  SEARCH_NEXT_PAGE,
  SEARCH_PREVIOUS_PAGE,
  PAGINATION_RESET,
} from "./paginationTypes";

export const homePreviousPage = () => {
  return {
    type: HOME_PREVIOUS_PAGE,
  };
};

export const homeNextPage = () => {
  return {
    type: HOME_NEXT_PAGE,
  };
};

export const searchNextPage = () => {
  return {
    type: SEARCH_NEXT_PAGE,
  };
};

export const searchPreviousPage = () => {
  return {
    type: SEARCH_PREVIOUS_PAGE,
  };
};

export const paginationReset = () => {
  return {
    type: PAGINATION_RESET,
  };
};

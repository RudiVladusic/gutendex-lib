import { PREVIOUS_PAGE, NEXT_PAGE } from "./paginationTypes";

export const previousPage = () => {
  return {
    type: PREVIOUS_PAGE,
  };
};

export const nextPage = () => {
  return {
    type: NEXT_PAGE,
  };
};

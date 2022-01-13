import { NEXT_PAGE, PREVIOUS_PAGE } from "./paginationTypes";

const initialState = {
  page: 1,
};

const paginationReducer = (state = initialState, action) => {
  switch (action.type) {
    case NEXT_PAGE:
      return {
        ...state,
        page: state.page + 1,
      };
    case PREVIOUS_PAGE:
      return {
        ...state,
        page: state.page - 1,
      };
    default:
      return state;
  }
};

export default paginationReducer;

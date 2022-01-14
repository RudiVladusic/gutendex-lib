import {
  FETCH_SINGLE_BOOK_FAILURE,
  FETCH_SINGLE_BOOK_REQ,
  FETCH_SINGLE_BOOK_SUCCESS,
} from "./singleBookTypes";

const initialState = {
  singleBookInfo: [],
  loading: false,
  error: "",
};

const singleBookReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SINGLE_BOOK_REQ:
      return {
        ...state,
        loading: true,
      };
    case FETCH_SINGLE_BOOK_SUCCESS:
      return {
        loading: false,
        singleBookInfo: action.payload,
        error: "",
      };
    case FETCH_SINGLE_BOOK_FAILURE:
      return {
        loading: false,
        error: action.payload,
        singleBookInfo: [],
      };
    default:
      return state;
  }
};

export default singleBookReducer;

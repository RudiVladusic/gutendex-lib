import { combineReducers } from "redux";
import bookReducer from "./Books/bookReducer";
import paginationReducer from "./Pagination/paginationReducer";
import singleBookReducer from "./SingleBook/singleBookReducer";

const rootReducer = combineReducers({
  book: bookReducer,
  pagination: paginationReducer,
  singleBook: singleBookReducer,
});

export default rootReducer;

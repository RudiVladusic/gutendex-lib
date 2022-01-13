import { combineReducers } from "redux";
import bookReducer from "./Books/bookReducer";
import paginationReducer from "./Pagination/paginationReducer";

const rootReducer = combineReducers({
  book: bookReducer,
  pagination: paginationReducer,
});

export default rootReducer;

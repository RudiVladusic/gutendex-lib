import { combineReducers } from "redux";
import bookReducer from "./Books/bookReducer";
import paginationReducer from "./Pagination/paginationReducer";
import singleBookReducer from "./SingleBook/singleBookReducer";
import userReducer from "./User/userReducer";

const rootReducer = combineReducers({
  book: bookReducer,
  pagination: paginationReducer,
  singleBook: singleBookReducer,
  user: userReducer,
});

export default rootReducer;

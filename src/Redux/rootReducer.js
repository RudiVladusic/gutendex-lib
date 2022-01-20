import { combineReducers } from "redux";
import bookReducer from "./Books/bookReducer";
import paginationReducer from "./Pagination/paginationReducer";
import searchReducer from "./Search/searchReducer";
import singleBookReducer from "./SingleBook/singleBookReducer";
import userReducer from "./User/userReducer";

const rootReducer = combineReducers({
  book: bookReducer,
  pagination: paginationReducer,
  singleBook: singleBookReducer,
  user: userReducer,
  search: searchReducer,
});

export default rootReducer;

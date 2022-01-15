import { saveToLocal } from "../../Functions/saveToLocal";
import validate from "../../Functions/validateLogin";
import {
  LOGIN_ATTEMPT,
  LOGIN_SUCCESS,
  LOGOUT,
  REGISTER_USER,
} from "./userTypes";

const checkForUser = JSON.parse(localStorage.getItem("userAccount"));
const initialState = {
  isError: false,
  isLoggedIn: false,
  credentials: checkForUser || {
    username: undefined,
    password: undefined,
  },
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_USER:
      saveToLocal("userAccount", action.payload);
      return {
        ...state,
        credentials: {
          username: action.payload.username,
          password: action.payload.password,
        },
      };
    case LOGIN_ATTEMPT:
      const checkLogin = validate(state.credentials, action.payload);
      console.log(checkLogin);
      return {
        ...state,
        isLoggedIn: checkLogin,
      };
    case LOGOUT:
      return {
        ...state,
        isLoggedIn: false,
      };
    default:
      return state;
  }
};

export default userReducer;

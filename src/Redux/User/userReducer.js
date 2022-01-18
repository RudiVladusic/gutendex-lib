import { saveToLocal } from "../../Functions/saveToLocal";
import validate from "../../Functions/validateLogin";
import {
  ADD_TO_FAVORITES,
  LOGIN_ATTEMPT,
  LOGIN_FAILURE,
  LOGOUT,
  REGISTER_FAILURE,
  REGISTER_USER,
} from "./userTypes";

const checkForUser = JSON.parse(localStorage.getItem("userAccount"));
const initialState = {
  isLoginError: false,
  isRegisterError: false,
  isLoggedIn: false,
  credentials: checkForUser || {
    username: undefined,
    password: undefined,
  },
  favorites: [],
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_USER:
      saveToLocal("userAccount", action.payload);
      return {
        ...state,
        isLoggedIn: true,
        credentials: {
          username: action.payload.username,
          password: action.payload.password,
        },
      };
    case LOGIN_ATTEMPT:
      const checkLogin = validate(state.credentials, action.payload);
      return {
        ...state,
        isLoggedIn: checkLogin,
        isLoginError: checkLogin ? false : true,
      };
    case REGISTER_FAILURE:
      return {
        ...state,
        isRegisterError: true,
      };

    case LOGIN_FAILURE:
      return {
        ...state,
        isLoginError: true,
      };

    case LOGOUT:
      return {
        ...state,
        isLoggedIn: false,
      };
    case ADD_TO_FAVORITES: {
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };
    }
    default:
      return state;
  }
};

export default userReducer;

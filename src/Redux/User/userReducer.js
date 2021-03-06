import { saveToLocal } from "../../Functions/saveToLocal";
import { addToFavs } from "../../Functions/addToFavs";
import { getFromLocal } from "../../Functions/getFromLocal";

import {
  ADD_TO_FAVORITES,
  LOGIN_ATTEMPT,
  LOGIN_FAILURE,
  LOGOUT,
  REGISTER_FAILURE,
  REGISTER_USER,
  REMOVE_FROM_FAVORITES,
  GUTENDEX_USER_CREDENTIALS,
  GUTENDEX_USER_FAVORITES,
  LOGIN_SUCCESS,
} from "./userTypes";
import { removeFromFavs } from "../../Functions/removeFromFavs";

const checkForUser = getFromLocal(GUTENDEX_USER_CREDENTIALS);
const checkForUserFavs = getFromLocal(GUTENDEX_USER_FAVORITES);
const initialState = {
  isLoginError: false,
  isRegisterError: false,
  isLoggedIn: false,
  loading: false,
  credentials: checkForUser || {
    username: undefined,
    password: undefined,
  },
  favorites: checkForUserFavs || [],
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_USER:
      saveToLocal(GUTENDEX_USER_CREDENTIALS, action.payload);
      return {
        ...state,
        isLoggedIn: true,
        credentials: {
          username: action.payload.username,
          password: action.payload.password,
        },
      };
    case LOGIN_ATTEMPT:
      return {
        ...state,
        loading: true,
        isLoginError: false,
      };
    case LOGIN_SUCCESS: {
      return {
        ...state,
        loading: false,
        isLoggedIn: true,
      };
    }
    case REGISTER_FAILURE:
      return {
        ...state,
        isRegisterError: true,
      };

    case LOGIN_FAILURE:
      return {
        ...state,
        isLoggedIn: false,
        loading: false,
        isLoginError: true,
      };

    case LOGOUT:
      return {
        ...state,
        isLoggedIn: false,
        isLoginError: false,
      };
    case ADD_TO_FAVORITES:
      const newFavoriteAdded = addToFavs(state.favorites, action.payload);
      saveToLocal(GUTENDEX_USER_FAVORITES, newFavoriteAdded);
      return {
        ...state,
        favorites: newFavoriteAdded,
      };

    case REMOVE_FROM_FAVORITES:
      const removeFavorite = removeFromFavs(state.favorites, action.payload);
      saveToLocal(GUTENDEX_USER_FAVORITES, removeFavorite);
      return {
        ...state,
        favorites: removeFavorite,
      };

    default:
      return state;
  }
};

export default userReducer;

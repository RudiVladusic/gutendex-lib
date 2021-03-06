import {
  ADD_TO_FAVORITES,
  LOGIN_ATTEMPT,
  LOGIN_FAILURE,
  LOGIN_SUCCESS,
  LOGOUT,
  REGISTER_FAILURE,
  REGISTER_USER,
  REMOVE_FROM_FAVORITES,
} from "./userTypes";

export const loginAttempt = () => {
  return {
    type: LOGIN_ATTEMPT,
  };
};

export const loginSuccess = () => {
  return {
    type: LOGIN_SUCCESS,
  };
};

export const logout = () => {
  return {
    type: LOGOUT,
  };
};

export const registerUser = (userInfo) => {
  return {
    type: REGISTER_USER,
    payload: userInfo,
  };
};

export const registerFailure = () => {
  return {
    type: REGISTER_FAILURE,
  };
};

export const loginFailure = () => {
  return {
    type: LOGIN_FAILURE,
  };
};

export const addToFavorites = (item) => {
  return {
    type: ADD_TO_FAVORITES,
    payload: item,
  };
};

export const removeFromFavorites = (item) => {
  return {
    type: REMOVE_FROM_FAVORITES,
    payload: item,
  };
};

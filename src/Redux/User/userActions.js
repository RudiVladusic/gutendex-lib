import {
  LOGIN_ATTEMPT,
  LOGIN_FAILURE,
  LOGIN_SUCCESS,
  LOGOUT,
  REGISTER_USER,
} from "./userTypes";

export const loginAttempt = (userInfo) => {
  return {
    type: LOGIN_ATTEMPT,
    payload: userInfo,
  };
};

export const loginSuccess = () => {
  return {
    type: LOGIN_SUCCESS,
  };
};

export const loginFailure = (error) => {
  return {
    type: LOGIN_FAILURE,
    payload: error,
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

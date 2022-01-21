import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  loginAttempt,
  loginFailure,
  loginSuccess,
} from "../../Redux/User/userActions";
import ErrorModal from "../Presentational/ErrorModal";
import AccountModal from "../Presentational/AccountModal";
import validate from "../../Functions/validateLogin";
import Loading from "../Presentational/Loading";

const Login = () => {
  const dispatch = useDispatch();
  const [userLoginInfo, setUserLoginInfo] = useState({
    username: "",
    password: "",
  });

  const userCredentials = useSelector((state) => state.user.credentials);
  const isLogged = useSelector((state) => state.user.isLoggedIn);
  const isError = useSelector((state) => state.user.isLoginError);
  const isLoading = useSelector((state) => state.user.loading);
  let navigate = useNavigate();
  useEffect(() => {
    if (isLogged) {
      navigate(-1);
    }
    //eslint-disable-next-line
  }, [isLogged]);

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    dispatch(loginAttempt(userLoginInfo));
    const validationCheck = validate(userCredentials, userLoginInfo);
    if (validationCheck) {
      return setTimeout(() => {
        dispatch(loginSuccess());
      }, 2000);
    } else {
      return setTimeout(() => {
        dispatch(loginFailure());
      }, 2000);
    }
  };

  return (
    <main className="app-main login">
      <div className="form-wrapper login-form">
        <form
          onSubmit={(e) => {
            handleLoginSubmit(e);
          }}
        >
          <div className="form-group">
            {isLoading && <Loading />}
            {isError && (
              <ErrorModal
                errorMessage={`Wrong username and password combination`}
              />
            )}
          </div>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              name="username"
              id="username"
              onChange={(e) => {
                setUserLoginInfo({
                  ...userLoginInfo,
                  username: e.target.value,
                });
              }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              onChange={(e) => {
                setUserLoginInfo({
                  ...userLoginInfo,
                  password: e.target.value,
                });
              }}
            />
          </div>
          <div className="form-group">
            <button>Login</button>
          </div>
          <div className="form-group">
            <AccountModal
              modal={`Don't have an account?`}
              message={`Sign up!`}
              link={`/register`}
            />
          </div>
        </form>
      </div>
    </main>
  );
};

export default Login;

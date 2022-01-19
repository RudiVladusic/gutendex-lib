import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginAttempt } from "../../Redux/User/userActions";
import ErrorModal from "../Presentational/ErrorModal";
import AccountModal from "../Presentational/AccountModal";

const Login = () => {
  const dispatch = useDispatch();
  const [userLoginInfo, setUserLoginInfo] = useState({
    username: "",
    password: "",
  });

  const isLogged = useSelector((state) => state.user.isLoggedIn);
  const isError = useSelector((state) => state.user.isLoginError);
  let navigate = useNavigate();
  useEffect(() => {
    if (isLogged) {
      navigate("/");
    }
    //eslint-disable-next-line
  }, [isLogged]);

  return (
    <main className="app-main login">
      <div className="form-wrapper login-form">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            dispatch(loginAttempt(userLoginInfo));
          }}
        >
          {isError && (
            <ErrorModal
              errorMessage={`Wrong username and password combination`}
            />
          )}
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

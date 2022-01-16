import React, { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginAttempt } from "../../Redux/User/userActions";
import ErrorModal from "../Presentational/ErrorModal";

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
    <div className="padding">
      <main>
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
          <button>Login</button>
          <div className="account-modal">
            Don't have a account? <Link to={"/register"}>Sign up</Link>
          </div>
        </form>
      </main>
    </div>
  );
};

export default Login;

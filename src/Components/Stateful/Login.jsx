import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginAttempt } from "../../Redux/User/userActions";

const Login = () => {
  const dispatch = useDispatch();
  const [userLoginInfo, setUserLoginInfo] = useState({
    username: "",
    password: "",
  });

  const isLogged = useSelector((state) => state.user.isLoggedIn);
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
        </form>
      </main>
    </div>
  );
};

export default Login;

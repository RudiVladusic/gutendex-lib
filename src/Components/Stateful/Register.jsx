import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { registerFailure, registerUser } from "../../Redux/User/userActions";
import ErrorModal from "../Presentational/ErrorModal";
import { useNavigate } from "react-router-dom";
import AccountModal from "../Presentational/AccountModal";
const Register = () => {
  const [userInformation, setUserInformation] = useState({
    username: "",
    password: "",
    password_repeat: "",
  });
  const isLogged = useSelector((state) => state.user.isLoggedIn);
  const dispatch = useDispatch();
  const isError = useSelector((state) => state.user.isRegisterError);
  const navigate = useNavigate();
  useEffect(() => {
    if (isLogged) {
      navigate("/");
    }
  });

  const handleRegisterSubmit = (e) => {
    e.preventDefault();

    if (userInformation.password !== userInformation.password_repeat) {
      dispatch(registerFailure(`Passwords do not match`));
    } else {
      dispatch(
        registerUser({
          username: userInformation.username,
          password: userInformation.password_repeat,
        })
      );
    }
  };

  return (
    <main className="main-content register">
      <div className="form-wrapper register-form">
        <form
          onSubmit={(e) => {
            handleRegisterSubmit(e);
          }}
        >
          <div className="form-group">
            {isError && <ErrorModal errorMessage={`Passwords do not match`} />}
          </div>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              name="username"
              id="username"
              required={true}
              value={userInformation.username}
              onChange={(e) => {
                setUserInformation({
                  ...userInformation,
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
              required={true}
              value={userInformation.password}
              onChange={(e) => {
                setUserInformation({
                  ...userInformation,
                  password: e.target.value,
                });
              }}
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Repeat password</label>
            <input
              type="password"
              name="password-repeat"
              id="password-repeat"
              required={true}
              value={userInformation.password_repeat}
              onChange={(e) => {
                setUserInformation({
                  ...userInformation,
                  password_repeat: e.target.value,
                });
              }}
            />
          </div>
          <div className="form-group">
            <button>Register</button>
          </div>

          <div className="form-group">
            <AccountModal
              link={`/login`}
              message={`Log in!`}
              modal={`Already have an account?`}
            />
          </div>
        </form>
      </div>
    </main>
  );
};

export default Register;

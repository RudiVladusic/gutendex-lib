import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { registerFailure, registerUser } from "../../Redux/User/userActions";
import ErrorModal from "../Presentational/ErrorModal";
import { useNavigate } from "react-router-dom";
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

  return (
    <main>
      <form
        onSubmit={(e) => {
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
        }}
      >
        {isError && <ErrorModal errorMessage={`Passwords do not match`} />}
        <label htmlFor="username">Username</label>
        <input
          type="text"
          name="username"
          id="username"
          onChange={(e) => {
            setUserInformation({
              ...userInformation,
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
            setUserInformation({
              ...userInformation,
              password: e.target.value,
            });
          }}
        />

        <label htmlFor="password">Repeat password</label>
        <input
          type="password-repeat"
          name="password-repeat"
          id="password-repeat"
          onChange={(e) => {
            setUserInformation({
              ...userInformation,
              password_repeat: e.target.value,
            });
          }}
        />
        <button>Register</button>
      </form>
    </main>
  );
};

export default Register;

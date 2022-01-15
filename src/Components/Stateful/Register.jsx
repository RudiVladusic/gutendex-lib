import { useDispatch } from "react-redux";
import { useState } from "react";
import { registerUser } from "../../Redux/User/userActions";
const Register = () => {
  const [userInformation, setUserInformation] = useState({
    username: "",
    password: "",
  });
  const dispatch = useDispatch();
  return (
    <main>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(registerUser(userInformation));
        }}
      >
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
        <button>Register</button>
      </form>
    </main>
  );
};

export default Register;

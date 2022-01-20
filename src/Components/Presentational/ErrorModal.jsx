import React from "react";
import { Link } from "react-router-dom";

const ErrorModal = ({ errorMessage, link }) => {
  return (
    <div className="error-modal">
      <p>{errorMessage}</p>
      {link && <Link to="/login">Login</Link>}
    </div>
  );
};

export default ErrorModal;

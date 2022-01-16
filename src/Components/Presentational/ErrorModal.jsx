import React from "react";

const ErrorModal = ({ errorMessage }) => {
  return (
    <div className="error-modal">
      <p>{errorMessage}</p>
    </div>
  );
};

export default ErrorModal;

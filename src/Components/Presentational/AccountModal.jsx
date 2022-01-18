import React from "react";
import { Link } from "react-router-dom";

const AccountModal = ({ modal, message, link }) => {
  return (
    <div className="account-modal">
      <p>
        {modal} <Link to={link}>{message}</Link>
      </p>
    </div>
  );
};

export default AccountModal;

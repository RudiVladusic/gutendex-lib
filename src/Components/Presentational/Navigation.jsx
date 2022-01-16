import SearchComponent from "../Stateful/SearchComponent";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../Redux/User/userActions";

const Navigation = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const isLogged = useSelector((state) => state.user.isLoggedIn);
  const userName = useSelector((state) => state.user.credentials.username);
  const dispatch = useDispatch();

  return (
    <nav>
      <div className="navbar-wrapper">
        <header className="navbar-banner">
          <h2>Gutendex-lib</h2>
        </header>
        <SearchComponent />
        <div className="desktop-navigation">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/favorites">Favorites</Link>
          <Link
            to={isLogged ? "/" : "/login"}
            onClick={() => {
              isLogged && dispatch(logout());
            }}
          >
            {isLogged ? `Logout (${userName})` : "Login"}
          </Link>
        </div>
        <div
          className={
            isMobileNavOpen
              ? "mobile-navigation mobile-nav-open"
              : "mobile-navigation"
          }
        >
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/favorites">Favorites</Link>
          <Link to="/login">Login</Link>
        </div>

        <div
          className="burger"
          onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}
        >
          <div className="burger__bar"></div>
          <div className="burger__bar"></div>
          <div className="burger__bar"></div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;

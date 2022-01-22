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

  const navigationLinkStrings = ["about", "favorites"];
  const bodyClasses = ["overflow-hidden", "background-darken"];

  const classListToggle = (classes) => {
    classes.forEach((classItem) => {
      return document.body.classList.toggle(classItem);
    });
  };

  const handleMobileNavBarOpen = () => {
    classListToggle(bodyClasses);

    if (isMobileNavOpen) {
      setIsMobileNavOpen(false);
    } else {
      setIsMobileNavOpen(true);
    }
  };

  const StaticNavbarComponent = () => {
    return navigationLinkStrings.map((item, index) => {
      return (
        <Link
          onClick={() => {
            handleMobileNavBarOpen();
          }}
          key={index}
          to={`/${item}`}
        >
          {item}
        </Link>
      );
    });
  };

  return (
    <nav>
      <div className="navbar-wrapper">
        <header className="navbar-banner">
          <Link to="/">Gutendex-lib</Link>
        </header>

        <SearchComponent />
        <div className="desktop-navigation">
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
          <StaticNavbarComponent />
          <Link
            to={isLogged ? "/" : "/login"}
            onClick={() => {
              isLogged && dispatch(logout());
              handleMobileNavBarOpen();
            }}
          >
            {isLogged ? `Logout (${userName})` : "Login"}
          </Link>
        </div>

        <div className="burger" onClick={() => handleMobileNavBarOpen()}>
          <div className="burger__bar"></div>
          <div className="burger__bar"></div>
          <div className="burger__bar"></div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;

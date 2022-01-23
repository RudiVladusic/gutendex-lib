import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer>
      <div className="footer-wrapper">
        <div className="footer-wrapper__info-stack">
          <p>Online book catalogue made with React JS</p>
          <p>
            Users can browse Project Gutenberg's book repository, save items to
            read later list and search the library.
          </p>
          <p>
            All data is rendered with{" "}
            <a href="https://gutendex.com/">Guttendex api</a>, JSON web API for
            Project Gutenberg ebook metadata.
          </p>
        </div>
        <div className="footer-wrapper__icon-stack">
          <div>
            <a href="https://github.com/RudiVladusic">
              Check out my other projects <FontAwesomeIcon icon={faGithub} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

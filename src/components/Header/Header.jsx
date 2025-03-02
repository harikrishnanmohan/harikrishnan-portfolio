import { useContext, useEffect, useRef, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./Header.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { HarikrishnanContext } from "../../context/harikrishnan-context";

const Header = () => {
  const { main } = useContext(HarikrishnanContext);
  const [showLinks, setShowLinks] = useState(false);
  const navigate = useNavigate();
  const [currentScrollY, setCurrentScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const menuRef = useRef(null);
  const iconRef = useRef(null);

  useEffect(() => {
    const controlHeader = () => {
      if (window.scrollY > currentScrollY && currentScrollY > 100)
        setIsVisible(false);
      else setIsVisible(true);
      setCurrentScrollY(window.scrollY);
    };

    window.addEventListener("scroll", controlHeader);
    return () => window.removeEventListener("scroll", controlHeader);
  }, [currentScrollY]);

  // Close menu on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        iconRef.current &&
        !iconRef.current.contains(event.target)
      ) {
        setShowLinks(false);
      }
    };

    const handleScroll = () => {
      setShowLinks(false);
    };

    if (showLinks) {
      document.addEventListener("mousedown", handleClickOutside);
      window.addEventListener("scroll", handleScroll);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [showLinks]);

  return (
    <div
      className={`header__container ${
        isVisible ? "header-visible" : "header-hidden"
      }`}
    >
      <header className="header">
        <h1 className="header__logo">
          <NavLink className="anchor header__logo_content" to="/">
            <div className="header__logo__short_name">
              {main?.shortNamePartOne}
              <div className="header__logo__long_name"></div>
            </div>
          </NavLink>
        </h1>

        <FontAwesomeIcon
          icon={faBars}
          className="header__links_icon"
          onClick={() => setShowLinks((prev) => !prev)}
          ref={iconRef}
        />

        <ul
          className={`header__links ${showLinks ? "inView" : "ofView"}`}
          ref={menuRef}
        >
          <li className="header__link">
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "is_active" : "non_active"
              }
              onClick={() => setShowLinks(false)}
            >
              ABOUT
            </NavLink>
          </li>
          <li className="header__link">
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                isActive ? "is_active" : "non_active"
              }
              onClick={() => setShowLinks(false)}
            >
              PROJECTS
            </NavLink>
          </li>
          <li className="header__link contact__me">
            <NavLink
              to="/contact"
              state={{ scrollToDiv: true }}
              className={({ isActive }) =>
                isActive ? "is_active" : "non_active"
              }
              onClick={() => setShowLinks(false)}
            >
              CONTACT ME
            </NavLink>
          </li>
        </ul>

        <div className="header__contact_me smallScreen">
          <a onClick={() => navigate("/contact")}>CONTACT ME</a>
        </div>
      </header>
    </div>
  );
};

export default Header;

import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import "./NavBar.css";
import Notification from "./Notification/Notification";
import { notifications } from "./Notification/notifcationsData";
import Profile from "./Profile/Profile";

const NavBar: React.FC = () => {
  const [showNotification, setShowNotification] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);
  const location = useLocation();

  const isLoginPage = location.pathname === "/login";
  const isRegisterPage = location.pathname === "/register";

  const handleNotificationClick = () => {
    setShowNotification(!showNotification);
    setShowProfile(false);
  };

  const handleProfileClick = () => {
    setShowProfile(!showProfile);
    setShowNotification(false);
  };

  const handleBurgerMenuClick = () => {
    setIsBurgerMenuOpen(!isBurgerMenuOpen);
    setShowNotification(false);
    setShowProfile(false);
  };

  const navbarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleNotificationComponentClick = (event: MouseEvent) => {
      // Close the notification if clicked outside of it
      if (
        showNotification &&
        !navbarRef.current?.contains(event.target as Node) &&
        !event.defaultPrevented
      ) {
        setShowNotification(false);
      }
    };

    document.addEventListener("click", handleNotificationComponentClick);

    return () => {
      document.removeEventListener("click", handleNotificationComponentClick);
    };
  }, [showNotification]);

  const updateBurgerMenuState = () => {
    // Update the burger menu state based on the window size
    setIsBurgerMenuOpen(window.innerWidth <= 767); // Adjust the breakpoint as needed
  };

  useEffect(() => {
    // Initial setup
    updateBurgerMenuState();

    // Event listener for window resize
    window.addEventListener("resize", updateBurgerMenuState);

    return () => {
      // Cleanup: remove the event listener
      window.removeEventListener("resize", updateBurgerMenuState);
    };
  }, []);
  
  return (
    <nav className={`navbar-expand-lg ${isBurgerMenuOpen ? "mobile-menu-open" : ""}`} ref={navbarRef}>
      <div className="navbar-dark">
        {!isBurgerMenuOpen?
        <Link to="/">
          <img
            className="navbar-brand navbar-logo"
            src={require("../../images/logo.jpg")}
            alt="Time Nest Logo"
          ></img>
        </Link> : <></>
        }
        {!isLoginPage && !isRegisterPage && (
          <button
            className={`navbar-toggler custom-toggler ${isBurgerMenuOpen ? "open" : ""}`}
            type="button"
            onClick={handleBurgerMenuClick}
          >
            {!isBurgerMenuOpen? 
              <span className="navbar-toggler-icon my-toggler"></span> :
              <div className="x-button-container">
                <span className="x-button">x</span>
              </div>
            }
          </button>
        )}
        {!isLoginPage && !isRegisterPage && (
          <div className={`navbar-collapse collapse ${isBurgerMenuOpen ? "show" : ""}`}>
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link to="/" className="nav-link" onClick={handleBurgerMenuClick}>
                  Kalender
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/"
                  className="nav-link"
                  onClick={() => {
                    handleNotificationClick();
                  }}
                >
                  Benachrichtigung
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/chat" className="nav-link" onClick={handleBurgerMenuClick}>
                  Chats
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/"
                  className="nav-link"
                  onClick={() => {
                    handleProfileClick();
                  }}
                >
                  Profil
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
      {showNotification && <Notification notifications={notifications} />}
      {showProfile && <Profile handleLogout={handleBurgerMenuClick} />}
    </nav>
  );
};

export default NavBar;

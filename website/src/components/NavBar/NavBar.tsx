import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import "./NavBar.css";
import Notification from "./Notification/Notification";
import { notifications } from "./Notification/notifcationsData";
import Profile from "./Profile/Profile";

const NavBar: React.FC = () => {
  const [showNotification, setShowNotification] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
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

  const handleLogout = () => {
    // Close the profile component
    setShowProfile(false);
  };

  // Add a ref to the navbar element
  const navbarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleDocumentClick = (event: MouseEvent) => {
      // Check if the click occurred outside the navbar, notification, and profile elements
      if (
        navbarRef.current &&
        !navbarRef.current.contains(event.target as Node) &&
        !event.defaultPrevented
      ) {
        setShowNotification(false);
        setShowProfile(false);
      }
    };

    // Add click event listener to the document
    document.addEventListener("click", handleDocumentClick);

    // Remove the event listener when the component unmounts
    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, []);

  return (
    <nav className="navbar-expand-lg" ref={navbarRef}>
      <div className="navbar-dark">
        <Link to="/">
          <img
            className="navbar-brand navbar-logo"
            src={require("../../images/logo.jpg")}
            alt="Time Nest Logo"
          ></img>
        </Link>
        {!isLoginPage && !isRegisterPage && (
          <button
            className="navbar-toggler custom-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon my-toggler"></span>
          </button>
        )}
        {!isLoginPage && !isRegisterPage && (
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  Kalender
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/"
                  className="nav-link"
                  onClick={handleNotificationClick}
                >
                  Benachrichtigung
                </Link>
              </li>
              <li className="nav-item">
                <Link to="#chat" className="nav-link">
                  Chats
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/" className="nav-link" onClick={handleProfileClick}>
                  Profil
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
      {showNotification && <Notification notifications={notifications} />}
      {showProfile && <Profile handleLogout={handleLogout} />}
    </nav>
  );
};

export default NavBar;

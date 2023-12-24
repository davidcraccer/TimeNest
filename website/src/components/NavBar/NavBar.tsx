import React, { useState } from "react";
import "./NavBar.css";
import Notification from "./Notification/Notification"; // Import your Notification component

const NavBar: React.FC = () => {
  const [showNotification, setShowNotification] = useState(false);

  const handleNotificationClick = () => {
    // Toggle the visibility of the notification
    setShowNotification(!showNotification);
  };

  const notifications = [
    {
      user: "David",
      objective:
        "allowed you to have vacation. Have a great vacation!",
    },
    {
      user: "Lemon",
      objective:
        "declined your vacation. Check the app for more details and consider resubmitting.",
    },
    {
      user: "HR Department",
      objective:
        "notified you about a new employee, John Doe, who has joined the company. Please welcome him!",
    },
    {
      user: "Your Manager",
      objective:
        "approved your overtime hours. These hours will be added to your compensation.",
    },
  ];
  

  return (
    <nav className="navbar-expand-lg">
      <div className="navbar-dark">
        <a href="/">
          <img
            className="navbar-brand navbar-logo"
            src={require("../../images/logo.jpg")}
            alt="Time Nest Logo"
          ></img>
        </a>
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
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="#de">
                Kalender
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="#de"
                onClick={handleNotificationClick}
              >
                Benachrichtigung
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#de">
                Chats
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#de">
                Profil
              </a>
            </li>
          </ul>
        </div>
      </div>
      {showNotification && <Notification notifications={notifications} />}
    </nav>
  );
};

export default NavBar;

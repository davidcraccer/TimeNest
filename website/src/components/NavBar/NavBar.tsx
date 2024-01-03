import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./NavBar.css";
import Notification from "./Notification/Notification";
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

  const notifications = [
    {
      user: "David",
      objective:
        "hat Ihnen erlaubt, Urlaub zu nehmen. Haben Sie einen schönen Urlaub!",
    },
    {
      user: "Lemon",
      objective:
        "hat Ihren Urlaubsantrag abgelehnt. Überprüfen Sie die App für weitere Details und überlegen Sie eine erneute Einreichung.",
    },
    {
      user: "Ihr Manager",
      objective:
        "hat Ihre Überstunden genehmigt. Diese Stunden werden Ihrem Gehalt hinzugefügt.",
    },
    {
      user: "Mitarbeiter",
      objective:
        "Sie haben erfolgreich Ihre Krankmeldung gemeldet. Eine E-Mail wurde automatisch generiert und an Ihre Krankenversicherung gesendet zwecks weiterer Bearbeitung.",
    },
    {
      user: "HR",
      objective:
        "Ein Mitarbeiter hat sich krank gemeldet. Bitte beachten Sie dies für HR-Aufzeichnungen und Abrechnungszwecke.",
    },
    {
      user: "Vorgesetzter",
      objective:
        "Ein Mitarbeiter in Ihrem Team hat sich krank gemeldet. Bitte beachten Sie mögliche unmittelbare arbeitsbezogene Auswirkungen und planen Sie notwendige Anpassungen.",
    },
    {
      user: "Vorgesetzter",
      objective:
        "Einer Ihrer Teammitglieder hat Überstunden angesammelt. Bitte überprüfen Sie dies und nehmen Sie bei Bedarf Anpassungen vor.",
    },
    {
      user: "HR",
      objective:
        "Ein Mitarbeiter ist krankgeschrieben. Bitte beachten Sie die mögliche Lohnfortzahlung während dieser Zeit für die Lohnabrechnung.",
    },
    {
      user: "Personalabteilung",
      objective:
        "hat Sie über einen neuen Mitarbeiter, John Doe, informiert, der dem Unternehmen beigetreten ist. Bitte heißen Sie ihn willkommen!",
    },
  ];

  return (
    <nav className="navbar-expand-lg">
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
                <Link
                  to="/"
                  className="nav-link"
                  onClick={handleProfileClick}
                >
                  Profil
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
      {showNotification && <Notification notifications={notifications} />}
      {showProfile && (
        <Profile
          profilePicture="https://i.pinimg.com/originals/57/00/c0/5700c04197ee9a4372a35ef16eb78f4e.png"
          user="David"
          roleName="Arbeiter"
        />
      )}
    </nav>
  );
};

export default NavBar;
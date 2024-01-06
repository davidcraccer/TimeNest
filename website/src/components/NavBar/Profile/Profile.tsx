import React from "react";
import { Link } from "react-router-dom";
import "./Profile.css";
import { useAuth } from "../../../utils/authContext";

const Profile: React.FC = () => {
  const { user } = useAuth();
  const defaultProfilePicture =
    "https://i.pinimg.com/originals/57/00/c0/5700c04197ee9a4372a35ef16eb78f4e.png";

  return (
    <div className="profile-container">
      <div className="profile-picture">
        <img src={defaultProfilePicture} alt="Profile" />
      </div>
      <div className="profile-details">
        <p className="user-name">{user?.fullName}</p>
        <p className="role-name">{user?.role}</p>
        <div className="a-container">
          <Link to="/profile" className="edit-profile">
            Edit Profile
          </Link>
        </div>
        <div className="a-container">
          <Link to="/einstellungen">Einstellungen</Link>
        </div>
        <div className="a-container">
          <Link to="/login">Abmelden</Link>
        </div>
      </div>
    </div>
  );
};

export default Profile;

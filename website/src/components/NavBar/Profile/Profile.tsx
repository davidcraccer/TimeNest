import React from "react";
import { Link } from "react-router-dom";
import "./Profile.css";

interface ProfileProps {
  profilePicture: string;
  user: string;
  roleName: string;
}

const Profile: React.FC<ProfileProps> = ({
  profilePicture,
  user,
  roleName,
}) => {
  return (
    <div className="profile-container">
      <div className="profile-picture">
        <img src={profilePicture} alt="Profile" />
      </div>
      <div className="profile-details">
        <p className="user-name">{user}</p>
        <p className="role-name">{roleName}</p>
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

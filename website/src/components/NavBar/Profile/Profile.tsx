import React from "react";
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
          <a href="/profile" className="edit-profile">
            Edit Profile
          </a>
        </div>
        <div className="a-container">
          <a href="/einstellungen">Einstellungen</a>
        </div>
        <div className="a-container">
          <a href="/Login">Abmelden</a>
        </div>
      </div>
    </div>
  );
};

export default Profile;

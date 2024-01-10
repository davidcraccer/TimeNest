import React from "react";
import { Link } from "react-router-dom";
import "./Profile.css";
import { useAuth } from "../../../utils/authContext";

interface ProfileProps {
  handleLogout: () => void;
}

const Profile: React.FC<ProfileProps> = ({ handleLogout }) => {
  const { user } = useAuth();
  const defaultProfilePicture =
    "https://i.pinimg.com/originals/57/00/c0/5700c04197ee9a4372a35ef16eb78f4e.png";

  return (
    <div className="profile-container">
        <img className="profile-picture ms-2" src={defaultProfilePicture} alt="Profile" />
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
          <Link to="/login" onClick={handleLogout}>
            Abmelden
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Profile;

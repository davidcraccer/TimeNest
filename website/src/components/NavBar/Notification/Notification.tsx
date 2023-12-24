import React from "react";
import "./Notification.css";

interface NotificationProps {
  notifications: { user: string; objective: string }[];
}

const Notification: React.FC<NotificationProps> = ({ notifications }) => {
  return (
    <div className="notification-container">
      <h6>Benachrichtigungen</h6>
      {notifications.map((notification, index) => (
        <div className="notification-item" key={index}>
          <p>
            <strong>{notification.user}:</strong> {notification.objective}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Notification;

import React from "react";
import "./Notification.css";

interface NotificationProps {
  notifications: {
    sender: string;
    receiver: string[];
    message: string;
  }[];
}

const Notification: React.FC<NotificationProps> = ({ notifications }) => {
  return (
    <div className="notification-container">
      <h6>Benachrichtigungen</h6>
      {notifications.map((notification, index) => (
        <div className="notification-item" key={index}>
          <p>
            <strong>{notification.sender}:</strong> {notification.message}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Notification;

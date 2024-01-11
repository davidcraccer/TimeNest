import React from "react";
import "./Notification.css";
import { useAuth } from "../../../utils/authContext";

interface NotificationProps {
  notifications: {
    sender: string;
    receiver: string[];
    message: string;
  }[];
}

const Notification: React.FC<NotificationProps> = ({ notifications }) => {
  const { user } = useAuth();
  const role = user?.role;

  const filteredNotifications = notifications.filter((notification) =>
    notification.receiver.includes(role!)
  );

  return (
    <div className="notification-container">
      <h6>Benachrichtigungen</h6>
      {filteredNotifications.map((notification, index) => (
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

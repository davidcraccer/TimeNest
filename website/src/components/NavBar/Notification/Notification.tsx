import React from "react";
import "./Notification.css";
import { useAuth } from "../../../utils/authContext";
import Button from "react-bootstrap/Button";

interface NotificationProps {
  notifications: {
    sender: string;
    receiver: string[];
    thema: string;
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
          {(notification.thema === "Überstundenanfrage" ||
            notification.thema === "Urlaubsanfrage") &&
            ["Vorgesetzte", "Niederlassungsleiter"].includes(role!) && (
              <div className="d-flex mt-2 gap-2">
                <Button variant="success" size="sm">
                  Akzeptieren
                </Button>
                <Button variant="danger" size="sm">
                  Ablehnen
                </Button>
              </div>
            )}
        </div>
      ))}
    </div>
  );
};

export default Notification;

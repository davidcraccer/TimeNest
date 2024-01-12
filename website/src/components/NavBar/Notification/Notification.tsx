import React, { useState } from "react";
import "./Notification.css";
import { useAuth } from "../../../utils/authContext";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

interface NotificationProps {
  notifications: {
    sender: string;
    receiver: string[];
    thema: string;
    message: string;
    details: string;
  }[];
}

const Notification: React.FC<NotificationProps> = ({ notifications }) => {
  const { user } = useAuth();
  const role = user?.role;

  const [showModal, setShowModal] = useState(false);
  const [selectedNotification, setSelectedNotification] = useState<{
    sender: string;
    details: string;
  } | null>(null);

  const handleMoreInfoClick = (notification: {
    sender: string;
    details: string;
  }) => {
    setSelectedNotification(notification);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

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
          <p className="more-info-text btn-link"
              onClick={() => handleMoreInfoClick(notification)}
            >
              Mehr Informationen
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

      <Modal show={showModal} onHide={handleCloseModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>Mehr Informationen</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedNotification && (
            <>
              <p>
                <strong>{selectedNotification.sender}:</strong>{" "}
                {selectedNotification.details}
              </p>
            </>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Schließen
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Notification;

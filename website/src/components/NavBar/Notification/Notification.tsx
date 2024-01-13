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

interface NotificationStatus {
  index: number | null;
  message: string | null;
}

const Notification: React.FC<NotificationProps> = ({ notifications }) => {
  const { user } = useAuth();
  const role = user?.role;

  const [showModal, setShowModal] = useState(false);
  const [selectedNotification, setSelectedNotification] = useState<{
    sender: string;
    details: string;
  } | null>(null);

  const [notificationStatusList, setNotificationStatusList] = useState<NotificationStatus[]>(
    Array(notifications.length).fill({ index: null, message: null })
  );

  const [visibilityList, setVisibilityList] = useState<boolean[]>(
    Array(notifications.length).fill(true)
  );

  const handleMoreInfoClick = (notification: {
    sender: string;
    thema: string;
    details: string;
  }) => {
    setSelectedNotification(notification);
    setShowModal(true);
  };

  const handleAccept = (thema: string, index: number, event: React.MouseEvent) => {
    event.stopPropagation();
    const updatedStatusList = [...notificationStatusList];
    updatedStatusList[index] = { index, message: `${thema} wurde akzeptiert` };
    setNotificationStatusList(updatedStatusList);

    // Hide the notification content when the button is clicked
    const updatedVisibilityList = [...visibilityList];
    updatedVisibilityList[index] = false;
    setVisibilityList(updatedVisibilityList);
  };

  const handleDecline = (thema: string, index: number, event: React.MouseEvent) => {
    event.stopPropagation();
    const updatedStatusList = [...notificationStatusList];
    updatedStatusList[index] = { index, message: `${thema} wurde abgelehnt` };
    setNotificationStatusList(updatedStatusList);

    // Hide the notification content when the button is clicked
    const updatedVisibilityList = [...visibilityList];
    updatedVisibilityList[index] = false;
    setVisibilityList(updatedVisibilityList);
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
          {/* Check visibility status before rendering the content */}
          {visibilityList[index] && (
            <div>
              <p>
                <strong>{notification.sender}:</strong> {notification.message}
              </p>
              <p
                className="more-info-text btn-link"
                onClick={() => handleMoreInfoClick(notification)}
              >
                Mehr Informationen
              </p>
              {(notification.thema === "Überstundenanfrage" ||
                notification.thema === "Urlaubsanfrage") &&
                ["Vorgesetzte", "Niederlassungsleiter"].includes(role!) && (
                  <div className="d-flex mt-2 gap-2">
                    <Button
                      variant="success"
                      size="sm"
                      onClick={(event) => handleAccept(notification.thema, index, event)}
                    >
                      Akzeptieren
                    </Button>
                    <Button
                      variant="danger"
                      size="sm"
                      onClick={(event) => handleDecline(notification.thema, index, event)}
                    >
                      Ablehnen
                    </Button>
                  </div>
                )}
            </div>
          )}

          {/* Display status message within the specific notification */}
          {notificationStatusList[index].index !== null &&
            notificationStatusList[index].index === index && (
              <p>{notificationStatusList[index].message}</p>
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

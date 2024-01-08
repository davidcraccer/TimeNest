import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

interface VacationModalProps {
  show: boolean;
  onHide: () => void;
}

const VacationModal: React.FC<VacationModalProps> = ({ show, onHide }) => {
  const [startDate, setStartDate] = useState<string>("");
  const [endDate, setEndDate] = useState<string>("");

  const handleSave = () => {
    // Add logic to handle saving vacation dates
    // You can use the startDate and endDate values
    // For example, you can pass them to a parent component or perform an API call
    console.log("Start Date:", startDate);
    console.log("End Date:", endDate);
    onHide(); // Close the modal
  };

  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>Vacation Days</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="startDate">
            <Form.Label>Start Date:</Form.Label>
            <Form.Control
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="endDate">
            <Form.Label>End Date:</Form.Label>
            <Form.Control
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Close
        </Button>
        <Button variant="primary" onClick={handleSave}>
          Save
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default VacationModal;
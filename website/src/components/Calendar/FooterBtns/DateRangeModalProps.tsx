import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

interface DateRangeModalProps {
  show: boolean;
  onHide: () => void;
  onSave: (startDate: string | null, endDate: string | null) => void;
  title: string;
}

const isValidDate = (dateString: string): boolean => {
  const regex = /^\d{2}\.\d{2}\.\d{4}$/;
  return regex.test(dateString);
};

const DateRangeModal: React.FC<DateRangeModalProps> = ({ show, onHide, onSave, title }) => {
  const [startDate, setStartDate] = useState<string>("");
  const [endDate, setEndDate] = useState<string>("");
  const [startDateError, setStartDateError] = useState<string>("");
  const [endDateError, setEndDateError] = useState<string>("");

  const handleSave = () => {
    let hasError = false;
  
    if (startDate.trim() === "") {
      onSave(null, null);
      onHide();
      return;
    }
  
    if (!isValidDate(startDate)) {
      setStartDateError("Invalid start date format (dd.mm.yyyy)");
      hasError = true;
    } else {
      setStartDateError("");
    }
  
    if (!isValidDate(endDate)) {
      setEndDateError("Invalid end date format (dd.mm.yyyy)");
      hasError = true;
    } else {
      setEndDateError("");
    }
  
    if (!hasError) {
      const jsStartDate = new Date(startDate.split('.').reverse().join('-'));
      const jsEndDate = new Date(endDate.split('.').reverse().join('-'));
      onSave(jsStartDate.toISOString().split("T")[0], jsEndDate.toISOString().split("T")[0]);
  
      onHide();
    }
  };
  

  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="startDate">
            <Form.Label className="mt-2">Startdatum:</Form.Label>
            <Form.Control
              type="text"
              placeholder="dd.mm.yyyy"
              value={startDate}
              onChange={(e) => {
                setStartDate(e.target.value);
                setStartDateError("");
              }}
            />
            <Form.Text className="text-danger">{startDateError}</Form.Text>
          </Form.Group>
          <Form.Group controlId="endDate">
            <Form.Label className="mt-2">Enddatum:</Form.Label>
            <Form.Control
              type="text"
              placeholder="dd.mm.yyyy"
              value={endDate}
              onChange={(e) => {
                setEndDate(e.target.value);
                setEndDateError("");
              }}
            />
            <Form.Text className="text-danger">{endDateError}</Form.Text>
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

export default DateRangeModal;

import React, { useState, useEffect } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import "./Popup.css";

interface PopupProps {
  selectedDate: Date | null;
  onSave: (times: { startTime: string; endTime: string }[]) => void;
  onSaveTotalHours: (totalHours: number) => void;
  existingTimes: { startTime: string; endTime: string }[];
  onClose: () => void;
}

const Popup: React.FC<PopupProps> = ({
  selectedDate,
  onSave,
  onSaveTotalHours,
  existingTimes,
  onClose,
}) => {
  // State to track the total hours calculated from entered times
  const [totalHours, setTotalHours] = useState<number | null>(null);

  // State to manage the array of entered times
  const [timesState, setTimes] = useState<
    { startTime: string; endTime: string }[]
  >(
    // Init with existing times or a single set of empty values
    existingTimes.length > 0 ? existingTimes : [{ startTime: "", endTime: "" }]
  );

  // Fn to add a new set of empty time fields
  const addTimeField = () => {
    setTimes((prevTimes) => [...prevTimes, { startTime: "", endTime: "" }]);
  };

  // Fn to handle changes in the start or end time fields
  const handleTimeChange = (
    index: number,
    field: "startTime" | "endTime",
    value: string
  ) => {
    setTimes((prevTimes) => {
      // Create a new array to avoid mutating the state directly
      const newTimes = [...prevTimes];
      newTimes[index][field] = value; // Update the specific time field
      return newTimes;
    });
  };

  // Fn to handle saving entered times and close the Popup
  const handleSave = () => {
    onSave(timesState);
    onSaveTotalHours(totalHours || 0);
    onClose();
  };

  // Effect to recalculate total hours whenever timesState changes
  useEffect(() => {
    const total = timesState.reduce((acc, time) => {
      if (time.startTime && time.endTime) {
        // Convert start and end times to Date objects
        const start = new Date(`1970-01-01T${time.startTime}`);
        const end = new Date(`1970-01-01T${time.endTime}`);
        // Calculate hours and add to the accumulator
        const hours = (end.getTime() - start.getTime()) / (1000 * 60 * 60);
        return acc + hours;
      }
      return acc;
    }, 0);

    setTotalHours(total);
  }, [timesState]);

  return (
    <Modal show={true} onHide={onClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Arbeitszeit erfassen</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Datum: {selectedDate ? selectedDate.toDateString() : ""}</p>

        {timesState.map((time, index) => (
          <div key={index} className="mb-3">
            {index === 0 && (
              <label style={{ marginRight: "8px" }}>Arbeitszeit: </label>
            )}

            <div className="d-flex">
              <div className="mr-2">
                <Form.Group controlId={`startTime-${index}`}>
                  <Form.Control
                    type="time"
                    value={time.startTime}
                    onChange={(e) =>
                      handleTimeChange(index, "startTime", e.target.value)
                    }
                  />
                </Form.Group>
              </div>

              <div className="mr-2">
                <Form.Group controlId={`endTime-${index}`}>
                  <Form.Control
                    type="time"
                    value={time.endTime}
                    onChange={(e) =>
                      handleTimeChange(index, "endTime", e.target.value)
                    }
                  />
                </Form.Group>
              </div>
            {index === timesState.length - 1 && (
              <div className="d-flex">
                <Button variant="link" onClick={addTimeField}>
                  Hinzufügen
                </Button>
              </div>
            )}
            </div>

          </div>
        ))}

        {totalHours !== null && <p>Gesamt: {totalHours.toFixed(2)}h</p>}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={handleSave}>
          Speichern
        </Button>
        <Button variant="secondary" onClick={onClose}>
          Schließen
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default Popup;

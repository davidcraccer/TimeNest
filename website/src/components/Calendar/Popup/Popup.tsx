import React, { useState, useEffect } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import "./Popup.css";

interface PopupProps {
  selectedDate: Date | null;
  onSaveWorkTime: (workTime: { startTime: string; endTime: string }[]) => void;
  onSaveWorkTimeTotalHours: (totalHours: number) => void;
  onSaveOvertime: (overtime: { startTime: string; endTime: string }[]) => void;
  onSaveOvertimeTotalHours: (totalHours: number) => void;
  existingWorkTime: { startTime: string; endTime: string }[];
  existingOvertime: { startTime: string; endTime: string }[];
  onClose: () => void;
}

const Popup: React.FC<PopupProps> = ({
  selectedDate,
  onSaveWorkTime,
  onSaveWorkTimeTotalHours,
  onSaveOvertime,
  onSaveOvertimeTotalHours,
  existingWorkTime,
  existingOvertime,
  onClose,
}) => {
  const [displayWorkTime, setDisplayWorkTime] = useState<boolean>(false);
  const [workTime, setWorkTime] = useState<{ startTime: string; endTime: string }[]>(
    existingWorkTime.length > 0
      ? existingWorkTime
      : [{ startTime: "", endTime: "" }]
  );

  const [displayOvertime, setDisplayOvertime] = useState<boolean>(false);
  const [overtime, setOvertime] = useState<{ startTime: string; endTime: string }[]>(
    existingOvertime.length > 0
      ? existingOvertime
      : [{ startTime: "", endTime: "" }]
  );

  const addTimeField = (isWorkTime: boolean) => {
    if (isWorkTime) {
      setWorkTime((prevWorkTime) => [
        ...prevWorkTime,
        { startTime: "", endTime: "" },
      ]);
    } else {
      setOvertime((prevOvertime) => [
        ...prevOvertime,
        { startTime: "", endTime: "" },
      ]);
    }
  };

  const handleTimeChange = (
    index: number,
    field: "startTime" | "endTime",
    value: string,
    isWorkTime: boolean
  ) => {
    if (isWorkTime) {
      setWorkTime((prevWorkTime) => {
        const newWorkTime = [...prevWorkTime];
        newWorkTime[index] = {
          ...newWorkTime[index],
          [field]: value,
        };
        return newWorkTime;
      });
    } else {
      setOvertime((prevOvertime) => {
        const newOvertime = [...prevOvertime];
        newOvertime[index] = {
          ...newOvertime[index],
          [field]: value,
        };
        return newOvertime;
      });
    }
  };  

  const addTotalHours = () => {
    const newWorkTimeTotalHours = calculateTotalHours(workTime);
    const newOvertimeTotalHours = calculateTotalHours(overtime);
    onSaveWorkTimeTotalHours(newWorkTimeTotalHours);
    onSaveOvertimeTotalHours(newOvertimeTotalHours);
  }

  const substractTotalHours = () => {
    const previousWorkTimeTotalHours = calculateTotalHours(existingWorkTime);
    const previousOvertimeTotalHours = calculateTotalHours(existingOvertime);
    onSaveWorkTimeTotalHours(-previousWorkTimeTotalHours); 
    onSaveOvertimeTotalHours(-previousOvertimeTotalHours);
  }

  const handleSave = () => {
    // Calculate and subtract previous total hours before saving new ones
    substractTotalHours()
  
    // Save new values
    onSaveWorkTime(workTime);
    onSaveOvertime(overtime);
    
    addTotalHours()
    onClose();
  };
  
  useEffect(() => {
    // Check if workTime has at least one valid entry
    const hasValidWorkTime = workTime.some(
      (time) => time.startTime && time.endTime
    );
    const hasValidOvertime = overtime.some(
      (time) => time.startTime && time.endTime
    );
    setDisplayWorkTime(hasValidWorkTime);
    setDisplayOvertime(hasValidOvertime);
  }, [workTime, overtime]);

  const calculateTotalHours = (times: { startTime: string; endTime: string }[]) => {
    return times.reduce((acc, time) => {
      if (time.startTime && time.endTime) {
        const start = new Date(`1970-01-01T${time.startTime}`);
        const end = new Date(`1970-01-01T${time.endTime}`);
        const hours = (end.getTime() - start.getTime()) / (1000 * 60 * 60);
        return acc + hours;
      }
      return acc;
    }, 0);
  };

  return (
    <Modal show={true} onHide={onClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Arbeitszeit Erfassung</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Datum: {selectedDate ? selectedDate.toDateString() : ""}</p>

        <label>Arbeitszeit: </label>
        <div className="d-flex flex-wrap">
          {workTime.map((time, index) => (
            <div key={index} className="d-flex me-2">
              <div className="mr-2">
                <Form.Group controlId={`workTimeStartTime-${index}`}>
                  <Form.Control
                    type="time"
                    value={time.startTime}
                    onChange={(e) =>
                      handleTimeChange(index, "startTime", e.target.value, true)
                    }
                  />
                </Form.Group>
              </div>

              <div className="mr-2">
                <Form.Group controlId={`workTimeEndTime-${index}`}>
                  <Form.Control
                    type="time"
                    value={time.endTime}
                    onChange={(e) =>
                      handleTimeChange(index, "endTime", e.target.value, true)
                    }
                  />
                </Form.Group>
              </div>

              {index === workTime.length - 1 && (
                <div className="d-flex align-items-center gap-1 ms-2 ">
                  <button
                    className="circle-button"
                    onClick={() => addTimeField(true)}
                  >
                    +
                  </button>
                  {index > 0 && (
                    <button
                      className="circle-button"
                      onClick={() => setWorkTime(workTime.slice(0, index))}
                    >
                      -
                    </button>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>

        {displayWorkTime ? (
          <p>Arbeitszeit: {calculateTotalHours(workTime).toFixed(2)}h</p>
        ) : null}

        <label className="mt-2">Überstunden: </label>
        <div className="d-flex flex-wrap">
          {overtime.map((time, index) => (
            <div key={index} className="d-flex me-2">
              <div className="mr-2">
                <Form.Group controlId={`overtimeStartTime-${index}`}>
                  <Form.Control
                    type="time"
                    value={time.startTime}
                    onChange={(e) =>
                      handleTimeChange(
                        index,
                        "startTime",
                        e.target.value,
                        false
                      )
                    }
                  />
                </Form.Group>
              </div>

              <div className="mr-2">
                <Form.Group controlId={`overtimeEndTime-${index}`}>
                  <Form.Control
                    type="time"
                    value={time.endTime}
                    onChange={(e) =>
                      handleTimeChange(index, "endTime", e.target.value, false)
                    }
                  />
                </Form.Group>
              </div>

              {index === overtime.length - 1 && (
                <div className="d-flex align-items-center gap-1 ms-2">
                  <button
                    className="circle-button"
                    onClick={() => addTimeField(false)}
                  >
                    +
                  </button>
                  {index > 0 && (
                    <button
                      className="circle-button"
                      onClick={() => setOvertime(overtime.slice(0, index))}
                    >
                      -
                    </button>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
        {displayOvertime ? (
          <p>Überstunden: {calculateTotalHours(overtime).toFixed(2)}h</p>
        ) : null}
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

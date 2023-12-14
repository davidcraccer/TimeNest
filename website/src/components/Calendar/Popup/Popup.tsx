import React, { useState, useEffect } from "react";
import "./Popup.css";

interface PopupProps {
  selectedDate: Date | null;
  onSave: (times: { startTime: string; endTime: string }[]) => void;
  existingTimes: { startTime: string; endTime: string }[];
  onClose: () => void;
}

const Popup: React.FC<PopupProps> = ({ selectedDate, onSave, existingTimes, onClose }) => {
  const [totalHours, setTotalHours] = useState<number | null>(null);
  const [timesState, setTimes] = useState<{ startTime: string; endTime: string }[]>(
    existingTimes.length > 0 ? existingTimes : [{ startTime: "", endTime: "" }]
  );

  const addTimeField = () => {
    setTimes((prevTimes) => [...prevTimes, { startTime: "", endTime: "" }]);
  };

  const handleTimeChange = (
    index: number,
    field: "startTime" | "endTime",
    value: string
  ) => {
    setTimes((prevTimes) => {
      const newTimes = [...prevTimes];
      newTimes[index][field] = value;
      return newTimes;
    });
  };

  const handleSave = () => {
    onSave(timesState);
    onClose();
  };

  useEffect(() => {
    const total = timesState.reduce((acc, time) => {
      if (time.startTime && time.endTime) {
        const start = new Date(`1970-01-01T${time.startTime}`);
        const end = new Date(`1970-01-01T${time.endTime}`);
        const hours = (end.getTime() - start.getTime()) / (1000 * 60 * 60);
        return acc + hours;
      }
      return acc;
    }, 0);

    setTotalHours(total);
  }, [timesState]);

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <p>Datum: {selectedDate ? selectedDate.toDateString() : ""}</p>

        {timesState.map((time, index) => (
          <div key={index}>
            {index === 0 && <label style={{ marginRight: "8px" }}>Arbeitszeit: </label>}
            <input
              type="time"
              value={time.startTime}
              onChange={(e) =>
                handleTimeChange(index, "startTime", e.target.value)
              }
            />

            <span> - </span>

            <input
              type="time"
              value={time.endTime}
              onChange={(e) => handleTimeChange(index, "endTime", e.target.value)}
            />

            {index === timesState.length - 1 && (
              <button onClick={addTimeField}>+</button>
            )}
          </div>
        ))}

        {totalHours !== null && <p>Gesamt: {totalHours.toFixed(2)}h</p>}

        <div>
          <button onClick={handleSave}>Speichern</button>
          <button onClick={onClose}>Schließen</button>
        </div>
      </div>
    </div>
  );
};

export default Popup;
// Popup.tsx
import React, { useState, useEffect } from "react";
import "./Popup.css"; 

interface PopupProps {
  selectedDate: Date | null;
  onClose: () => void;
}

const formatDate = (date: Date): string => {
  const day = date.getDate();
  const month = date.getMonth() + 1; // Months are zero-based
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
};

const Popup: React.FC<PopupProps> = ({ selectedDate, onClose }) => {
  const [times, setTimes] = useState<{ startTime: string; endTime: string }[]>([
    { startTime: "", endTime: "" },
  ]);
  const [totalHours, setTotalHours] = useState<number | null>(null);

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

  useEffect(() => {
    // Calculate total hours whenever input values change
    const total = times.reduce((acc, time) => {
      if (time.startTime && time.endTime) {
        const start = new Date(`1970-01-01T${time.startTime}`);
        const end = new Date(`1970-01-01T${time.endTime}`);
        const hours = (end.getTime() - start.getTime()) / (1000 * 60 * 60);
        return acc + hours;
      }
      return acc;
    }, 0);

    setTotalHours(total);
  }, [times]);

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <p>Datum: {selectedDate ? formatDate(selectedDate) : ""}</p>

        {times.map((time, index) => (
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

            {index === times.length - 1 && (
              <button onClick={addTimeField}>+</button>
            )}
          </div>
        ))}

        {totalHours !== null && <p>Gesamt: {totalHours.toFixed(2)}h</p>}

        <button onClick={onClose}>Schließen</button>
      </div>
    </div>
  );
};

export default Popup;

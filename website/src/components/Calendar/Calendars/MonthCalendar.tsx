import React, { useState } from "react";
import { generateCalendarRows } from "../../../utils/calendarUtils";
import Popup from "../Popup/Popup";
import "./MonthCalendar.css";


interface MonthCalendarProps {
  currentMonth: number;
  currentYear: number;
}

const MonthCalendar: React.FC<MonthCalendarProps> = ({
  currentMonth,
  currentYear,
}) => {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [times, setTimes] = useState<{ startTime: string; endTime: string }[]>([
    { startTime: "", endTime: "" },
  ]);

  const calendarRows = generateCalendarRows(currentYear, currentMonth);

  const handleDayClick = (day: number) => {
    const date = new Date(currentYear, currentMonth, day);
    setSelectedDate(date);
    setShowPopup(true);
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

  const handleClosePopup = () => {
    setShowPopup(false);
    // You can handle the saving of times state here if needed
  };

  return (
    <div>
      <table className="table table-month">
        <thead>
          <tr>
            <th>Mo</th>
            <th>Di</th>
            <th>Mi</th>
            <th>Do</th>
            <th>Fr</th>
            <th>Sa</th>
            <th>So</th>
          </tr>
        </thead>
        <tbody>
          {calendarRows.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((day, dayIndex) => (
                <td
                  className="day"
                  key={dayIndex}
                  onClick={() => handleDayClick(day)}
                >
                  <div className="day-number">{day !== 0 ? day : ""}</div>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      {showPopup && (
        <Popup
          selectedDate={selectedDate}
          times={times}
          onTimeChange={handleTimeChange}
          onClose={handleClosePopup}
        />
      )}
    </div>
  );
};

export default MonthCalendar;
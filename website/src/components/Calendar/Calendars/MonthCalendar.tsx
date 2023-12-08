import "./MonthCalendar.css";
import React, { useState } from "react";
import { generateCalendarRows } from "../../../utils/calendarUtils";
import Popup from "../Popup/Popup"; 

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

  const calendarRows = generateCalendarRows(currentYear, currentMonth);

  const handleDayClick = (day: number) => {
    // Create a new Date object with the selected year, month, and day
    const date = new Date(currentYear, currentMonth, day);
    setSelectedDate(date);
    setShowPopup(true);
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
          onClose={() => setShowPopup(false)}
        />
      )}
    </div>
  );
};

export default MonthCalendar;
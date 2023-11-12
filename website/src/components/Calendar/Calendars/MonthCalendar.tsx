import "./MonthCalendar.css";
import React from "react";
import { generateCalendarRows } from "../../../utils/calendarUtils";

interface MonthCalendarProps {
  currentMonth: number;
  currentYear: number;
}

const MonthCalendar: React.FC<MonthCalendarProps> = ({
  currentMonth,
  currentYear,
}) => {
  const calendarRows = generateCalendarRows(currentYear, currentMonth);

  return (
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
              <td className="day" key={dayIndex}>
                <div className="day-number">{day !== 0 ? day : ""}</div>
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default MonthCalendar;

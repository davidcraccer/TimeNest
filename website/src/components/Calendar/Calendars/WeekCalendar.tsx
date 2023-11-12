import "./WeekCalendar.css";
import React from "react";

interface WeekCalendarProps {
  currentMonth: number;
  currentYear: number;
}

const WeekCalendar: React.FC<WeekCalendarProps> = ({ currentMonth, currentYear }) => {
  const timeSlots = Array.from({ length: 24 }, (_, index) => index);


  // Calculate the width for the first column (1/3 of the other columns)
  const firstColumnWidth = `${(100 / (7 + 2)).toFixed(2)}%`;

  return (
    <table className="table table-week">
      <thead>
        <tr>
          <th style={{ width: firstColumnWidth }}></th> 
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
        {timeSlots.map((timeSlot, timeIndex) => (
          <tr key={timeIndex}>
            <td className="time" style={{ width: firstColumnWidth }}>{`${timeSlot}:00`}</td>
            {[1, 2, 3, 4, 5, 6, 7].map((dayIndex) => (
              <td className="day" key={dayIndex}>
                {/* You can render events or other information for each time slot and day here */}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default WeekCalendar;

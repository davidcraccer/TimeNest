import React from "react";
import "../Calendar.css";

interface DayCalendarProps {
  currentMonth: number;
  currentYear: number;
  currentDayOfWeekTracker: number;
}

const DayCalendar: React.FC<DayCalendarProps> = ({ currentMonth, currentYear, currentDayOfWeekTracker }) => {
  const dayOfWeekString = new Date(currentYear, currentMonth, currentDayOfWeekTracker).toLocaleDateString('de-DE', { weekday: 'short' });

  const generateTimeSlots = () => {
    const timeSlots = [];
    for (let hour = 0; hour <= 23; hour++) {
      const timeLabel = hour < 10 ? `0${hour}:00` : `${hour}:00`;
      timeSlots.push(
        <tr key={hour}>
          <td>{timeLabel}</td>
        </tr>
      );
    }
    return timeSlots;
  };

  return (
    <table className="table">
      <thead>
        <tr>
          <th></th>
          <th>{dayOfWeekString}</th>
        </tr>
      </thead>
      <tbody>{generateTimeSlots()}</tbody>
    </table>
  );
};

export default DayCalendar;

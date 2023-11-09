import "./Calendar.css";
import React from "react";
import { generateCalendarRows } from "../../utils/calendarUtils";

const Home: React.FC = () => {
  // Get the current month and year
  const currentDate = new Date();
  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();

  // Generate the calendar rows for the current month and year
  const calendarRows = generateCalendarRows(currentYear, currentMonth);

  // Array of month names for display
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return (
    <div className="container mt-5 text-center">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <div className="">
          <button className="calendar-header-btn arrow-left left-btn">
            {"<"}
          </button>
          <button className="calendar-header-btn arrow-right right-btn">
            {">"}
          </button>
          <button className="calendar-header-btn today-btn ms-3">Today</button>
        </div>

        <h2 className="mb-0">{`${monthNames[currentMonth]} ${currentYear}`}</h2>

        <div className="">
          <button className="calendar-header-btn month-btn left-btn">
            Month
          </button>
          <button className="calendar-header-btn week-btn">Week</button>
          <button className="calendar-header-btn day-btn">Day</button>
          <button className="calendar-header-btn list-btn right-btn">
            List
          </button>
        </div>
      </div>

      <table className="table table-bordered">
        <thead>
          <tr>
            <th className="table-header">Mon</th>
            <th className="table-header">Tue</th>
            <th className="table-header">Wed</th>
            <th className="table-header">Thu</th>
            <th className="table-header">Fri</th>
            <th className="table-header">Sat</th>
            <th className="table-header">Sun</th>
          </tr>
        </thead>
        <tbody>
          {calendarRows.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((day, dayIndex) => (
                <td
                  key={dayIndex}
                  className={`date-square ${
                    day !== 0 ? "filled-day" : "empty-day"
                  }`}
                >
                  {day !== 0 ? day : ""}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Home;

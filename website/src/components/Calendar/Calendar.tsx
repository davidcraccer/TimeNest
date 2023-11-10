import "./Calendar.css";
import React from "react";
import PreviousBtn from "./Buttons/PreviousBtn";
import NextBtn from "./Buttons/NextBtn";
import TodayBtn from "./Buttons/TodayBtn";
import MonthBtn from "./Buttons/MonthBtn";
import WeekBtn from "./Buttons/WeekBtn";
import DayBtn from "./Buttons/DayBtn";
import ListBtn from "./Buttons/ListBtn";
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
    <div className="calendar-container container mt-5 text-center px-5 py-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <div className="">
          <PreviousBtn />
          <NextBtn />
          <TodayBtn />
        </div>
        <h2 className="mb-0">{`${monthNames[currentMonth]} ${currentYear}`}</h2>
        <div className="">
          <MonthBtn />
          <WeekBtn />
          <DayBtn />
          <ListBtn />
        </div>
      </div>

      <table className="table">
        <thead>
          <tr>
            <th>Mon</th>
            <th>Tue</th>
            <th>Wed</th>
            <th>Thu</th>
            <th>Fri</th>
            <th>Sat</th>
            <th>Sun</th>
          </tr>
        </thead>
        <tbody>
          {calendarRows.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((day, dayIndex) => (
                <td key={dayIndex}>{day !== 0 ? day : ""}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Home;

import React, { useState } from "react";
import "./Calendar.css";
import PreviousBtn from "./Buttons/PreviousBtn";
import NextBtn from "./Buttons/NextBtn";
import TodayBtn from "./Buttons/TodayBtn";
import MonthBtn from "./Buttons/MonthBtn";
import WeekBtn from "./Buttons/WeekBtn";
import DayBtn from "./Buttons/DayBtn";
import ListBtn from "./Buttons/ListBtn";
import { handlePreviousClick, handleNextClick, handleTodayClick } from "../../utils/calendarUtils";
import MonthCalendar from "./Calendars/MonthCalendar";
import WeekCalendar from "./Calendars/WeekCalendar";
import DayCalendar from "./Calendars/DayCalendar";
import ListCalendar from "./Calendars/ListCalendar";

const Calendar: React.FC = () => {
  const [currentView, setCurrentView] = useState<string>("month");
  const [currentMonth, setCurrentMonth] = useState<number>(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState<number>(new Date().getFullYear());

  const monthNames = [
    "Januar", "Februar", "März", "April", "Mai", "Juni",
    "Juli", "August", "September", "Oktober", "November", "Dezember",
  ];

  const renderCalendar = () => {
    switch (currentView) {
      case "month":
        return <MonthCalendar currentMonth={currentMonth} currentYear={currentYear} />;
      case "week":
        return <WeekCalendar currentMonth={currentMonth} currentYear={currentYear} />;
      case "day":
        return <DayCalendar />;
      case "list":
        return <ListCalendar />;
      default:
        return <MonthCalendar currentMonth={currentMonth} currentYear={currentYear} />;
    }
  };

  return (
    <div className="calendar-container text-center px-5 py-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <div className="">
          <PreviousBtn onClick={() => handlePreviousClick(currentMonth, setCurrentMonth, setCurrentYear)} />
          <NextBtn onClick={() => handleNextClick(currentMonth, setCurrentMonth, setCurrentYear)} />
          <TodayBtn onClick={() => handleTodayClick(setCurrentMonth, setCurrentYear)} />
        </div>
        <h2 className="mb-0">{`${monthNames[currentMonth]} ${currentYear}`}</h2>
        <div className="">
          <MonthBtn onClick={() => setCurrentView("month")} />
          <WeekBtn onClick={() => setCurrentView("week")} />
          <DayBtn onClick={() => setCurrentView("day")} />
          <ListBtn onClick={() => setCurrentView("list")} />
        </div>
      </div>

      {renderCalendar()}

    </div>
  );
};

export default Calendar;

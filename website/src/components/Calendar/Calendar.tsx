import React, { useState, useEffect } from "react";
import "./Calendar.css";
import PreviousBtn from "./HeaderBtns/PreviousBtn";
import NextBtn from "./HeaderBtns/NextBtn";
import TodayBtn from "./HeaderBtns/TodayBtn";
import MonthBtn from "./HeaderBtns/MonthBtn";
import WeekBtn from "./HeaderBtns/WeekBtn";
import DayBtn from "./HeaderBtns/DayBtn";
import ListBtn from "./HeaderBtns/ListBtn";
import {
  handlePreviousClick,
  handleNextClick,
  handleTodayClick,
} from "../../utils/calendarUtils";
import MonthCalendar from "./Calendars/MonthCalendar";
import WeekCalendar from "./Calendars/WeekCalendar";
import DayCalendar from "./Calendars/DayCalendar";
import ListCalendar from "./Calendars/ListCalendar";
import SickDaysButton from "./FooterBtns/SickDaysBtn";
import VacationBtn from "./FooterBtns/VacationBtn";
import DateRangeModal from "./FooterBtns/DateRangeModalProps";

const Calendar: React.FC = () => {
  const [currentView, setCurrentView] = useState<string>("month");
  const [currentMonth, setCurrentMonth] = useState<number>(
    new Date().getMonth()
  );
  const [currentYear, setCurrentYear] = useState<number>(
    new Date().getFullYear()
  );
  const [currentDayOfWeekTracker, setCurrentDayOfWeekTracker] =
    useState<number>(new Date().getDay() - 2);
  const [formattedDate, setFormattedDate] = useState<string>("");
  const [totalWorkTimeMap, setTotalWorkTimeMap] = useState<{
    [key: string]: number;
  }>({});
  const [totalOvertimeMap, setTotalOvertimeMap] = useState<{
    [key: string]: number;
  }>({});

  const [showVacationModal, setShowVacationModal] = useState(false);
  const [showSickDaysModal, setShowSickDaysModal] = useState(false);

  const [vacationDates, setVacationDates] = useState<string[]>([]);
  const [sickDates, setSickDates] = useState<string[]>([]);

  useEffect(() => {
    const currentDate = new Date();
    currentDate.setDate(currentDate.getDate() + 1);
    currentDate.setDate(currentDate.getDate() + currentDayOfWeekTracker);

    const options: Intl.DateTimeFormatOptions = {
      day: "2-digit",
      month: "short",
      year: "numeric",
    };
    const formattedDateString = currentDate.toLocaleDateString(
      "de-DE",
      options
    );

    setFormattedDate(formattedDateString);
  }, [currentDayOfWeekTracker]);

  // Function to handle saving total work time for the current month
  const handleSaveWorkTimeTotalHours = (totalHours: number) => {
    // Use the formatted month-year string as the key
    const key = `${monthNames[currentMonth]}-${currentYear}`;

    setTotalWorkTimeMap((prevMap) => {
      const newTotalWorkTimeMap = { ...prevMap };

      // Accumulate total work time if the key already exists
      if (newTotalWorkTimeMap[key]) {
        newTotalWorkTimeMap[key] += totalHours;
      } else {
        // Set total work time if the key doesn't exist
        newTotalWorkTimeMap[key] = totalHours;
      }

      return newTotalWorkTimeMap;
    });
  };

  // Function to handle saving total overtime for the current month
  const handleSaveOvertimeTotalHours = (totalHours: number) => {
    // Use the formatted month-year string as the key
    const key = `${monthNames[currentMonth]}-${currentYear}`;

    setTotalOvertimeMap((prevMap) => {
      const newTotalOvertimeMap = { ...prevMap };

      // Accumulate total overtime if the key already exists
      if (newTotalOvertimeMap[key]) {
        newTotalOvertimeMap[key] += totalHours;
      } else {
        // Set total overtime if the key doesn't exist
        newTotalOvertimeMap[key] = totalHours;
      }

      return newTotalOvertimeMap;
    });
  };

  const renderCalendarHeader = () => {
    switch (currentView) {
      case "month":
        return (
          <h2 className="mb-0">{`${monthNames[currentMonth]} ${currentYear}`}</h2>
        );
      case "week":
        return (
          <h2 className="mb-0">{`${monthNames[currentMonth]} ${currentYear}`}</h2>
        );
      case "day":
        return <h2 className="mb-0">{`${formattedDate}`}</h2>;
      case "list":
        return <h2 className="mb-0">List View</h2>;
      default:
        return (
          <h2 className="mb-0">{`${monthNames[currentMonth]} ${currentYear}`}</h2>
        );
    }
  };

  const monthNames = [
    "Januar",
    "Februar",
    "März",
    "April",
    "Mai",
    "Juni",
    "Juli",
    "August",
    "September",
    "Oktober",
    "November",
    "Dezember",
  ];

  const renderCalendar = () => {
    switch (currentView) {
      case "month":
        return (
          <MonthCalendar
            currentMonth={currentMonth}
            currentYear={currentYear}
            onSaveWorkTimeTotalHours={handleSaveWorkTimeTotalHours}
            onSaveOvertimeTotalHours={handleSaveOvertimeTotalHours}
            vacationDates={vacationDates}
            sickDates={sickDates}
          />
        );
      case "week":
        return (
          <WeekCalendar currentMonth={currentMonth} currentYear={currentYear} />
        );
      case "day":
        return (
          <DayCalendar
            currentMonth={currentMonth}
            currentYear={currentYear}
            currentDayOfWeekTracker={currentDayOfWeekTracker}
          />
        );
      case "list":
        return <ListCalendar />;
      default:
        return (
          <MonthCalendar
            currentMonth={currentMonth}
            currentYear={currentYear}
            onSaveWorkTimeTotalHours={handleSaveWorkTimeTotalHours}
            onSaveOvertimeTotalHours={handleSaveOvertimeTotalHours}
            vacationDates={vacationDates}
            sickDates={sickDates}
          />
        );
    }
  };

  return (
    <div className="calendar-container text-center px-5 py-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <div className="">
          <PreviousBtn
            onClick={() => {
              handlePreviousClick(
                currentView,
                currentMonth,
                currentYear,
                currentDayOfWeekTracker,
                setCurrentMonth,
                setCurrentYear,
                setCurrentDayOfWeekTracker
              );
            }}
          />
          <NextBtn
            onClick={() => {
              handleNextClick(
                currentView,
                currentMonth,
                currentYear,
                currentDayOfWeekTracker,
                setCurrentMonth,
                setCurrentYear,
                setCurrentDayOfWeekTracker
              );
            }}
          />
          <TodayBtn
            onClick={() =>
              handleTodayClick(
                setCurrentMonth,
                setCurrentYear,
                setCurrentDayOfWeekTracker
              )
            }
          />
        </div>
        {renderCalendarHeader()}
        <div className="">
          <MonthBtn onClick={() => setCurrentView("month")} />
          <WeekBtn onClick={() => setCurrentView("week")} />
          <DayBtn onClick={() => setCurrentView("day")} />
          <ListBtn onClick={() => setCurrentView("list")} />
        </div>
      </div>

      {renderCalendar()}

      <div className="d-flex justify-content-between">
        <div className="">
          <VacationBtn onClick={() => setShowVacationModal(true)} />
          <SickDaysButton onClick={() => setShowSickDaysModal(true)} />
        </div>
        <DateRangeModal
          show={showVacationModal}
          onHide={() => setShowVacationModal(false)}
          onSave={(start, end) =>
            setVacationDates([...vacationDates, `${start}/${end}`])
          }
          title="Urlaubstage"
        />

        <DateRangeModal
          show={showSickDaysModal}
          onHide={() => setShowSickDaysModal(false)}
          onSave={(start, end) =>
            setSickDates([...sickDates, `${start}/${end}`])
          }
          title="Krankheitstage"
        />
        <div>
          <h3 className="show-total-hours worktime">
            Arbeitsstunden:{" "}
            {(
              totalWorkTimeMap[`${monthNames[currentMonth]}-${currentYear}`] ||
              0
            ).toFixed(2)}
            h
          </h3>
          <h3 className="show-total-hours overtime">
            Überstunden:{" "}
            {(
              totalOvertimeMap[`${monthNames[currentMonth]}-${currentYear}`] ||
              0
            ).toFixed(2)}
            h
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Calendar;

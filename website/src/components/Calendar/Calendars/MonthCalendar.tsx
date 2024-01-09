import React, { useState } from "react";
import { generateCalendarRows } from "../../../utils/calendarUtils";
import Popup from "../Popup/Popup";
import "./MonthCalendar.css";

interface MonthCalendarProps {
  currentMonth: number;
  currentYear: number;
  onSaveTotalHours: (totalHours: number) => void;
  vacationDates: string[];
  sickDates: string[];
}

const MonthCalendar: React.FC<MonthCalendarProps> = ({
  currentMonth,
  currentYear,
  onSaveTotalHours,
  vacationDates,
  sickDates,
}) => {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [timesMap, setTimesMap] = useState<{
    [key: string]: { startTime: string; endTime: string }[];
  }>({});

  const calendarRows = generateCalendarRows(currentYear, currentMonth);

  const handleDayClick = (day: number) => {
    const date = new Date(currentYear, currentMonth, day);
    setSelectedDate(date);
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  const handleSaveTimes = (times: { startTime: string; endTime: string }[]) => {
    const dateKey = selectedDate?.toISOString().split("T")[0];

    if (dateKey) {
      setTimesMap((prevTimesMap) => ({
        ...prevTimesMap,
        [dateKey]: times,
      }));
    }
  };

  const hasDataForDate = (date: Date) => {
    const dateKey = date.toISOString().split("T")[0];
    return !!timesMap[dateKey];
  };

  const formatDateWithoutTime = (date: Date): string => {
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    };
    return date.toLocaleDateString("de-DE", options);
  };

  const hasVacationForDate = (date: Date, vacationDates: string[]): boolean => {
    const dateKey = formatDateWithoutTime(date);

    // Check if any vacationDateRange matches the given date
    return vacationDates.some((vacationDateRange) => {
      const [start, end] = vacationDateRange.split("/");
      const startDateKey = formatDateWithoutTime(new Date(start));
      const endDateKey = formatDateWithoutTime(new Date(end));
      console.log(dateKey);
      return dateKey >= startDateKey && dateKey <= endDateKey;
    });
  };

  const hasSickDaysForDate = (date: Date, sickDates: string[]): boolean => {
    const dateKey = formatDateWithoutTime(date);

    // Check if any sickDateRange matches the given date
    return sickDates.some((sickDateRange) => {
      const [start, end] = sickDateRange.split("/");
      const startDateKey = formatDateWithoutTime(new Date(start));
      const endDateKey = formatDateWithoutTime(new Date(end));
      return dateKey >= startDateKey && dateKey <= endDateKey;
    });
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
                  {day !== 0 &&
                  hasDataForDate(new Date(currentYear, currentMonth, day)) ? (
                    <div className="work-dot"></div>
                  ) : (
                    <div></div>
                  )}
                  {day !== 0 &&
                  hasSickDaysForDate(
                    new Date(currentYear, currentMonth, day),
                    sickDates
                  ) ? (
                    <div className="sick-dot"></div>
                  ) : (
                    <div></div>
                  )}
                  {day !== 0 &&
                  hasVacationForDate(
                    new Date(currentYear, currentMonth, day),
                    vacationDates
                  ) ? (
                    <div className="vacation-dot"></div>
                  ) : (
                    <div></div>
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      {showPopup && (
        <Popup
          selectedDate={selectedDate}
          onSave={handleSaveTimes}
          existingTimes={
            selectedDate
              ? timesMap[selectedDate.toISOString().split("T")[0]] || []
              : []
          }
          onSaveTotalHours={onSaveTotalHours}
          onClose={handleClosePopup}
        />
      )}
    </div>
  );
};

export default MonthCalendar;

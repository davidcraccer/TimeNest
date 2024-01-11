import React, { useState } from "react";
import { generateCalendarRows } from "../../../utils/calendarUtils";
import Popup from "../Popup/Popup";
import "./MonthCalendar.css";
import {
  hasDateRangeForDate,
  hasDataForDate,
  renderDot,
} from "../../../utils/calendarUtils";

interface MonthCalendarProps {
  currentMonth: number;
  currentYear: number;
  onSaveWorkTimeTotalHours: (totalHours: number) => void;
  onSaveOvertimeTotalHours: (totalHours: number) => void;
  vacationDates: string[];
  sickDates: string[];
}

const MonthCalendar: React.FC<MonthCalendarProps> = ({
  currentMonth,
  currentYear,
  onSaveWorkTimeTotalHours,
  onSaveOvertimeTotalHours,
  vacationDates,
  sickDates,
}) => {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [timesMap, setTimesMap] = useState<{
    [key: string]: { startTime: string; endTime: string }[];
  }>({});

  const handleDayClick = (day: number) => {
    const date = new Date(currentYear, currentMonth, day);
    setSelectedDate(date);
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  const handleSaveWorkTime = (workTime: { startTime: string; endTime: string }[]) => {
    const dateKey = selectedDate?.toISOString().split("T")[0];

    if (dateKey) {
      setTimesMap((prevTimesMap) => ({
        ...prevTimesMap,
        [dateKey]: workTime,
      }));
    }
  };

  const handleSaveOvertime = (overtime: { startTime: string; endTime: string }[]) => {
    const dateKey = selectedDate?.toISOString().split("T")[0];

    if (dateKey) {
      setTimesMap((prevTimesMap) => ({
        ...prevTimesMap,
        [dateKey]: overtime,
      }));
    }
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
          {generateCalendarRows(currentYear, currentMonth).map(
            (row, rowIndex) => (
              <tr key={rowIndex}>
                {row.map((day, dayIndex) => (
                  <td
                    className="day"
                    key={dayIndex}
                    onClick={() => handleDayClick(day)}
                  >
                    <div className="day-number">{day !== 0 ? day : ""}</div>
                    {day !== 0 &&
                      renderDot(
                        hasDataForDate(
                          new Date(currentYear, currentMonth, day),
                          timesMap
                        ),
                        "work-dot"
                      )}
                    {day !== 0 &&
                      renderDot(
                        hasDateRangeForDate(
                          new Date(currentYear, currentMonth, day),
                          sickDates
                        ),
                        "sick-dot"
                      )}
                    {day !== 0 &&
                      renderDot(
                        hasDateRangeForDate(
                          new Date(currentYear, currentMonth, day),
                          vacationDates
                        ),
                        "vacation-dot"
                      )}
                  </td>
                ))}
              </tr>
            )
          )}
        </tbody>
      </table>
      {showPopup && (
        <Popup
          selectedDate={selectedDate}
          onSaveWorkTime={handleSaveWorkTime}
          onSaveWorkTimeTotalHours={onSaveWorkTimeTotalHours}
          onSaveOvertime={handleSaveOvertime}
          onSaveOvertimeTotalHours={onSaveOvertimeTotalHours}
          existingWorkTime={
            selectedDate
              ? timesMap[selectedDate.toISOString().split("T")[0]] || []
              : []
          }
          existingOvertime={
            selectedDate
              ? timesMap[selectedDate.toISOString().split("T")[0]] || []
              : []
          }
          onClose={handleClosePopup}
        />
      )}
    </div>
  );
};

export default MonthCalendar;

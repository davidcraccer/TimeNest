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
  const [workTimesMap, setWorkTimesMap] = useState<{
    [key: string]: { startTime: string; endTime: string }[];
  }>({});
  const [overtimesMap, setOvertimesMap] = useState<{
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

  const handleSaveWorkTime = (
    workTime: { startTime: string; endTime: string }[]
  ) => {
    const dateKey = selectedDate?.toISOString().split("T")[0];

    if (dateKey) {
      const hasEmptyFields = workTime.some(
        (time) => time.startTime === "" || time.endTime === ""
      );

      if (!hasEmptyFields) {
        setWorkTimesMap((prevWorkTimesMap) => ({
          ...prevWorkTimesMap,
          [dateKey]: workTime,
        }));
      } else {
        setWorkTimesMap((prevWorkTimesMap) => ({
          ...prevWorkTimesMap,
          [dateKey]: [],
        }));
      }
    }
  };

  const handleSaveOvertime = (
    overtime: { startTime: string; endTime: string }[]
  ) => {
    const dateKey = selectedDate?.toISOString().split("T")[0];

    if (dateKey) {
      const hasEmptyFields = overtime.some(
        (time) => time.startTime === "" || time.endTime === ""
      );

      if (!hasEmptyFields) {
        setOvertimesMap((prevOvertimesMap) => ({
          ...prevOvertimesMap,
          [dateKey]: overtime,
        }));
      } else {
        setOvertimesMap((prevOvertimesMap) => ({
          ...prevOvertimesMap,
          [dateKey]: [],
        }));
      }
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
                          workTimesMap
                        ),
                        "work-dot"
                      )}
                    {day !== 0 &&
                      renderDot(
                        hasDataForDate(
                          new Date(currentYear, currentMonth, day),
                          overtimesMap
                        ),
                        "overtime-dot"
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
              ? workTimesMap[selectedDate.toISOString().split("T")[0]] || []
              : []
          }
          existingOvertime={
            selectedDate
              ? overtimesMap[selectedDate.toISOString().split("T")[0]] || []
              : []
          }
          onClose={handleClosePopup}
        />
      )}
    </div>
  );
};

export default MonthCalendar;

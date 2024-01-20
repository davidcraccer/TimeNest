import React from "react";

const getDaysInMonth = (year: number, month: number): number => {
  return new Date(year, month + 1, 0).getDate();
};

const getFirstDayOfWeek = (year: number, month: number): number => {
  return new Date(year, month, 1).getDay();
};

const generateDaysArray = (year: number, month: number): number[] => {
  const daysInMonth = getDaysInMonth(year, month);
  const firstDayOfWeek = getFirstDayOfWeek(year, month);

  const daysArray = Array.from(
    { length: firstDayOfWeek > 0 ? firstDayOfWeek - 1 : 6 },
    () => 0
  ).concat(Array.from({ length: daysInMonth }, (_, i) => i + 1));
  return daysArray;
};

export const generateCalendarRows = (
  year: number,
  month: number
): number[][] => {
  const daysArray = generateDaysArray(year, month);
  const calendarRows: number[][] = [];

  let currentRow: Array<number | 0> = [];

  daysArray.forEach((day, index) => {
    currentRow.push(day);

    if (currentRow.length === 7 || index === daysArray.length - 1) {
      calendarRows.push([...currentRow]);
      currentRow = [];
    }
  });

  const lastRow = calendarRows[calendarRows.length - 1];
  while (lastRow.length < 7) {
    lastRow.push(0);
  }

  return calendarRows;
};

export const handlePreviousClick = (
  currentView: string,
  currentMonth: number,
  currentYear: number,
  currentDayOfWeek: number,
  setCurrentMonth: React.Dispatch<React.SetStateAction<number>>,
  setCurrentYear: React.Dispatch<React.SetStateAction<number>>,
  setCurrentDayOfWeek: React.Dispatch<React.SetStateAction<number>>
) => {
  switch (currentView) {
    case "month":
      setCurrentMonth((prevMonth) => (prevMonth === 0 ? 11 : prevMonth - 1));
      if (currentMonth === 0) {
        setCurrentYear((prevYear) => prevYear - 1);
      }
      break;
    case "week":
      break;
    case "day":
      setCurrentDayOfWeek(currentDayOfWeek - 1);
      break;
    case "list":
      break;
    default:
      break;
  }
};

export const handleNextClick = (
  currentView: string,
  currentMonth: number,
  currentYear: number,
  currentDayOfWeek: number,
  setCurrentMonth: React.Dispatch<React.SetStateAction<number>>,
  setCurrentYear: React.Dispatch<React.SetStateAction<number>>,
  setCurrentDayOfWeek: React.Dispatch<React.SetStateAction<number>>
) => {
  switch (currentView) {
    case "month":
      setCurrentMonth((prevMonth) => (prevMonth === 11 ? 0 : prevMonth + 1));
      if (currentMonth === 11) {
        setCurrentYear((prevYear) => prevYear + 1);
      }
      break;
    case "week":
      break;
    case "day":
      setCurrentDayOfWeek(currentDayOfWeek + 1);
      break;
    case "list":
      break;
    default:
      break;
  }
};

export const handleTodayClick = (
  setCurrentMonth: React.Dispatch<React.SetStateAction<number>>,
  setCurrentYear: React.Dispatch<React.SetStateAction<number>>,
  setCurrentDayOfWeekTracker: React.Dispatch<React.SetStateAction<number>>
) => {
  const today = new Date();
  const defaultDayOfWeekTracker = today.getDay() - 2;

  setCurrentMonth(today.getMonth());
  setCurrentYear(today.getFullYear());
  setCurrentDayOfWeekTracker(defaultDayOfWeekTracker);
};

const formatDateWithoutTime = (date: Date): string => {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  };
  return date.toLocaleDateString("de-DE", options);
};

export const hasDateRangeForDate = (
  date: Date,
  dateRanges: string[]
): boolean => {
  const dateKey = formatDateWithoutTime(date);

  return dateRanges.some((dateRange) => {
    const [start, end] = dateRange.split("/");
    const startDateKey = formatDateWithoutTime(new Date(start));
    const endDateKey = formatDateWithoutTime(new Date(end));
    return dateKey >= startDateKey && dateKey <= endDateKey;
  });
};

export const hasDataForDate = (
  date: Date,
  timesMap: { [key: string]: { startTime: string; endTime: string }[] }
): boolean => {
  const dateKey = date.toISOString().split("T")[0];
  const dataForDate = timesMap[dateKey];
  return Array.isArray(dataForDate) && dataForDate.length > 0;
};


export const renderDot = (condition: boolean, className: string): JSX.Element =>
  condition ? <div className={className}></div> : <div></div>;

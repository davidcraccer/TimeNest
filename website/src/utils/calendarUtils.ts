// Fn gets number of days in a month
const getDaysInMonth = (year: number, month: number): number => {
  return new Date(year, month + 1, 0).getDate();
};

// Fn to get the day of the week for the first day of the month
const getFirstDayOfWeek = (year: number, month: number): number => {
  return new Date(year, month, 1).getDay();
};

// Fn to generate an array representing the days of the month
const generateDaysArray = (year: number, month: number): number[] => {
  const daysInMonth = getDaysInMonth(year, month);
  const firstDayOfWeek = getFirstDayOfWeek(year, month);

  // Adjust the starting day dynamically
  const daysArray = Array.from(
    { length: firstDayOfWeek > 0 ? firstDayOfWeek - 1 : 6 },
    () => 0
  ).concat(Array.from({ length: daysInMonth }, (_, i) => i + 1));
  return daysArray;
};

// Fn to generate the calendar rows
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

  // Ensure the last row has 7 days (fill with 0 for empty days)
  const lastRow = calendarRows[calendarRows.length - 1];
  while (lastRow.length < 7) {
    lastRow.push(0);
  }

  return calendarRows;
};

// Handle click functions
// Previous Button
export const handlePreviousClick = (
  currentView: string,
  currentMonth: number,
  currentYear: number,
  currentDayOfWeek: number,
  setCurrentMonth: React.Dispatch<React.SetStateAction<number>>,
  setCurrentYear: React.Dispatch<React.SetStateAction<number>>,
  setCurrentDayOfWeek: React.Dispatch<React.SetStateAction<number>>,
) => {
  switch (currentView) {
    case "month":
      setCurrentMonth((prevMonth) => (prevMonth === 0 ? 11 : prevMonth - 1));
      if (currentMonth === 0) {
        setCurrentYear((prevYear) => prevYear - 1);
      }
      break;
    case "week":
      // Handle previous week logic
      break;
    case "day":
      // Handle previous day logic
      // setCurrentYear();
      // setCurrentMonth();
      setCurrentDayOfWeek(currentDayOfWeek - 1);
      break;
    case "list":
      // Handle previous list view logic
      break;
    default:
      break;
  }
};

// Next Button
export const handleNextClick = (
  currentView: string,
  currentMonth: number,
  currentYear: number,
  currentDayOfWeek: number,
  setCurrentMonth: React.Dispatch<React.SetStateAction<number>>,
  setCurrentYear: React.Dispatch<React.SetStateAction<number>>,
  setCurrentDayOfWeek: React.Dispatch<React.SetStateAction<number>>,
) => {
  switch (currentView) {
    case "month":
      setCurrentMonth((prevMonth) => (prevMonth === 11 ? 0 : prevMonth + 1));
      if (currentMonth === 11) {
        setCurrentYear((prevYear) => prevYear + 1);
      }
      break;
    case "week":
      // Handle next week logic
      break;
    case "day":
      // Handle next day logic
      // setCurrentYear(getFullYear());
      // setCurrentMonth(getMonth());
      setCurrentDayOfWeek(currentDayOfWeek + 1);
      break;
    case "list":
      // Handle next list view logic
      break;
    default:
      break;
  }
};

export const handleTodayClick = (
  setCurrentMonth: React.Dispatch<React.SetStateAction<number>>,
  setCurrentYear: React.Dispatch<React.SetStateAction<number>>
) => {
  const today = new Date();
  setCurrentMonth(today.getMonth());
  setCurrentYear(today.getFullYear());
};

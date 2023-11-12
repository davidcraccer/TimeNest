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

// Handle Click Functions
export const handlePreviousClick = (
  currentMonth: number,
  setCurrentMonth: React.Dispatch<React.SetStateAction<number>>,
  setCurrentYear: React.Dispatch<React.SetStateAction<number>>
) => {
  // Decrease the current month
  setCurrentMonth((prevMonth) => (prevMonth === 0 ? 11 : prevMonth - 1));

  // If the current month is January, decrease the year
  if (currentMonth === 0) {
    setCurrentYear((prevYear) => prevYear - 1);
  }
};

export const handleNextClick = (
  currentMonth: number,
  setCurrentMonth: React.Dispatch<React.SetStateAction<number>>,
  setCurrentYear: React.Dispatch<React.SetStateAction<number>>
) => {
  // Increase the current month
  setCurrentMonth((prevMonth) => (prevMonth === 11 ? 0 : prevMonth + 1));

  // If the current month is December, increase the year
  if (currentMonth === 11) {
    setCurrentYear((prevYear) => prevYear + 1);
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
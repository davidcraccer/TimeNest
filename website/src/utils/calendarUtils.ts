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
export const generateCalendarRows = (year: number, month: number): number[][] => {
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
  
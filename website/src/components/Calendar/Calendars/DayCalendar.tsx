import "../Calendar.css";
import React from "react";

const DayCalendar: React.FC = () => {
    
  return (
      <table className="table">
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
          {}
        </tbody>
      </table>
  );
};

export default DayCalendar;

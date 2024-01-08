import "../Calendar.css";
import React from "react";

interface MonthBtnProps {
  onClick: () => void;
}

const MonthBtn: React.FC<MonthBtnProps> = ({ onClick }) => {
  return (
    <button className="calendar-header-btn month-btn left-btn" onClick={onClick}>
      Monat
    </button>
  );
};

export default MonthBtn;
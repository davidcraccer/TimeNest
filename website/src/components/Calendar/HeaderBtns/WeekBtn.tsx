import "../Calendar.css";
import React from "react";

interface WeekBtnProps {
  onClick: () => void;
}

const WeekBtn: React.FC<WeekBtnProps> = ({ onClick }) => {
  return (
    <button className="calendar-header-btn week-btn" onClick={onClick}>
      Woche
    </button>
  );
};

export default WeekBtn;
import "../Calendar.css";
import React from "react";

interface DayBtnProps {
  onClick: () => void;
}

const DayBtn: React.FC<DayBtnProps> = ({ onClick }) => {
  return (
    <button className="calendar-header-btn day-btn" onClick={onClick}>
      Tag
    </button>
  );
};

export default DayBtn;
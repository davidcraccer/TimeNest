import "../Calendar.css";
import React from "react";

interface TodayBtnProps {
  onClick: () => void;
}

const TodayBtn: React.FC<TodayBtnProps> = ({ onClick }) => {
  return (
    <button className="calendar-header-btn today-btn ms-3" onClick={onClick}>
      Heute
    </button>
  );
};

export default TodayBtn;

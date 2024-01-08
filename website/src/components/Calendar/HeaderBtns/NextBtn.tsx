import "../Calendar.css";
import React from "react";

interface NextBtnProps {
  onClick: () => void;
}

const NextBtn: React.FC<NextBtnProps> = ({ onClick }) => {
  return (
    <button
      className="calendar-header-btn arrow-right right-btn"
      onClick={onClick}
    >
      {">"}
    </button>
  );
};

export default NextBtn;

import "../Calendar.css";
import React from "react";

interface PreviousBtnProps {
  onClick: () => void;
}

const PreviousBtn: React.FC<PreviousBtnProps> = ({ onClick }) => {
  return (
    <button
      className="calendar-header-btn arrow-left left-btn"
      onClick={onClick}
    >
      {"<"}
    </button>
  );
};

export default PreviousBtn;
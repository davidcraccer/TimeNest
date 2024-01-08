import React from "react";

interface SickDaysButtonProps {
  onClick: () => void;
}

const SickDaysButton: React.FC<SickDaysButtonProps> = ({ onClick }) => {
  return (
    <button
      className="calendar-footer-btn"
      data-toggle="modal"
      data-target="#sickDaysModal"
      onClick={onClick}
    >
      Krankmeldung
    </button>
  );
};

export default SickDaysButton;

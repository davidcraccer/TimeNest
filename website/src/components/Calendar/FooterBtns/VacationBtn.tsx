import React from "react";

interface VacationBtnProps {
  onClick: () => void;
}

const VacationBtn: React.FC<VacationBtnProps> = ({ onClick }) => {
  return (
    <button
      className="calendar-footer-btn me-2"
      data-toggle="modal"
      data-target="#vacationModal"
      onClick={onClick}
    >
      Urlaubsantrag
    </button>
  );
};

export default VacationBtn;

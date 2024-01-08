import "../Calendar.css";
import React from "react";

interface ListBtnProps {
  onClick: () => void;
}

const ListBtn: React.FC<ListBtnProps> = ({ onClick }) => {
  return (
    <button className="calendar-header-btn list-btn right-btn" onClick={onClick}>
      Liste
    </button>
  );
};

export default ListBtn;
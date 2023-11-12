import "./Home.css";
import React from "react";
import Calendar from "../../components/Calendar/Calendar";

const Home: React.FC = () => {
  return (
    <div className="hero">
      <Calendar />
    </div>
  );
};

export default Home;

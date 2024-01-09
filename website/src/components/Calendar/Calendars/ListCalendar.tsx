import "./ListCalendar.css";
import React from "react";

interface Event {
  time: string;
  description: string;
}

const ListCalendar: React.FC = () => {
  const events: Event[] = [
    { time: "10:30am - 12:30pm", description: "meeting" },
    { time: "12:00pm", description: "Lunch" },
    { time: "2:30pm", description: "Meeting" },
    { time: "5:30pm", description: "Happy Hour" },
    { time: "8:00pm", description: "Dinner" },
  ];

  return (
    <table className="table list-calendar">
      <tbody>
        {events.map((event, index) => (
          <tr key={index}>
            <td>{event.time}</td>
            <td className="liste-description"><span className="list-dot"></span>{event.description}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ListCalendar;
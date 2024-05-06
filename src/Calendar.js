import React, { useState } from "react";
import "./Calendar.css";

const data = [
  {
    id: 1,
    name: "Gokaran",
    startTime: "1310",
    endTime: "1450",
  },
  {
    id: 2,
    name: "Gokaran",
    startTime: "1110",
    endTime: "1150",
  },
  {
    id: 3,
    name: "Gokaran",
    startTime: "1320",
    endTime: "1350",
  },
];

const time = [
  "01",
  "02",
  "03",
  "04",
  "05",
  "06",
  "07",
  "08",
  "09",
  "10",
  "11",
  "12",
  "13",
  "14",
  "15",
  "16",
];

const getEventsInTimeline = (startingTime) => {
  let blockHeight = 10;
  let currentEvents = data.filter(({ startTime }) => {
    return startingTime === startTime.substring(0, 2);
  });

  let resData = [];
  currentEvents.forEach(({ name, startTime, endTime }) => {
    let topIndex = Number(startTime.substring(2, 4)) / 5;
    let difference = Number(endTime.substring(0, 2)) - Number(startTime.substring(0, 2));
    let endIndex = (Number(endTime - startTime) / 5) - (difference * 8);

    console.log(topIndex, endIndex, difference);
    resData.push(
      <div
        className="event-item"
        style={{ top: topIndex * blockHeight, height: endIndex * blockHeight }}
      >
        {name}
      </div>
    );
  });

  return resData;
};

export default function App() {
  const [events, setEvents] = useState(data);

  return (
    <div className="event-container">
      {time.map((val) => {
        return (
          <div className="event-timeline">
            {val}
            <div className="event-items">{getEventsInTimeline(val)}</div>
          </div>
        );
      })}
    </div>
  );
}

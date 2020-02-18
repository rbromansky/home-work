import React from "react";
import { observer } from "mobx-react";
import "../styles.css";

export const Activity = observer(props => {
  let date = new Date(props.activity.date);
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];

  return (
    <div className="activity">
      <div>
        {monthNames[date.getMonth()]} {date.getDate()}
      </div>
      <div>{props.activity.type}</div>
      <div>{props.activity.distance} km</div>
      {props.activity.duration < 60 ? (
        <div>{props.activity.duration} minutes</div>
      ) : (
        <div>
          {(props.activity.duration / 60) | 0}
          {" h "}
          {props.activity.duration % 60}
          {" m"}
        </div>
      )}
      <div>{props.activity.speed} km/hour</div>
    </div>
  );
});

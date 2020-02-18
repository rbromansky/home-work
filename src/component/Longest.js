import React, { Fragment } from "react";
import "../styles.css";
import store from "../store/ActivityStore";
import { observer } from "mobx-react";

export const Longest = observer(() => {
  let longestRide = store.longestRide;
  let longestRun = store.longestRun;
  let dateRide = longestRide ? new Date(longestRide.date) : new Date();
  let dateRun = longestRun ? new Date(longestRun.date) : new Date();

  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ];

  return (
    <div className="longest">
      <div>Longest ride:</div>
      {longestRide ? (
        <Fragment>
          <div className="longestItem">
            <div>
              {monthNames[dateRide.getMonth()]} {dateRide.getDate()}
            </div>
            <div>{longestRide.distance} km</div>
            {longestRide.duration < 60 ? (
              <div>{longestRide.duration} m</div>
            ) : (
              <div>
                {(longestRide.duration / 60) | 0}
                {" h "}
                {longestRide.duration % 60}
                {" m"}
              </div>
            )}
          </div>
          <div>Longest run:</div>
          <div className="longestItem">
            <div>
              {monthNames[dateRun.getMonth()]} {dateRun.getDate()}
            </div>
            <div>{longestRun.distance} km</div>
            {longestRun.duration < 60 ? (
              <div>{longestRun.duration} m</div>
            ) : (
              <div>
                {(longestRun.duration / 60) | 0}
                {" h "}
                {longestRun.duration % 60}
                {" m"}
              </div>
            )}
          </div>
        </Fragment>
      ) : (
        ""
      )}
    </div>
  );
});

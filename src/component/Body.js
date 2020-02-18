import React from "react";
import "../styles.css";
import { ActivityList } from "./ActivityList";
import { Statistic } from "./Statistic";

export const Body = () => {
  return (
    <div className="body">
      <ActivityList />
      <Statistic />
    </div>
  );
};

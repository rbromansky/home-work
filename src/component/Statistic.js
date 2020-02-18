import React from "react";
import "../styles.css";
import { Longest } from "./Longest";
import { Total } from "./Total";

export const Statistic = () => {
  return (
    <div className="statistic">
      <Longest />
      <Total />
    </div>
  );
};

import React from "react";
import "../styles.css";
import store from "../store/ActivityStore";
import { observer } from "mobx-react";

export const Total = observer(() => {
  return (
    <div className="total">
      <div>Total ride distance: {store.rideTotalDistance} km</div>
      <div>Total run distance: {store.runTotalDistance} km</div>
    </div>
  );
});

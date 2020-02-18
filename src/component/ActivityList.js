import React from "react";
import "../styles.css";
import { Activity } from "./Activity";
import store from "../store/ActivityStore";
import { values } from "mobx";
import { observer } from "mobx-react";
import uuid from "uuid/v4";

export const ActivityList = observer(() => {
  return (
    <div className="activity-list">
      {values(store.list).map(activity => (
        <Activity activity={activity} key={uuid()} />
      ))}
    </div>
  );
});

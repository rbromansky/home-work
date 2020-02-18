import React, { Fragment } from "react";
import { observer } from "mobx-react";
import { Header } from "./component/Header";
import AddActivity from "./component/AddActivity";
import { Body } from "./component/Body";
import "./styles.css";
import store from "./store/ActivityStore";

function App() {
  store.addActivity();
  return (
    <Fragment>
      <div className="App">
        <Header />
        <AddActivity />
        <Body />
      </div>
    </Fragment>
  );
}

export default observer(App);

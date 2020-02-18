import React from "react";
import "../styles.css";
import { Formik, Field, Form } from "formik";
import BasicFormSchema from "./BasicFormSchema";
import store from "../store/ActivityStore";
import { addActivity } from "../store/NodeServer";

const AddActivity = () => {
  const getMinutes = (startTime, endTime) => {
    let startDate = new Date("2020-01-01 " + startTime);
    let endDate = new Date("2020-01-01 " + endTime);

    return Number(
      (endDate.getHours() - startDate.getHours()) * 60 +
        endDate.getMinutes() -
        startDate.getMinutes()
    );
  };

  return (
    <div className="container">
      <Formik
        initialValues={{
          start: "",
          end: "",
          distance: "",
          type: ""
        }}
        validationSchema={BasicFormSchema}
        onSubmit={values => {
          const activity = {
            date: new Date().toJSON().slice(0, 10),
            type: values.type,
            distance: Number(values.distance),
            duration: getMinutes(values.start, values.end),
            speed:
              Math.round(
                (values.distance /
                  (getMinutes(values.start, values.end) / 60)) *
                  100
              ) / 100
          };

          store.add(
            activity.date,
            activity.type,
            activity.distance,
            activity.duration,
            activity.speed
          );

          addActivity(activity);
        }}
        render={({ errors, touched }) => (
          <Form className="form-container">
            <div>Add new activity : </div>

            <Field
              name="start"
              placeholder="Start time"
              type="text"
              className="input"
            />
            {errors.start && touched.start && (
              <div className="field-error">{errors.start}</div>
            )}

            <Field
              name="end"
              placeholder="End time"
              type="text"
              className="input"
            />
            {errors.end && touched.end && (
              <div className="field-error">{errors.end}</div>
            )}

            <Field
              name="distance"
              placeholder="Distance"
              type="text"
              className="input"
            />
            {errors.distance && touched.distance && (
              <div className="field-error">{errors.distance}</div>
            )}

            <Field name="type" as="select" className="select">
              <option value="">Select actyvity type</option>
              <option value="Run">Run</option>
              <option value="Ride">Ride</option>
            </Field>

            {errors.type && touched.type && (
              <div className="field-error">{errors.type}</div>
            )}

            <button type="submit" className="button">
              Save
            </button>
          </Form>
        )}
      />
    </div>
  );
};

export default AddActivity;

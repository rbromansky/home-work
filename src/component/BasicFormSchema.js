import * as Yup from "yup";
import moment from "moment";

const BasicFormSchema = Yup.object().shape({
  start: Yup.string().required("start time cannot be empty"),
  end: Yup.string()
    .required("end time cannot be empty")
    .test("is-greater", "end time should be greater", function(value) {
      const { start } = this.parent;
      return moment(value, "HH:mm").isSameOrAfter(moment(start, "HH:mm"));
    }),
  distance: Yup.number().required("distace cannot be empty"),
  type: Yup.string().required("Type is required!")
});
export default BasicFormSchema;

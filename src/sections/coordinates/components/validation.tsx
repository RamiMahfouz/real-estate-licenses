import * as Yup from "yup";
export const CoordinatesValidationSchema = Yup.object({
  coordinate_number: Yup.string().required("الرجاء ادخال رقم الإحداثي"),
  abscissa: Yup.string().required("الرجاء ادخال الإحداثي السيني"),
  y_coordinate: Yup.string().required("الرجاء ادخال الإحداثي الصادي"),
});

export const CoordinatesInitialValues = {
  coordinate_number: "",
  abscissa: "",
  y_coordinate: "",
};

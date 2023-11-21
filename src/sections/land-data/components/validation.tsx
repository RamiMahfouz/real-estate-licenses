import * as Yup from "yup";
export const LandDataValidationSchema = Yup.object({
  piece_number: Yup.string().required("الرجاء ادخال رقم القطعة"),
  land_area: Yup.string().required("الرجاء ادخال مساحة الارض"),
  land_area_plan: Yup.string().required("الرجاء ادخال مساحة الارض حسب المخطط"),
});

export const LandDataInitialValues = {
  piece_number: "",
  land_area: "",
  land_area_plan: "",
};

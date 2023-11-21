import * as Yup from "yup";
export const BulidingComponentsValidationSchema = Yup.object({
  building_component: Yup.string().required("الرجاء ادخال مكون البناء"),
  floor_area: Yup.string().required("الرجاء ادخال مساحة الدور"),
  floors_number: Yup.string().required("الرجاء ادخال عدد الادوار"),
  units_number: Yup.string().required("الرجاء ادخال عدد الوحدات"),
  component_usage: Yup.string().required("الرجاء ادخال استخدام المكون"),
  construction_ratio: Yup.string().required("الرجاء ادخال نسبة البناء"),
});

export const BulidingComponentsInitialValues = {
  building_component: "",
  floor_area: "",
  floors_number: "",
  units_number: "",
  component_usage: "",
  construction_ratio: "",
};

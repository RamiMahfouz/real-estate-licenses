import * as Yup from "yup";
export const OwnerDataValidationSchema = Yup.object({
  owner_name: Yup.string().required("الرجاء ادخال اسم المالك"),
  id_number: Yup.string().required("الرجاء ادخال رقم الهوية"),
});

export const OwnerDataInitialValues = {
  owner_name: "",
  id_number: "",
};

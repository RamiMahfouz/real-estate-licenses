import * as Yup from "yup";
export const loginValidationSchema = Yup.object({
  email: Yup.string()
    .email("الرجاء إدخال بريد إلكتروني صالح")
    .required("من فضلك أدخل البريد الإلكتروني"),

  password: Yup.string()
    .required("من فضلك أدخل كلمة مرورك")
    .min(8, "يجب أن تحتوي كلمة المرور على 8 أحرف على الأقل")
    .max(40, "يمكن أن تحتوي كلمة المرور على 40 حرفًا كحد أقصى"),
});

export const loginInitialValues = {
  email: "",
  password: "",
};

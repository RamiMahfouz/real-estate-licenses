import * as Yup from "yup";
export const userValidationSchema = Yup.object({
  user_name: Yup.string()
    .required("الرجاء إدخال اسم المستخدم")
    .min(3, "الرجاء إدخال 4 أحرف على الأقل"),
  email: Yup.string()
    .email("الرجاء إدخال بريد إلكتروني صالح")
    .required("من فضلك أدخل البريد الإلكتروني"),
  password: Yup.string().required("الرجاء ادخال كلمة المرور"),
  confirmed_password: Yup.string()
    .required("الرجاء ادخال تأكيد كلمة المرور")
    .oneOf(
      [Yup.ref("password")],
      "يجب أن تتطابق كلمة المرور وتأكيد كلمة المرور"
    ),
});

export const userEditValidationSchema = Yup.object({
  user_name: Yup.string()
    .required("الرجاء إدخال اسم المستخدم")
    .min(3, "الرجاء إدخال 4 أحرف على الأقل"),
  email: Yup.string()
    .email("الرجاء إدخال بريد إلكتروني صالح")
    .required("من فضلك أدخل البريد الإلكتروني"),
});

export const userInitialValues = {
  id: "",
  user_name: "",
  email: "",
  password: "",
  confirmed_password: "",
};

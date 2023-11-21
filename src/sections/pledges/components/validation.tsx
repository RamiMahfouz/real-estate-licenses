import * as Yup from "yup";
export const PledgesValidationSchema = Yup.object({
  pledge: Yup.string().required("الرجاء ادخال التعهد"),
});

export const PledgesInitialValues = {
  pledge: "",
};

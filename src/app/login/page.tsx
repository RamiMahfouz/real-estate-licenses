"use client";
import { TextInput } from "@/components/text-input";
import { Formik } from "formik";
import { useState } from "react";
import { loginInitialValues, loginValidationSchema } from "./validation";
import { loginService } from "@/services/login-service";
import { useRouter } from "next/navigation";
import useStore from "@/store/store";
import { LoadingButton } from "@/components/button";

export default function LoginPage() {
  const [formValues, setFormValues] = useState(loginInitialValues);
  const route = useRouter();
  const setLoading = useStore((state) => state.loadingHandler);
  const setSnackbarInfo = useStore((state) => state.setSnackbarInfo);

  async function handleSubmit(values: any) {
    setLoading(true);
    try {
      const respons: any = await loginService({
        email: values.email,
        password: values.password,
      });
      localStorage.setItem("licenseToken", respons?.data?.token),
        localStorage.setItem("userRole", respons?.data?.user?.role);
      route.push("/dashboard"), setLoading(false);
    } catch (error) {
      setSnackbarInfo({
        open: true,
        message:"بريد إلكتروني أو كلمة مرور خاطئة",
        severity: 'error',
      });
      setLoading(false);
    }
  }
  return (
    <>
      <div className="w-full flex p-3 justify-center items-center">
        <Formik
          onSubmit={handleSubmit}
          initialValues={formValues}
          validationSchema={loginValidationSchema}
          enableReinitialize
        >
          {(formik) => (
            <div className="bg-white shadow-md w-[500px] flex h-[400px] justify-between p-5 text-center flex-col rounded-lg">
              <span className="font-bold text-3xl ">{"تسجيل الدخول"}</span>
              <div className="w-full flex flex-col text-right mt-20 gap-5">
                <TextInput
                  name="email"
                  type="email"
                  label="البريد الالكتروني"
                ></TextInput>

                <TextInput
                  name="password"
                  type="password"
                  label="كلمة المرور"
                ></TextInput>
                <LoadingButton onClick={formik.submitForm}>
                  {"تسجيل الدخول"}
                </LoadingButton>
              </div>
            </div>
          )}
        </Formik>
      </div>
    </>
  );
}

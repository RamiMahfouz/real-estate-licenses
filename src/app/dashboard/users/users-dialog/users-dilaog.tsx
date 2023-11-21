import { GlobalDialog } from "@/components/dialog";
import { Formik, useField } from "formik";
import { useEffect, useState } from "react";
import {
  userEditValidationSchema,
  userInitialValues,
  userValidationSchema,
} from "./validation";
import { TextInput } from "@/components/text-input";
import { usersService } from "@/services/users-service";
import useStore from "@/store/store";

interface UsersDialogProps {
  open: boolean;
  onClose: () => void;
  openMode: string;
  currentItem: any;
  fetchUsers: any;
}

export const userFields = [
  {
    name: "user_name",
    type: "text",
    label: "اسم المستخدم",
  },
  {
    name: "email",
    type: "text",
    label: "البريد الإلكتروني",
  },
  {
    name: "password",
    type: "password",
    label: "كلمة المرور",
  },
  {
    name: "confirmed_password",
    type: "password",
    label: "تأكيد كلمة المرور",
  },
];

export function UsersDialog(props: UsersDialogProps) {
  const { open, onClose, openMode, currentItem, fetchUsers } = props;
  const setLoading = useStore((state) => state.loadingHandler);
  const setSnackbarInfo = useStore((state) => state.setSnackbarInfo);

  const [formValues, setFormValues] = useState<any>(userInitialValues);
  useEffect(() => {
    if (openMode === "edit") {
      setFormValues({
        id: currentItem.id,
        user_name: currentItem.user_name,
        email: currentItem.email,
        password: currentItem.password,
        confirmed_password: currentItem.confirmed_password,
      });
    }
    if (openMode === "add") {
      setFormValues({
        id: "",
        user_name: "",
        email: "",
        password: "",
        confirmed_password: "",
      });
    }
  }, [openMode, currentItem]);

  async function handleSubmit(values: any) {
    if (openMode === "edit") {
      try {
        setLoading(true);
        await usersService.editUser(values);
        fetchUsers();
        onClose();
        setLoading(false);
        setSnackbarInfo({
          open: true,
          message: "تم تعديل المستخدم بنجاح",
          severity: "success",
        });
      } catch (error: any) {
        setLoading(false);
        setSnackbarInfo({
          open: true,
          message: error?.response?.data?.message,
          severity: "error",
        });
      }
    }
    if (openMode === "add") {
      try {
        setLoading(true);
        await usersService.addUser({ values });
        fetchUsers();
        onClose();
        setLoading(false);
        setSnackbarInfo({
          open: true,
          message: "تم إضافة المستخدم بنجاح",
          severity: "success",
        });
      } catch (error: any) {
        setLoading(false);
        setSnackbarInfo({
          open: true,
          message: error?.response?.data?.message,
          severity: "error",
        });
      }
    }
  }
  return (
    <>
      <Formik
        onSubmit={handleSubmit}
        initialValues={formValues}
        validationSchema={
          openMode === "edit" ? userEditValidationSchema : userValidationSchema
        }
        enableReinitialize
      >
        {(formik) => (
          <GlobalDialog
            title="بيانات المستخدم"
            primaryButtonTitle={"حفظ"}
            onSubmit={formik.submitForm}
            open={open}
            onClose={onClose}
          >
            <div className="w-full flex flex-col py-4 gap-4">
              {userFields.map((user,index:any) => (
                <div key={index}>
                  <TextInput
                    name={user.name}
                    type={user.type}
                    label={user.label}
                  ></TextInput>
                </div>
              ))}
            </div>
          </GlobalDialog>
        )}
      </Formik>
    </>
  );
}

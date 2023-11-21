"use client";

import { useState, useEffect } from "react";
import {
  OwnerDataInitialValues,
  OwnerDataValidationSchema,
} from "./validation";
import { GlobalDialog } from "@/components/dialog";
import { Formik } from "formik";
import { TextInput } from "@/components/text-input";

interface OwnerDataDialogProps {
  open: boolean;
  onClose: () => void;
  openMode: string;
  currentItem: any;
  licenseData: any;
  setLicenseData: any;
}

export const ownerDataFields = [
  {
    name: "owner_name",
    type: "text",
    label: "اسم المالك",
  },
  {
    name: "id_number",
    type: "text",
    label: "رقم الهوية",
  },
];

export function OwnerDataDialog(props: OwnerDataDialogProps) {
  const { open, onClose, openMode, currentItem, licenseData, setLicenseData } =
    props;

  const [formValues, setFormValues] = useState(OwnerDataInitialValues);

  useEffect(() => {
    if (openMode === "edit") {
      setFormValues({
        owner_name: currentItem.value.owner_name,
        id_number: currentItem.value.id_number,
      });
    }
    if (openMode === "add") {
      setFormValues({
        owner_name: "",
        id_number: "",
      });
    }
  }, [openMode, currentItem.value]);

  function handleSubmit(values: any) {
    if (openMode === "add") {
      setLicenseData({
        ...licenseData,
        ownerData: [
          ...licenseData.ownerData,
          {
            inde: licenseData.ownerData.length + 1,
            owner_name: values.owner_name,
            id_number: values.id_number,
          },
        ],
      });
    }
    if (openMode === "edit") {
      setLicenseData({
        ...licenseData,
        ownerData: licenseData.ownerData.map((item: any, index: number) =>
          index === currentItem.index
            ? {
                index: currentItem.value.index,
                owner_name: values.owner_name,
                id_number: values.id_number,
              }
            : item
        ),
      });
    }

    onClose();
  }

  return (
    <>
      <Formik
        onSubmit={handleSubmit}
        initialValues={formValues}
        validationSchema={OwnerDataValidationSchema}
        enableReinitialize
      >
        {(formik) => (
          <GlobalDialog
            title="بيانات المالك"
            primaryButtonTitle={"حفظ"}
            onSubmit={formik.submitForm}
            open={open}
            onClose={onClose}
          >
            <div className="w-full py-9 grid grid-cols-1 md:grid-cols-2 gap-4">
              {ownerDataFields.map((item) => (
                <div key={item.label} className="min-w-full">
                  <TextInput
                    name={item.name}
                    type={item.type}
                    label={item.label}
                  />
                </div>
              ))}
            </div>
          </GlobalDialog>
        )}
      </Formik>
    </>
  );
}

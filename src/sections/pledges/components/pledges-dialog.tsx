"use client";

import { useState, useEffect } from "react";
import { GlobalDialog } from "@/components/dialog";
import { Formik } from "formik";
import { TextInput } from "@/components/text-input";
import { PledgesInitialValues, PledgesValidationSchema } from "./validation";

interface PledgesDialogProps {
  open: boolean;
  onClose: () => void;
  openMode: string;
  currentItem: any;
  licenseData: any;
  setLicenseData: any;
}

export const pledgesFields = [
  {
    name: "pledge",
    type: "text",
    label: "التعهد",
  },
];

export function PledgesDialog(props: PledgesDialogProps) {
  const { open, onClose, openMode, currentItem, licenseData, setLicenseData } =
    props;

  const [formValues, setFormValues] = useState(PledgesInitialValues);

  useEffect(() => {
    if (openMode === "edit") {
      setFormValues({
        pledge: currentItem.value.pledge,
      });
    }
    if (openMode === "add") {
      setFormValues({
        pledge: "",
      });
    }
  }, [openMode, currentItem.value]);

  function handleSubmit(values: any) {
    if (openMode === "add") {
      setLicenseData({
        ...licenseData,
        pledges: [
          ...licenseData.pledges,
          {
            pledge: values.pledge,
          },
        ],
      });
    }
    if (openMode === "edit") {
      setLicenseData({
        ...licenseData,
        pledges: licenseData.pledges.map((item: any, index: number) =>
          index === currentItem.index
            ? {
                pledge: values.pledge,
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
        validationSchema={PledgesValidationSchema}
        enableReinitialize
      >
        {(formik) => (
          <GlobalDialog
            title="التعهدات"
            primaryButtonTitle={"حفظ"}
            onSubmit={formik.submitForm}
            open={open}
            onClose={onClose}
          >
            <div className="w-full py-9 grid grid-cols-1  gap-4">
              {pledgesFields.map((item) => (
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

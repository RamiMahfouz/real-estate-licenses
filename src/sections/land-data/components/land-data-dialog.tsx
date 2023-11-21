"use client";

import { useState, useEffect } from "react";

import { GlobalDialog } from "@/components/dialog";
import { Formik } from "formik";
import { TextInput } from "@/components/text-input";
import { LandDataInitialValues, LandDataValidationSchema } from "./validation";

interface LandDataDialogProps {
  open: boolean;
  onClose: () => void;
  openMode: string;
  currentItem: any;
  licenseData: any;
  setLicenseData: any;
}

export const landDataFields = [
  {
    name: "piece_number",
    type: "text",
    label: "رقم القطعة",
  },
  {
    name: "land_area",
    type: "text",
    label: "مساحة الارض",
  },
  {
    name: "land_area_plan",
    type: "text",
    label: "مساحة الارض حسب المخطط",
  },
];

export function LandDataDialog(props: LandDataDialogProps) {
  const { open, onClose, openMode, currentItem, licenseData, setLicenseData } =
    props;

  const [formValues, setFormValues] = useState(LandDataInitialValues);

  useEffect(() => {
    if (openMode === "edit") {
      setFormValues({
        piece_number: currentItem.value.piece_number,
        land_area: currentItem.value.land_area,
        land_area_plan: currentItem.value.land_area_plan,
      });
    }
    if (openMode === "add") {
      setFormValues({
        piece_number: "",
        land_area: "",
        land_area_plan: "",
      });
    }
  }, [openMode, currentItem.value]);

  function handleSubmit(values: any) {
    if (openMode === "add") {
      setLicenseData({
        ...licenseData,
        landData: [
          ...licenseData.landData,
          {
            index: licenseData.landData.length + 1,
            piece_number: values.piece_number,
            land_area: values.land_area,
            land_area_plan: values.land_area_plan,
          },
        ],
      });
    }
    if (openMode === "edit") {
      setLicenseData({
        ...licenseData,
        landData: licenseData.landData.map((item: any, index: number) =>
          index === currentItem.index
            ? {
                index: currentItem.value.index,
                piece_number: values.piece_number,
                land_area: values.land_area,
                land_area_plan: values.land_area_plan,
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
        validationSchema={LandDataValidationSchema}
        enableReinitialize
      >
        {(formik) => (
          <GlobalDialog
            title="بيانات الاراضي"
            primaryButtonTitle={"حفظ"}
            onSubmit={formik.submitForm}
            open={open}
            onClose={onClose}
          >
            <div className="w-full py-9 grid grid-cols-1 md:grid-cols-2 gap-4">
              {landDataFields.map((item) => (
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

"use client";

import { useState, useEffect } from "react";
import { GlobalDialog } from "@/components/dialog";
import { Formik } from "formik";
import { TextInput } from "@/components/text-input";
import {
  CoordinatesInitialValues,
  CoordinatesValidationSchema,
} from "./validation";

interface CoordinatesDialogProps {
  open: boolean;
  onClose: () => void;
  openMode: string;
  currentItem: any;
  licenseData: any;
  setLicenseData: any;
}

export const coordinatesFields = [
  {
    name: "coordinate_number",
    type: "text",
    label: "رقم الإحداثي",
  },
  {
    name: "abscissa",
    type: "text",
    label: "الإحداثي السيني",
  },
  {
    name: "y_coordinate",
    type: "text",
    label: "الإحداثي الصادي",
  },
];

export function CoordinatesDialog(props: CoordinatesDialogProps) {
  const { open, onClose, openMode, currentItem, licenseData, setLicenseData } =
    props;

  const [formValues, setFormValues] = useState(CoordinatesInitialValues);

  useEffect(() => {
    if (openMode === "edit") {
      setFormValues({
        coordinate_number: currentItem.value.coordinate_number,
        abscissa: currentItem.value.abscissa,
        y_coordinate: currentItem.value.y_coordinate,
      });
    }
    if (openMode === "add") {
      setFormValues({
        coordinate_number: "",
        abscissa: "",
        y_coordinate: "",
      });
    }
  }, [openMode, currentItem.value]);

  function handleSubmit(values: any) {
    if (openMode === "add") {
      setLicenseData({
        ...licenseData,
        coordinates: [
          ...licenseData.coordinates,
          {
            coordinate_number: values.coordinate_number,
            abscissa: values.abscissa,
            y_coordinate: values.y_coordinate,
          },
        ],
      });
    }
    if (openMode === "edit") {
      setLicenseData({
        ...licenseData,
        coordinates: licenseData.coordinates.map((item: any, index: number) =>
          index === currentItem.index
            ? {
                coordinate_number: values.coordinate_number,
                abscissa: values.abscissa,
                y_coordinate: values.y_coordinate,
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
        validationSchema={CoordinatesValidationSchema}
        enableReinitialize
      >
        {(formik) => (
          <GlobalDialog
            title="الإحداثيات"
            primaryButtonTitle={"حفظ"}
            onSubmit={formik.submitForm}
            open={open}
            onClose={onClose}
          >
            <div className="w-full py-9 grid grid-cols-1 md:grid-cols-2 gap-4">
              {coordinatesFields.map((item) => (
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

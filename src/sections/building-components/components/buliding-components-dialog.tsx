"use client";

import { useState, useEffect } from "react";

import { GlobalDialog } from "@/components/dialog";
import { Formik } from "formik";
import { TextInput } from "@/components/text-input";
import {
  BulidingComponentsInitialValues,
  BulidingComponentsValidationSchema,
} from "./validation";

interface BuildingComponentsDialogProps {
  open: boolean;
  onClose: () => void;
  openMode: string;
  currentItem: any;
  licenseData: any;
  setLicenseData: any;
}

export const buildingComponentsFields = [
  {
    name: "building_component",
    type: "text",
    label: "مكون البناء",
  },
  {
    name: "floor_area",
    type: "text",
    label: "مساحة الدور",
  },
  {
    name: "floors_number",
    type: "text",
    label: "عدد الادوار",
  },
  {
    name: "units_number",
    type: "text",
    label: "عدد الوحدات",
  },
  {
    name: "component_usage",
    type: "text",
    label: "استخدام المكون",
  },
  {
    name: "construction_ratio",
    type: "text",
    label: "نسبة البناء",
  },
];

export function BulidingComponentsDialog(props: BuildingComponentsDialogProps) {
  const { open, onClose, openMode, currentItem, licenseData, setLicenseData } =
    props;

  const [formValues, setFormValues] = useState(BulidingComponentsInitialValues);

  useEffect(() => {
    if (openMode === "edit") {
      setFormValues({
        building_component: currentItem.value.building_component,
        floor_area: currentItem.value.floor_area,
        floors_number: currentItem.value.floors_number,
        units_number: currentItem.value.units_number,
        component_usage: currentItem.value.component_usage,
        construction_ratio: currentItem.value.construction_ratio,
      });
    }
    if (openMode === "add") {
      setFormValues({
        building_component: "",
        floor_area: "",
        floors_number: "",
        units_number: "",
        component_usage: "",
        construction_ratio: "",
      });
    }
  }, [openMode, currentItem.value]);

  function handleSubmit(values: any) {
    if (openMode === "add") {
      setLicenseData({
        ...licenseData,
        buildingComponents: [
          ...licenseData.buildingComponents,
          {
            building_component: values.building_component,
            floor_area: values.floor_area,
            floors_number: values.floors_number,
            units_number: values.units_number,
            component_usage: values.component_usage,
            construction_ratio: values.construction_ratio,
          },
        ],
      });
    }
    if (openMode === "edit") {
      setLicenseData({
        ...licenseData,
        buildingComponents: licenseData.buildingComponents.map(
          (item: any, index: number) =>
            index === currentItem.index
              ? {
                  building_component: values.building_component,
                  floor_area: values.floor_area,
                  floors_number: values.floors_number,
                  units_number: values.units_number,
                  component_usage: values.component_usage,
                  construction_ratio: values.construction_ratio,
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
        validationSchema={BulidingComponentsValidationSchema}
        enableReinitialize
      >
        {(formik) => (
          <GlobalDialog
            title="مكونات البناء"
            primaryButtonTitle={"حفظ"}
            onSubmit={formik.submitForm}
            open={open}
            onClose={onClose}
          >
            <div className="w-full py-9 grid grid-cols-1 md:grid-cols-2 gap-4">
              {buildingComponentsFields.map((item) => (
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

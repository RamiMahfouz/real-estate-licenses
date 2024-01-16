"use client";

import clsx from "clsx";
import { useField, useFormikContext } from "formik";
import classes from "./text-input.module.css";

interface TextInputProps {
  label?: string;
  name: string;
  type: string;
  placeHolder?: string;
  isDisabled?: boolean;
}

export function TextInput(props: TextInputProps) {
  const { label, name, type, placeHolder, isDisabled } = props;
  const [field, meta] = useField<any>(name);

  const { setFieldValue } = useFormikContext();
  function handleChange(event: any) {
    setFieldValue(name, event.target.value);
  }

  return (
    <>
      <div className="w-full relative">
        <input
          readOnly={isDisabled ? true : false}
          placeholder={placeHolder}
          type={type}
          className={clsx(
            "w-full py-3 px-5 text-[#3c3c3b]  text-[14px] rounded-md border-[1px] focus:border-[black]  outline-none border-[#d2dbee]",
            {
              "border-red-600": meta.error && meta.touched,
              "bg-[#f3f6f7]": isDisabled,
            }
          )}
          value={field.value ?? ""}
          onChange={handleChange}
        />
        {meta.error && meta.touched ? (
          <div className="w-full text-right">
            <span className="text-red-600 text-[13px] mt-2 mx-4 text-right">
              {meta.error}
            </span>
          </div>
        ) : null}

        <span className="absolute text-[11px] text-[#000] right-4 -top-2 bg-white font-bold">
          {label}
        </span>
      </div>
    </>
  );
}

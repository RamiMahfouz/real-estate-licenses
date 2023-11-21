"use client";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, ReactNode } from "react";
import closeIcon from "../assets/icons/circle-x.svg";
import Image from "next/image";
import { LoadingButton } from "./button";
interface DialogProps {
  children: ReactNode;
  title: string;
  primaryButtonTitle?: any;
  onSubmit?: any;
  open: boolean;
  onClose: () => void;
}
export function GlobalDialog(props: DialogProps) {
  const { children, title, primaryButtonTitle, open, onClose, onSubmit } =
    props;
  return (
    <Transition appear show={open} as={Fragment}>
      <Dialog as="div" className="relative   z-10" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0  overflow-y-auto">
          <div className="flex min-h-full  items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className=" max-w-[800px] w-full   transform overflow-hidden rounded-2xl bg-white p-5 text-left align-middle shadow-xl transition-all">
                <Dialog.Title
                  as="h3"
                  className=" flex justify-between items-center"
                >
                  <span className="text-[22px] font-bold">{title}</span>

                  <Image
                    src={closeIcon}
                    alt="close"
                    className="w-[25px] h-[25px] cursor-pointer"
                    onClick={onClose}
                  />
                </Dialog.Title>

                <div className="mt-10 w-full flex ">{children}</div>

                <div className="mt-4 w-full  flex  justify-end ">
                  <LoadingButton onClick={onSubmit}>
                    {primaryButtonTitle}
                  </LoadingButton>
                  {/* <button
                    className="bg-[#08706d] rounded-lg px-10 py-2 text-white"
                    type="submit"
                    onClick={onSubmit}
                  >
                    {primaryButtonTitle}
                  </button> */}
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}

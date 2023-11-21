"use client";

import useStore from "@/store/store";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import closeIcon from "../assets/icons/circle-x.svg";
import Image from "next/image";
import { LoadingButton } from "./button";

export function WarningDialog() {
  const warningDialogInfo = useStore((state) => state?.warningDialogInfo);
  const closeWarningDialogHandler = useStore(
    (state) => state?.closeWarningDialogHandler
  );

  function onClose() {
    closeWarningDialogHandler();
  }

  return (
    <>
      <Transition appear show={warningDialogInfo.open} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={onClose}>
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
                <Dialog.Panel className=" max-w-[700px] w-full  transform overflow-hidden rounded-2xl bg-white p-5 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className=" flex justify-between items-center"
                  >
                    <span className="text-[18px] font-bold">
                      {warningDialogInfo.title}
                    </span>

                    <Image
                      src={closeIcon}
                      alt="close"
                      className="w-[25px] h-[25px] cursor-pointer"
                      onClick={onClose}
                    />
                  </Dialog.Title>

                  <div className="mt-10 rtl:text-right  w-full  ">
                    {warningDialogInfo.body}
                  </div>

                  <div className="mt-4 w-full flex  justify-between items-center ">
                    <span
                      onClick={onClose}
                      className=" cursor-pointer text-[16xp] text-[#6D7B9B]"
                    >
                      {"إغلاق"}
                    </span>
                    <LoadingButton
                      onClick={() => {
                        warningDialogInfo.onAcceptDispatch();
                      }}
                    >
                      {"تأكيد"}
                    </LoadingButton>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}

"use client";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, ReactNode, useState } from "react";
import arrowLeftIcon from "../../assets/icons/arrow-left.svg";
import arrowCircl from "../../assets/icons/arrow-circle.svg";
import chainIcon from "../../assets/icons/chain.svg";

import Image from "next/image";
import clsx from "clsx";
interface DropDownInfoProps {
  children: ReactNode;
  open: boolean;
  onClose: () => void;
}

interface ContentListProps {
  title: string;
  list: string[];
  hasLink?: boolean;
}

export function DropDownInfo(props: DropDownInfoProps) {
  const { children, open, onClose } = props;
  return (
    <Transition appear show={open} as={Fragment}>
      <Dialog
        as="div"
        className="relative hidden md:block w-full z-[999999]  "
        onClose={onClose}
      >
        <div className="fixed inset-0 w-full top-16  overflow-y-auto">
          <div className="flex absolute w-full   text-center">
            <Dialog.Panel className=" min-w-full  transform overflow-hidden  bg-gradient-to-r from-[#08706d]  to-white to-[30%] p-5 text-left align-middle shadow-xl transition-all">
              <div className="w-[80%]  flex pr-10">{children}</div>
            </Dialog.Panel>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}

export function ContentList(props: ContentListProps) {
  const { title, list, hasLink } = props;
  const [currentIcon, setCurrentIcon] = useState<any>(arrowLeftIcon);
  function hover() {
    setCurrentIcon(arrowCircl);
  }

  function unhover() {
    setCurrentIcon(arrowLeftIcon);
  }
  return (
    <>
      <div className="flex text-right flex-col">
        <div
          onClick={
            hasLink ? () => window.open("https://balady.gov.sa/") : undefined
          }
          className={clsx("flex mb-7 items-center gap-1", {
            "cursor-pointer": hasLink,
          })}
        >
          {hasLink ? (
            <Image src={chainIcon} alt="list" width={15} height={15} />
          ) : null}
          <span className="text-[14px]  font-bold">{title}</span>
        </div>

        <div className="flex flex-col gap-4">
          {list.map((item,index) => (
            <div
            key={index}
              onMouseOver={hover}
              onMouseOut={unhover}
              onClick={() => window.open("https://balady.gov.sa/")}
              className="flex items-center gap-2  hover:-translate-x-2 transition-all duration-500 cursor-pointer "
            >
              <Image src={arrowLeftIcon} alt="list" width={15} height={15} />
              <span className="text-[14px] hover:text-[#08706d]  text-[#85898e]">
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

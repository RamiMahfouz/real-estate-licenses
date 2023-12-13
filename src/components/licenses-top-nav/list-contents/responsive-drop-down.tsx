import Image from "next/image";
import { ReactNode, useState } from "react";
import arrowDownIcon from "../../../assets/icons/arrow-down.svg";

interface ResponsiveDropDownProps {
  title: string;
  content: any;
}

export function ResponsiveDropDown(props: ResponsiveDropDownProps) {
  const { title, content } = props;
  const [open, setOpen] = useState<boolean>(false);
  function toggleHandler() {
    setOpen(!open);
  }

  return (
    <>
      <div className="flex flex-col gap-2 w-full ">
        <div
          className="cursor-pointer flex items-center gap-1"
          onClick={toggleHandler}
        >
          <span className="text-white font-bold text-[14px]">{title}</span>
          <Image src={arrowDownIcon} alt="arrow-down" width={15} height={15} />
        </div>
        {open ? <div className="bg-white overflow-auto max-h-[500px] w-full p-3">{content}</div> : null}
      </div>
    </>
  );
}

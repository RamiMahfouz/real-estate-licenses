import { useState } from "react";
import { DropDownInfo } from "./drop-down";
import { AboutBalady } from "./list-contents/about-balady";
import { KnowledgeCenter } from "./list-contents/knowledge-center";
import { Services } from "./list-contents/services";
import { Inquiries } from "./list-contents/Inquiries";
import { Platforms } from "./list-contents/platforms";
import { ContactUs } from "./list-contents/contact-us";
import Image from "next/image";
import arrowDownIcon from "../../assets/icons/arrow-down.svg";
import { ResponsiveDropDown } from "./list-contents/responsive-drop-down";

import menuIcon from "../../assets/icons/menu-icon.svg";

const navListContent = [
  {
    title: "عن بلدي",
    content: <AboutBalady />,
  },
  {
    title: "مركز المعرفة",
    content: <KnowledgeCenter />,
  },
  {
    title: "الخدمات",
    content: <Services />,
  },
  {
    title: "الاستعلامات",
    content: <Inquiries />,
  },
  {
    title: "المنصات",
    content: <Platforms />,
  },
  {
    title: "تواصل معنا",
    content: <ContactUs />,
  },
];

export function LicenseTopNav() {
  const [open, setOpen] = useState<boolean>(false);
  const [openResponsiveList, setOpenResponsiveList] = useState<boolean>(false);

  const [listContent, setListContent] = useState<any>();

  function toggleHandler() {
    setOpenResponsiveList(!openResponsiveList);
  }

  function onClose() {
    setOpen(false);
  }
  return (
    <>
      <div className="w-full flex flex-col p-3 md:p-0  bg-[#08706d] transition-all duration-1000  md:h-[64px] ">
        <div className="flex w-full items-center p-3 justify-between md:justify-normal gap-7">
          {/* <Image
            src={"https://balady.gov.sa/themes/custom/balady/logo.svg"}
            alt="logo"
            width={90}
            height={40}
            className="mx-6"
          /> */}
          <div className=" items-center gap-7 mx-20 hidden md:flex">
            {navListContent.map((item) => (
              <div
                className=" cursor-pointer flex flex-col gap-1 items-center"
                onClick={() => {
                  setOpen(true);
                  setListContent(item.content);
                }}
              >
                <span className="text-white text-[14px] font-bold">
                  {item.title}
                </span>
                <Image
                  src={arrowDownIcon}
                  alt="arrow-down"
                  width={15}
                  height={15}
                />
              </div>
            ))}

            <DropDownInfo open={open} onClose={onClose}>
              {listContent}
            </DropDownInfo>
          </div>
          <div onClick={toggleHandler} className=" md:hidden cursor-pointer">
            <Image
              src={menuIcon}
              alt="logo"
              width={33}
              height={25}
              className="mx-6 "
            />
          </div>
        </div>
        {openResponsiveList ? (
          <div className="flex md:hidden  flex-col mt-4 p-3 gap-6 ">
            {navListContent.map((item) => (
              <ResponsiveDropDown title={item.title} content={item.content} />
            ))}
          </div>
        ) : null}
      </div>
    </>
  );
}

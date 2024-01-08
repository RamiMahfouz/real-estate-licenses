"use client";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import logoutIcon from "../assets/icons/logout.svg";
import useStore from "@/store/store";
import React, { useEffect, useRef, useState } from "react";
import { UploadImage } from "@/services/upload-image";
import defaultImage from "../assets/icons/placeholder.png";

export const adminNavListData = [
  {
    label: "التراخيص",
    href: "/dashboard",
  },
  {
    label: "المستخدمين",
    href: "/dashboard/users",
  },
];
export const userNavListData = [
  {
    label: "التراخيص",
    href: "/dashboard",
  },
];

export default function TopNav() {
  const route = useRouter();
  const logoInputRef: any = useRef(null);
  const footerInputRef: any = useRef(null);
  function navListPermission() {
    if (typeof window !== "undefined") {
      if (localStorage.getItem("userRole") === "admin") {
        return adminNavListData;
      } else {
        return userNavListData;
      }
    }
    return [];
  }

  const navListData = navListPermission();
  const setWarningDialogHandler = useStore(
    (state) => state.setWarningDialogHandler
  );
  const closeWarningDialog = useStore(
    (state) => state.closeWarningDialogHandler
  );
  const setSnackbarInfo = useStore((state) => state.setSnackbarInfo);
  function logoutHandler() {
    setWarningDialogHandler({
      open: true,
      title: "تسجيل الخروج",
      body: "هل أنت متأكد أنك تريد تسجيل الخروج؟",
      onAcceptDispatch: async () => {
        localStorage.removeItem("licenseToken");
        localStorage.removeItem("userRole");
        closeWarningDialog();
        route.push("/login");
      },
    });
  }
  function chooseFile(ref: any) {
    ref.current.click();
  }
  async function logoUploadImage(event: any) {
    await UploadImage({ File: event.target.files[0], key: "icon" });
    setSnackbarInfo({
      open: true,
      message: "تم رفع الصورة بنجاح",
      severity: "success",
    });
  }
  async function footerUploadImage(event: any) {
    await UploadImage({ File: event.target.files[0], key: "footer" });
    setSnackbarInfo({
      open: true,
      message: "تم رفع الصورة بنجاح",
      severity: "success",
    });
  }
  return (
    <>
      <div className="w-full flex flex-col fixed top-0 z-[100]">
        <div className="w-full bg-[#08706d] h-[64px] gap-5 flex items-center  justify-between px-20">
          <div className="flex items-center gap-3">
            <Image
              className="cursor-pointer"
              onClick={() => chooseFile(logoInputRef)}
              src="http://95.217.111.114:3000/images/icon.png"
              alt="logo"
              width={95}
              height={40}
            />
            <div className="flex gap-10  bg-white w-fit  px-4 py-2 rounded-lg items-center">
              {navListData.map((item) => (
                <TopNavLink key={item.label} {...item} />
              ))}
            </div>
          </div>

          <div className="flex items-center gap-5">
            <Image
              className="cursor-pointer"
              onClick={() => chooseFile(footerInputRef)}
              src="http://95.217.111.114:3000/images/footer.png"
              alt="logo"
              width={95}
              height={40}
            />
            <Image
              className="cursor-pointer"
              onClick={logoutHandler}
              src={logoutIcon}
              alt="logout"
              width={30}
              height={30}
            />
          </div>
        </div>
      </div>
      <input
        ref={logoInputRef}
        type="file"
        accept="image/**"
        className="hidden"
        onChange={logoUploadImage}
      ></input>
      <input
        ref={footerInputRef}
        type="file"
        accept="image/**"
        className="hidden"
        onChange={footerUploadImage}
      ></input>
    </>
  );
}

export function TopNavLink({
  href,
  label,
  className,
}: {
  href: string;
  label: string;
  className?: string;
}) {
  const pathname = usePathname();

  return (
    <Link href={href}>
      <span
        className={clsx(
          "cursor-pointer text-[14px]   relative text-md",
          className,
          {
            "font-bold text-black": href == pathname,
            " text-gray-500": href != pathname,
          }
        )}
      >
        {label}
        <div
          className={clsx({
            "absolute bottom-[-3px] rtl:right-0 ltr:left-0 w-[25px] h-[3px] bg-[#90d082]":
              href == pathname,
          })}
        />
      </span>
    </Link>
  );
}

"use client";

import { DropDownInfo } from "@/components/licenses-top-nav/drop-down";
import { LicenseTopNav } from "@/components/licenses-top-nav/licenses-top-nav";
import TopNav from "@/components/top-nav";
import { useState } from "react";

export default function LicenseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="w-full min-h-screen flex flex-col">
        <div className="w-full flex flex-col fixed top-0 z-[100]">
          <LicenseTopNav />
          <div className="w-full flex items-center px-8 lg:px-40 bg-[#fff] h-[60px] shadow ">
            <span>{"بيانات الرخصة"}</span>
          </div>
        </div>
        <div className="w-full h-full min-h-[100vh] flex p-6  flex-grow pt-[150px]  bg-[#eceff2]">
          {children}
        </div>
        <div className="w-full flex justify-center md:justify-end h-[80px] px-4">
          <div className="flex items-center gap-6">
            <span
              onClick={() => window.open("https://balady.gov.sa/")}
              className="text-[14px] hover:underline cursor-pointer"
            >
              {"اتصل بنا"}
            </span>
            <span
              onClick={() => window.open("https://balady.gov.sa/")}
              className="text-[14px] hover:underline cursor-pointer"
            >
              {"شروط الاستخدام"}
            </span>
            <span
              onClick={() => window.open("https://balady.gov.sa/")}
              className="text-[14px] hover:underline cursor-pointer"
            >
              {"خريطة الموقع"}
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

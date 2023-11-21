"use client";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import logoutIcon from "../assets/icons/logout.svg";
import useStore from "@/store/store";

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
  const userRole = localStorage.getItem("userRole");
  const navListData = userRole === "admin" ? adminNavListData : userNavListData;
  const setWarningDialogHandler = useStore(
    (state) => state.setWarningDialogHandler
  );
  const closeWarningDialog = useStore(
    (state) => state.closeWarningDialogHandler
  );
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

  return (
    <>
      <div className="w-full flex flex-col fixed top-0 z-[100]">
        <div className="w-full bg-[#08706d] h-[64px] gap-5 flex items-center  justify-between px-20">
          <div className="flex gap-10  bg-white w-fit  px-4 py-2 rounded-lg items-center">
            {navListData.map((item) => (
              <TopNavLink key={item.label} {...item} />
            ))}
          </div>

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

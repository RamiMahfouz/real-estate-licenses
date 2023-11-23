"use client";
import TopNav from "../../components/top-nav";
import dynamic from "next/dynamic";
const DynamicLoginGuard = dynamic(() => import("../../guards/login-guard"), {
  ssr: false,
});
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <DynamicLoginGuard>
        <TopNav />
        <div className="w-full h-full min-h-[100vh] flex p-6  flex-grow pt-[100px]  bg-[#eceff2]">
          {children}
        </div>
      </DynamicLoginGuard>
    </>
  );
}
